require('dotenv').config()

// const api = require('./oba-api.js')
const chalk = require('chalk');
const express = require('express')
const app = express()
const port = 3000
// Chelsea & Maikel
const helpers = require ("./helpers.js")
const obawrapper = require ("./obawrapper.js")


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
		count: 20
  	})
}


(async () => {
	try {
		// Chelsea & Maikel
		const results = await search("language:dut", ["type(book)", "genre(romantisch-verhaal)", "pubYear(2018)"], 1)

		if (results) {
			// const results = helpers.getResultsFromSearchData(searchData)
			const transformedResults = helpers.getTransformedResultFromResults(results)
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
	   //
       // refine: true,
