const utils = require('./utils')

exports.createNewFeature = (id) => {
	utils.buildBranch(`feature/${id}`)
}

exports.createNewHotfix = (id) => {
	utils.buildBranch(`hotfix/${id}`)
}

exports.createNewMerge = (id, type) => {
	utils.buildBranch(`merge/${id}`, type)
}

exports.deleteBranch = utils.deleteBranch