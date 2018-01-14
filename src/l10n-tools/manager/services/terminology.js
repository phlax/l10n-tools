
import PluginExtension from 'web-ext-plugins/manager/extension';
import TerminologyServiceConfig from 'l10n-tools/manager/config/services/terminology';
import schema from 'l10n-tools/schema/tools/terminology.json';


export default class TerminologyService extends PluginExtension {

    get name () {
        return "servicesTerminologyName";
    }

    get schema () {
        return schema;
    }

    get configComponent () {
        return TerminologyServiceConfig;
    }
}
