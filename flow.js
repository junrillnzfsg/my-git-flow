#!/usr/bin/env node
const program = require('commander')
const action = require('./action')

program
    .version('0.0.1', '-v, --version')

program
    .command('feature [id]')
    .description('Create new feature branch')
    .action(action.createNewFeature)

program.parse(process.argv)