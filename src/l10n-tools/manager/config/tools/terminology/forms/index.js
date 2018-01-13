
import React from 'react';

import Fieldset from 'web-ext-plugins/widgets/fieldset';
import TerminologyImportTable from './import';
import TBXParser from 'l10n-tools/formats/tbx/parser';


export default class CustomTerminologyForm extends React.Component {

    constructor (props) {
        super(props);
        this.state = {termEntries: []};
        this.parser = new TBXParser();
        this.uploadFile = this.uploadFile.bind(this);
    }

    uploadFile (evt) {
        const curFiles = evt.target.files;
        if (curFiles.length > 0) {
            this.parser.parseFile(curFiles[0], entries => {
                this.setState({termEntries: entries});
            });
        }
    }

    render() {
        const {termEntries} = this.state;
        return (
            <form>
              <Fieldset legend="">
                <input type="file" onChange={this.uploadFile} />
              </Fieldset>
              {termEntries.length > 0 &&
                  <TerminologyImportTable data={termEntries} />
              }
            </form>);
    }
}
