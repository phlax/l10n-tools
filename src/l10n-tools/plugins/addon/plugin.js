
import AddonPlugin from 'web-ext-plugins/addon/plugin';
import L10nAddonPluginHandler from './handler';


export default class L10nPlugin extends AddonPlugin {

    get managerId () {
        return 'l10n@mozilla.com';
    }

    get checks () {
        return {};
    }

    get handlerClass () {
        return L10nAddonPluginHandler
    }
}
