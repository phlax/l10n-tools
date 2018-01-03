
import PluginManager from 'web-ext-plugins/manager';

import ChecksTool from './tools/checks'
import MTServices from './services/mt'
import TMServices from './services/tm'

import appTypes from './apps/types'


export default class L10nToolsPluginManager extends PluginManager {

    constructor() {
        super()
    }

    get appTypes () {
        return appTypes;
    }

    get toolTypes () {
        return {
            'l10n.tools.checks': {
                tool: new ChecksTool(this),
                name: "checksName",
            }
        }
    }

    get serviceTypes () {
        return {
            'l10n.services.mt': {
                services: new MTServices(this),
                name: "servicesMTName",
            },
            'l10n.services.tm': {
                services: new TMServices(this),
                name: "servicesTMName",
            }
        }
    }
}
