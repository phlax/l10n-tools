
import PluginService from 'web-ext-plugins/manager/services/service';

import TMServiceConfig from 'l10n-tools/config/manager/services/tm';
import schema from 'l10n-tools/schema/mt.json';


export default class TMService extends PluginService {

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
