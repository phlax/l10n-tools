
import PluginExtension from 'web-ext-plugins/manager/extension';

import TMServiceConfig from 'l10n-tools/manager/config/services/tm';
import schema from 'l10n-tools/schema/services/tm.json';


export default class TMService extends PluginExtension {

    get name () {
        return "servicesTMName";
    }

    get schema () {
        return schema;
    }

    get configComponent () {
        return TMServiceConfig;
    }
}
