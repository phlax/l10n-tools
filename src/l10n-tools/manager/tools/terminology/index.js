
import TerminologyToolConfig from 'l10n-tools/manager/config/tools/terminology';
import PluginExtension from 'web-ext-plugins/manager/extension';
import schema from 'l10n-tools/schema/tools/terminology.json'


export default class TerminologyTool extends PluginExtension {

    get name () {
        return "toolsTerminologyName";
    }

    get schema () {
        return schema;
    }

    get configComponent () {
        return TerminologyToolConfig
    }
}
