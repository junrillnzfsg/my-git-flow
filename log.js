const ch = require('chalk')
const log = console.log //eslint-disable-line

exports.error = (value) => {
	log(`\n
${ch.bgRed.black('ERROR')} ${ch.red(value)}
	\n`)
}

exports.success = (value) => {
	log(`\n
${ch.bgGreen.black('SUCCESS')} ${ch.green(value)}
	\n`)
}

exports.info = (value) => {
	log(`\n
${ch.bgBlue.black('INFO')} ${ch.blue(value)}
	\n`)
}
