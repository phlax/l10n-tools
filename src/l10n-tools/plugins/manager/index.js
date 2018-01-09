
import PluginManager from 'web-ext-plugins/manager';

import ChecksTool from './tools/checks'
import MTService from './services/mt'
import TMService from './services/tm'

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
                service: new MTService(this),
                name: "servicesMTName",
            },
            'l10n.services.tm': {
                service: new TMService(this),
                name: "servicesTMName",
            }
        }
    }
}
