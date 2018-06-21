#!/usr/bin/env node
const program = require('commander')
const action = require('./action')

program
	.version('0.0.1', '-v, --version')

program
	.command('ft [id]')
	.description('Create new feature branch')
	.action(action.createNewFeature)

program
	.command('hf [id]')
	.description('Create new hotfix branch')
	.action(action.createNewHotfix)

program
	.command('mg [id] [type]')
	.description('Create new merge branch')
	.action(action.createNewMerge)

program
	.command('db [type]')
	.description('Delete flow branch')
	.action(action.deleteBranch)

program.parse(process.argv)