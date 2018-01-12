
import React from 'react';

import CustomTerminologyForm from './forms';
import OverlayButton from 'web-ext-plugins/widgets/overlay';


export default class TerminologyToolConfig extends React.Component {

    renderTerminologyForm () {
        return (<CustomTerminologyForm manager={this.props.extension.manager} />);
    }

    render() {
        return (
            <div>
              <OverlayButton
                 text="toolsTerminologyUploadTBXButton"
                 id="TERMINOLOGY">
                {this.renderTerminologyForm()}
              </OverlayButton>
            </div>);
    }
}
