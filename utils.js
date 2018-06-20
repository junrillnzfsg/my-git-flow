const sh = require('shelljs')
const log = require('./log')
const silent = { silent: true }

const validGitEnvironment = () => {
	if (!sh.which('git')) {
		sh.echo('Sorry, this script requires git')
		sh.exit(1)
	}
	return !!sh.which('git')
}

exports.buildBranch = (branchName, type) => {
	if(!validGitEnvironment()) return

	if (sh.exec('git checkout master', silent).code !== 0) return log.error('Unable to checkout from master')

	if (sh.exec(`git checkout -b ${branchName}`, silent).code !== 0) return log.error(`Unable to create ${branchName}`)

	if (branchName.indexOf('merge') !== -1) {
		const originalBranch = branchName.replace('merge', type)
		sh.exec(`git merge ${originalBranch}`, silent)
		log.info(`Created ${branchName} - please fix conflict if there is any`)
	} else {
		log.success(`Created ${branchName}`)
	}
}

exports.deleteBranch = (type) => {
	sh.exec(`git branch | grep ${type}`, silent, (code, output) => {
		const branchList = output
			.split('\n')
			.map(str => str.trim())
			.filter(str => str && str.indexOf('*') === -1)
		branchList.forEach(branch => {
			sh.exec(`git branch -D ${branch}`, silent)
		})
		log.success(`Successfully deleted all ${type}`)
	})
}