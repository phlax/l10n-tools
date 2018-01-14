
import Registry from 'web-ext-plugins/registry'

import schema from 'l10n-tools/schema/tools/terminology.json'
import fileSchema from 'web-ext-plugins/schema/file.json'


export class BaseTerminologyRegistry extends Registry {

    constructor(tool) {
        super()
        this.tool = tool
        this.manager = this.tool.manager;
    }

    register (objs) {
        return this.get().then(registered => {
            let _registered = []
            for (let item in registered) {
                if (registered[item].filename !== objs[0].filename) {
                    _registered.push(registered[item])
                }
            }
            _registered = _registered.concat(objs)
            return this.set(_registered)
        });
    }
}

export class TerminologyRegistry extends BaseTerminologyRegistry {

    get schema () {
        return schema;
    }
}


export class TerminologyFileRegistry extends BaseTerminologyRegistry {

    get schema () {
        return fileSchema;
    }

}
