require('dotenv').config()

const api = require('./oba-api.js')
const chalk = require('chalk');
const express = require('express')
const app = express()
const port = 3000
// Chelsea & Maikel
const helpers = require ("./helpers.js")


const obaApi = new api({
    url: 'https://zoeken.oba.nl/api/v1/',
    key: process.env.PUBLIC
})

// Search for method, params and than optional where you wanna find something
// returns first 20 items
// obaApi.get(endpoint, params, filterKey)
// possible endpoints: search (needs 'q' parameter) | details (needs a 'frabl' parameter) | availability (needs a 'frabl' parameter) | holdings/root | index/x (where x = facet type (like 'book' ))
// possible parameters: q, librarian, refine, sort etc. check oba api documentation for all
// possible filterKey: any higher order key in response object, like title returns only title objects instead of full data object

const search = async (q, facet, page) => {
  	return await obaApi.get("search", {
  	  	q,
		librarian: true,
		refine: true,
		facet,
		page
  	})
}


(async () => {
	try {
		// Chelsea & Maikel
		const { data: searchData } = await search("language:dut", ["type(book)", "genre(romantisch-verhaal)", "pubYear(2005)"], 1)

		if (searchData) {
			const results = helpers.getResultsFromSearchData(searchData)
			const transformedResults = helpers.getTransformedResultFromResults(results)
			console.log(transformedResults)
			app.get("/", (req, res) => res.json(searchData))
			app.listen(port, () => console.log(chalk.green(`Listening on port ${port}`)))
		}
	} catch (error) {
		throw new Error(error)
	}
})()


// OLD CODE
// obaApi.get('search', {
//         q: 'language:dut',
//         librarian: true,
//         refine: true,
//         // page: 1,
//         facet: ['type(book)', 'genre(romantisch-verhaal)', 'pubYear(2000)']
//     },'author')
//     .then(response => {
//         // response ends up here
//         console.log(response)
//         // Make server with the response on the port
// 		app.listen(port, () => console.log(chalk.green(`Listening on port ${port}`)))
//         app.get('/', (req, res) => res.json(response))
//     })


//
// obaApi.get('search', {
//   q: 'language:dut',
//   librarian: true,
//   refine: true,
//   // count: 1,
//   facet: ['type(book)', 'genre(romantisch-verhaal)', 'pubYear(2000)']
// }, 'author')
// .then(response => {
//   // response ends up here
//   console.log(response)
//   // Make server with the response on the port
//   // app.get('/', (req, res) => res.json(response))
//   // app.listen(port, () => console.log(chalk.green(`Listening on port ${port}`)))
// })
