
import PootleApp from "./pootle-app"
import AppPlugin from 'l10n-tools/plugins/addon/app';

const longDescription = [
    'Provides the following features',
    '- Custom checks in Pootle',
    '- Custom MT/TM services in Pootle',
    '- Hookup with upstream respositories (if relevant addon installed)',
    '- In context translation (?!??)',
    '',
].join('\n');


export default class PootlePlugin extends AppPlugin {

    constructor() {
        super()
        this.app = PootleApp;
        this.name = 'Pootle'
        this.icon = 'images/pootle.svg'
        this.provides = ['l10n.apps.web']
        this.longDescription = longDescription;
        this.recommended = {
            apps: {
                'l10n.apps.web': [
                    {name: "The Document Foundation",
                     icon: "/images/document-foundation.svg",
                     url: "http://localhost:8000"},
                    {name: "Pootle",
                     icon: "/images/pootle.svg",
                     url: "http://localhost:8000"}]}}
    }
}
