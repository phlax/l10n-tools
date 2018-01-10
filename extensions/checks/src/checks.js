
import Plugin from 'l10n-tools/addon/plugin';


class ChecksRunner {
    get checks () {
        return {
            'End punctuation': ["(?<endpunc>[.!?])$", "(?<endpunc>[.!?])$"],
            'No script tags': ["", '<script']
        };
    }
}


class ChecksPlugin extends Plugin {

    constructor() {
        super()
        this.icon = 'images/checks.svg';
        this.provides = ['l10n.tools.checks'];
        this.runner = new ChecksRunner();
        this.tools = {
            'l10n.tools.checks': {
                checksCapitalizationMatches: {
                    category: "toolsChecksBasic",
                    name: "checksCapitalizationMatches",
                    sourceRegex: '^[A-Z]',
                    targetRegex: '^[A-Z]',
                    defaultEnabled: true}}}
    }

    get checks () {
        return this.runner.checks;
    }

    handle(request, sender, sendResponse) {
        if (request.message === 'runChecks') {
            sendResponse(
                this.runner.runChecks(
                    request.data.entity,
                    request.data.submitted,
                    request.data.submitted_plural));
            return true;
        }
    }
}

let checks = new ChecksPlugin();
checks.setup();
