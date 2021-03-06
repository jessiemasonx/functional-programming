require("dotenv").config()

// packages

// extra
const chalk = require("chalk")
const d3 = require("d3")

// server and api
const express = require("express")
const obawrapper = require("node-oba-api-wrapper")
const app = express()
const port = 3000

// functions
const helpers = require("./helpers/helpers.js")

const obaApi = new obawrapper({
    public: process.env.PUBLIC,
    secret: process.env.SECRET
})

// Credits to Wouter
// used his api wrapper to get more then 20 results
const search = async (q, facet, page, count) => {
    return await obaApi.get("search", {
        q,
        librarian: true,
        refine: true,
        facet,
        page,
        count: 20,
        filter: (result) => {
            // Credits to Maikel and Chelsea
            const publicationYear = helpers.getPublicationYearFromResult(result)
            const currentYear = new Date().getFullYear()
            // return publicationYear === 2018
            return publicationYear === currentYear - 3 &&
                helpers.getGenreFromResult(result) ||
                publicationYear === 2017 &&
                helpers.getGenreFromResult(result) ||
                publicationYear === 2016 &&
                helpers.getGenreFromResult(result) ||
                publicationYear === 2015 &&
                helpers.getGenreFromResult(result)
            // return where is has a genre that is romantisch verhaal
        }
    })
}

(async () => {
    try {
        // q, facet, page
        const results = await search("language:dut", ["type(book)", "genre(romantisch-verhaal)"], 1)
        // Credits to Chelsea & Maikel
        // if you have results
        if (results) {
            // get the results from helpers.js
            const transformedResults = helpers.getTransformedResultFromResults(results)
            // get the authors from the results
            const authors = transformedResults.map(result => result.author)
            // get the first names without the dots from helpers.js
            const transformedAuthors = authors.map(helpers.getFirstNameAndGender)
            // get every first name and gender
            const filterTransformedAuthors = transformedAuthors.filter(transformedAuthor => {
                return transformedAuthor.name && transformedAuthor.gender
            })
            // show the author name and gender in the console
            console.log(filterTransformedAuthors)
            // the results in console
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
