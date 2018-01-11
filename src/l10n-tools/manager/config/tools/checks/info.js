import React from 'react';

import {OverlayButton} from 'web-ext-plugins/widgets/overlay';

import CheckTestForm from './forms/checktest';


export default class CheckInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {testResult: ''}
    }

    renderCheckTest () {
        const {check} = this.props;
        const {testResult} = this.state;
        if (check) {
            return (
                <CheckTestForm
                   testResult={testResult}
                   check={check}
                   manager={this.props.manager} />);
        }
        return 'TEST CHECK'
    }

    render() {
        return (
            <div>
              <p>Source regex: {this.props.check.sourceRegex}</p>
              <p>Target regex: {this.props.check.targetRegex}</p>
              <div>
                <OverlayButton
                   text="toolsChecksRunCheckTestButton"
                   onClick={() => {this.props.runCheck(this.props.check)}}
                   id="CHECKS">
                  {this.renderCheckTest()}
                </OverlayButton>
              </div>
            </div>);
    }
}
