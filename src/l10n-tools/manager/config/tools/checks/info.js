import React from 'react';

import CheckTestForm from './forms/checktest';


export default class CheckInfo extends React.Component {

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
        this.props.manager.checks.testCheck(evt.target.name, source, target).then(success => {
            if (!success) {
                this.setState({testResult: 'Check failed!'});
            } else {
                this.setState({testResult: 'Check passed!'});
            }
        });
    }

    render() {
        const {showTest} = this.state;
        const {testResult} = this.state;
        return (
            <div>
              <p>Source regex: {this.props.check.sourceRegex}</p>
              <p>Target regex: {this.props.check.targetRegex}</p>

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
              </div>
            </div>);

    }
}
