
import WeblateApp from "./weblate-app"
import AppPlugin from 'l10n-tools/addon/app';

const longDescription = [
    'Provides the following features',
    '- Custom checks in Weblate',
    '- Custom MT/TM services in Weblate',
    '- Hookup with upstream respositories (if relevant addon installed)',
    '- In context translation (?!??)',
    '',
].join('\n');


class WeblatePlugin extends AppPlugin {

    constructor() {
        super()
        this.name = 'Weblate'
        this.icon = 'images/weblate.svg'
        this.provides = ['l10n.apps.web']
        this.app = WeblateApp;
        this.longDescription = longDescription;
        this.recommendedApps = [
            {name: "Weblate",
             icon: "/images/weblate.svg",
             url: "http://localhost:8000"}];
        }
}

let weblate = new WeblatePlugin();
weblate.setup();
