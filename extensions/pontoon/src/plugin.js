
import PontoonApp from "./pontoon-app"
import AppPlugin from 'l10n-tools/addon/app';


const longDescription = [
    'Provides the following features',
    '- Custom checks in Pontoon',
    '- Custom MT/TM services in Pontoon',
    '- Hookup with upstream respositories (if relevant addon installed)',
    '- In context translation (?!??)',
    '',
].join('\n');


export default class PontoonPlugin extends AppPlugin {

    constructor() {
        super()
        this.name = 'Pontoon'
        this.icon = 'images/pontoon.svg'
        this.provides = ['l10n.apps.web']
        this.app = PontoonApp;
        this.longDescription = longDescription;
        this.recommended = {
            apps: {
                'l10n.apps.web': [
                    {name: "Mozilla",
                     icon: "/images/mozilla.svg",
                     url: "http://localhost:8000"}]}}
        this.services = {}
        this.tools = {}
        this.notifications = {
            pontoonFooNotification: {
                category: 'pontoon',
                name: "fooNotification",
                defaultEnabled: true},
            pontoonBarNotification: {
                category: 'pontoon',
                name: "barNotification",
                defaultEnabled: true},
        }
        this.preferences = {
            pontoonFoo: {
                category: 'pontoon',
                name: "preferenceFoo",
                type: "string",
                defaultValue: "foo"},
            pontoonBar: {
                category: 'pontoon',
                name: "preferenceBar",
                type: "boolean",
                defaultValue: "bar"},
            pontoonBaz: {
                category: 'pontoon-other',
                name: "preferenceBaz",
                type: "string",
                defaultValue: "bar"}}
    }
}
