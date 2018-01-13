
import {parseString} from 'xml2js';

import Mutator from 'web-ext-plugins/mutator';
import TBXFlattener from 'l10n-tools/formats/tbx/flattener';

import schema from 'l10n-tools/formats/tbx/tbx.json';


export default class TBXParser {

    get schema () {
        return schema
    }

    get mutator () {
        return new Mutator(this.schema)
    }

    get flattener () {
        return new TBXFlattener()
    }

    parseString (data, cb) {
        parseString(data, (err, result) => {
            cb(this.flattener.flatten(this.mutator.mutate(result)))
        });
    }

    parseFile (file, cb) {
        const reader = new FileReader();
        // check filetype ?
        reader.onload = (f) => {
            this.parseString(f.target.result, cb)
        };
        reader.readAsText(file)
    }
}
