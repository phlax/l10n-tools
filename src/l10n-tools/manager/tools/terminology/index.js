
import TerminologyToolConfig from 'l10n-tools/manager/config/tools/terminology';
import PluginExtension from 'web-ext-plugins/manager/extension';
import schema from 'l10n-tools/schema/tools/terminology.json'

import {TerminologyRegistry, TerminologyFileRegistry} from './registry';


export default class TerminologyTool extends PluginExtension {


    constructor (manager) {
        super(manager)
        this.files = new TerminologyFileRegistry(this);
        this.terminology = new TerminologyRegistry(this);
    }

    get name () {
        return "toolsTerminologyName";
    }

    get schema () {
        return schema;
    }

    get configComponent () {
        return TerminologyToolConfig
    }

    importData (filename, data, lastModified) {
        return this.files.register({filename: filename, lastModified: lastModified}).then(() => {
            return this.files.get().then(() => {
                data.map(d => d.filename = filename)
                data = data.filter(d => (d.filename && d.term && d.translation))
                return this.terminology.register([...data])
            })
        })
    }
}
