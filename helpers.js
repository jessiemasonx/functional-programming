// Shout out naar Maikel en Chelsea voor het helpen
// const getResultsFromSearchData = (searchData) => {
//     return searchData.aquabrowser
//         && searchData.aquabrowser.results
//         && searchData.aquabrowser.results[0]
//         && searchData.aquabrowser.results[0].result
//         || []
// }

const fs = require('fs')

const getAuthorFromResult = (result) => {
    return result.authors
        && result.authors["main-author"]
        && result.authors["main-author"].$t
        || undefined
}

const getTitleFromResult = (result) => {
    return result.titles
        && result.titles.title
        && result.titles.title.$t
        || undefined
}

const getPublisherFromResult = (result) => {
    return result.publication
        && result.publication.publishers
        && result.publication.publishers.publisher
        && result.publication.publishers.publisher.$t
        || undefined
}

const getPublicationYearFromResult = (result) => {
    return result.publication
        && result.publication.year
        && result.publication.year.$t
		&& Number(result.publication.year.$t)
        || undefined
}

const getGenreFromResult = (result) => {
    return result.genres
        && result.genres.genre
        && result.genres.genre.$t
        || undefined
}

// als getGenreFromResult undefined is, moet hij er uit

const getLanguageFromResult = (result) => {
    return result.languages
        && result.languages.language
        && result.languages.language.$t
        || undefined
}


// help to Maikel and Chelsea
const getTransformedResultFromResults = (results) => {
    return results
        ? results.map(result => ({
            author: getAuthorFromResult(result),
            title: getTitleFromResult(result),
            publicationYear: getPublicationYearFromResult(result),
            language: getLanguageFromResult(result),
			genre: getGenreFromResult(result)
        }))
        : []
}


const CACHE = {};
function getGenderFromName (firstname) {
	if (Object.keys(CACHE).length <= 0) {
		Object.assign(CACHE, JSON.parse(fs.readFileSync("./names.json", "utf8")));
	}
	const man = CACHE.mannen.find(name => name === firstname);
	const vrouw = CACHE.vrouwen.find(name => name === firstname);
	if (!(man || vrouw) || man && vrouw) return null; //If no result or ambiguous return null.
	return (man && "Man") || (vrouw && "Vrouw");
}

module.exports = {
    getTransformedResultFromResults,
    getPublicationYearFromResult,
    getAuthorFromResult,
	getGenreFromResult,
	getGenderFromName
}
