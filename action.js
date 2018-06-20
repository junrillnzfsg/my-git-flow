const sh = require('shelljs')
const ch = require('chalk')

exports.createNewFeature = (id) => {
    if (sh.which('git')) {
        // shell.echo('Sorry, this script requires git');
        // shell.exit(1);
        sh.exec(`git checkout master && git checkout -b feature/${id}`, () => {

        })
    }
}