
import PluginService from 'web-ext-plugins/manager/services/service';

import MTServiceConfig from 'l10n-tools/config/manager/services/mt';
import schema from 'l10n-tools/schema/mt.json';


export default class MTService extends PluginService {

    get name () {
        return "servicesMTName";
    }

    get schema () {
        return schema;
    }

    get configComponent () {
        return MTServiceConfig;
    }
}
