const OBA = require("oba-api");
const chalk = require("chalk");

function sanitizeOptionObject (options, page, rctx) {
	const customOptions = ["count", "filter", "log"];
	const safeOptions = Object.keys(options)
		.filter(key => !customOptions.includes(key))
		.reduce((obj, key) => ({
			...obj,
			[key]: options[key]
		}), {});
	if (rctx) {
		safeOptions.rctx = rctx;
	}
	if (page) {
		safeOptions.page = page;
	}
	return safeOptions;
}

function log (string, options) {
	if (options.log) {
		// string is in async get
		console.log(string);
	}
}

module.exports = class OBAWrapper {
	constructor (options) {
		this.client = new OBA(options);
		this.rctx = null;
	}

	async get (endpoint, options) {
		// alle options krijgen die kleur door chalk
		log(chalk.hex("#F0E02B")("Requesting..."), options);
		const results = [];
		let page = 1;
		// options.count is the results you ask for
		// results.length is total results
		while (results.length < options.count) {
			// Send out initial request
			// parse the data when data is ready
			// update rctx
			const response = JSON.parse(await this.client.get(endpoint, sanitizeOptionObject(options, page++, this.rctx)));

			// Get context to speed up following requests.
			// if cant find rctx
			if (!this.rctx) {
				this.rctx = response.aquabrowser.meta.rctx;
			}
			// Make sure the API can actually provide the number of items the user requested
			const maxResults = Number(response.aquabrowser.meta.count);
			// options.count geef je mee in index.js, is hoe veel resultaten je wilt zien
			// maxResults is hoe veel resultaten er zijn
			// hij checkt of wat je wilt zien groter is dan hoe veel er is, want dan is er een warning
			if (options.count > maxResults) {
				log(`${chalk.bold("Warning:")} Requested ${chalk.hex("#AE81FF")(options.count)} but only ${chalk.hex("#AE81FF")(maxResults)} available.`, options);
				options.count = maxResults;
			}

			// Check if user provided filter
			let __results = response.aquabrowser.results.result;
			if (options.filter) {
				__results = __results.filter(result => {
					return options.filter(result);
				});
			}

			// Push individual values to skip flattening later
			results.push(...__results);
		}

		// Cull any extra results
		// options.count is the results you ask for
		// results.length is total results
		if (results.length > options.count) {
			results.length = options.count;
		}

		// Reset context to allow other requests
		// empty the rctx to start over
		this.rctx = null;

		//Do some nice logging
		log(chalk.green("Succesfully returned")
			+ " "
			+ chalk.hex("#AE81FF")(results.length)
			+ " "
			+ chalk.green("items."), options);

		return results;
	}
}
