const sh = require('shelljs')

exports.createNewFeature = (id) => {
    if (sh.which('git')) {
        // shell.echo('Sorry, this script requires git');
        // shell.exit(1);
        sh.exec('node --version', { silent: true }).output
    }
}