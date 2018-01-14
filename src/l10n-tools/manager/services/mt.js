
import PluginExtension from 'web-ext-plugins/manager/extension';

import MTServiceConfig from 'l10n-tools/manager/config/services/mt';
import schema from 'l10n-tools/schema/services/mt.json';


export default class MTService extends PluginExtension {

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
