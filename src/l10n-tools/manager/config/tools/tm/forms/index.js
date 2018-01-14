
import React from 'react';

import TMImportTable from './import';
import TBXParser from 'l10n-tools/formats/tbx/parser';
import {ParsedUploadForm} from 'web-ext-plugins/widgets/upload';


export default class CustomTMForm extends ParsedUploadForm {

    get parser () {
        return new TBXParser();
    }

    get tableComponent () {
        return TMImportTable;
    }

}
