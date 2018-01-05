import React from 'react';

// import XRegExp from 'xregexp';

import CheckTestForm from '../forms/checktest';
import CheckInfo from '../info';


export default class CustomCheck extends React.Component {

    constructor(props) {
        super(props);
        this.state = {showTest: false};
    }

    revealCheckTest() {
        this.setState({showTest: true});
    }

    testCheck(evt, state) {
        evt.preventDefault();
        const {source, target} = state;
        this.props.manager.checks.testCustomCheck(evt.target.name, source, target).then(success => {
            if (!success) {
                this.setState({testResult: 'Check failed!'});
            } else {
                this.setState({testResult: 'Check passed!'});
            }
        });
    }

    toggleCheckInfo(evt) {
        const {showCheckInfo} = this.state;
        this.setState({showCheckInfo: !showCheckInfo});
        evt.preventDefault();
    }

    render() {
        const {showCheckInfo} = this.state;
        const {showTest} = this.state;
        const {testResult} = this.state;
        return (
            <li>
              <img src="/images/check.svg" width="24px" />
              <a href="#" onClick={this.toggleCheckInfo.bind(this)}>{this.props.check.name}</a>
              {showCheckInfo
                  && (<CheckInfo
                         manager={this.props.manager}
                         check={this.props.check} />)}

              {showTest
              && <CheckTestForm
                    parent={this}
                    testResult={testResult}
                    check={this.props.check}
                    manager={this.props.manager} />}

              <div>
                <button
                   name={this.props.check.name}
                   onClick={this.revealCheckTest.bind(this)}>Test</button>
                <button
                   name={this.props.check.name}
                   onClick={this.props.parent.removeCustomCheck.bind(this.props.parent)}>Remove</button>
              </div>
              <hr />
            </li>);
    }
}
