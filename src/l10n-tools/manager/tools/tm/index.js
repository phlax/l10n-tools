
import TMToolConfig from 'l10n-tools/manager/config/tools/tm';
import PluginExtension from 'web-ext-plugins/manager/extension';
import schema from 'l10n-tools/schema/tools/tm.json'


export default class TMTool extends PluginExtension {

    get name () {
        return "toolsTMName";
    }

    get schema () {
        return schema;
    }

    get configComponent () {
        return TMToolConfig
    }
}
