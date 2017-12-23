
import Plugin from 'l10n-tools/plugins/addon/plugin';


const longDescription = [
    'Provides the following features',
    '- Inline hookups with web apps (eg. Pontoon, Pootle)',
    '',
].join('\n');

class GithubPlugin extends Plugin {

    constructor() {
        super()
	this.icon = 'images/github.svg'
	this.provides = ['l10n.web.repo']
	this.name = "Github"
	this.longDescription = longDescription;
    }
}

let github = new GithubPlugin();
github.setup();
