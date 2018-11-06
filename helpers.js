// Shout out naar Maikel en Chelsea voor het helpen
// const getResultsFromSearchData = (searchData) => {
//     return searchData.aquabrowser
//         && searchData.aquabrowser.results
//         && searchData.aquabrowser.results[0]
//         && searchData.aquabrowser.results[0].result
//         || []
// }

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

// const getGenreFromResult = (result) => {
//     return result.genres
//         && result.genres.genre
//         && result.genres.genre.$t
//         || undefined
// }

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
            language: getLanguageFromResult(result)
			// genre: getGenreFromResult(result)
        }))
        : []
}


module.exports = {getTransformedResultFromResults, getPublicationYearFromResult}
