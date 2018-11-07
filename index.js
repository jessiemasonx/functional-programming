require('dotenv').config()

// const api = require('./oba-api.js')
const chalk = require('chalk');
const express = require('express')
const app = express()
const port = 3000
// Chelsea & Maikel
const helpers = require("./helpers.js")
const obawrapper = require("node-oba-api-wrapper")
// d3
const d3 = require("d3");


const obaApi = new obawrapper({
    public: process.env.PUBLIC,
    secret: process.env.SECRET
})

const search = async (q, facet, page, count) => {
    return await obaApi.get("search", {
        q,
        librarian: true,
        refine: true,
        facet,
        page,
        count: 100,
        filter: (result) => {
            const publicationYear = helpers.getPublicationYearFromResult(result)
            const currentYear = new Date().getFullYear()
            return publicationYear === currentYear // 2018
			// return where is has a genre
				&& helpers.getGenreFromResult(result)
            	// || publicationYear === currentYear - 3 // 2015
             // || publicationYear === currentYear - 8 // 2010
            // || publicationYear === currentYear - 13
            // || publicationYear === currentYear - 18
            // || publicationYear === currentYear - 23
            // || publicationYear === currentYear - 28
        }
    })
}


(async () => {
    try {
        // Chelsea & Maikel
        const results = await search("language:dut", ["type(book)", "genre(romantisch-verhaal)"], 1)

        if (results) {
            // const results = helpers.getResultsFromSearchData(searchData)
            const transformedResults = helpers.getTransformedResultFromResults(results)
			const authors = transformedResults.map(result => result.author)
			const transformedAuthors = authors.map(author => {
				const authorFirstNameLastName = author.split(', ')
				let firstName = authorFirstNameLastName[1]
				const firstDot = firstName && firstName.indexOf(".")
				const hasDots = firstDot !== -1
				const removeStartIndex = hasDots ? firstDot - 1 : undefined
				const endIndex = firstName && firstName.length
				// Annie
				const tokensToRemove = firstName && removeStartIndex !== undefined && firstName.slice(removeStartIndex, endIndex)
				const transformedFirstName = tokensToRemove && firstName.replace(tokensToRemove, '').trim()
				const nameToUse = hasDots ? transformedFirstName : firstName
				return {
					name: nameToUse,
					gender: helpers.getGenderFromName(nameToUse),
				}
			})
			console.log(transformedAuthors)
            console.log(transformedResults)
            const dataWrapper = {
                "results": transformedResults
            }
            app.get("/", (req, res) => res.json(dataWrapper))
            app.listen(port, () => console.log(chalk.green(`Listening on port ${port}`)))
        }
    } catch (error) {
        throw new Error(error)
    }
})()
