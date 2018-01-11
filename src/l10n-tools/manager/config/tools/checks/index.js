
import React from 'react';

import {OverlayButton} from 'web-ext-plugins/widgets/overlay';

// import CustomCheck from './custom';
import PackagedCheck from './packaged';

import CustomCheckForm from './forms';


export default class ChecksToolConfig extends React.Component {

    constructor(props) {
        super(props);
        this.state = {checks: []}
    }

    componentDidMount() {
        this.props.extension.manager.tools.get().then(tools => {
            this.setState({checks: tools[this.props.type]});
        });
    }

    render() {
        const {checks} = this.state;
        return (
            <div>
              <OverlayButton
                 text="toolsChecksRunAllChecksTestButton"
                 id="CHECKS">
                RUN ALL CHECKS
              </OverlayButton>
              <OverlayButton
                 text="toolsChecksAddCustomCheckButton"
                 id="CHECKS">
                {this.renderCheckForm()}
              </OverlayButton>
              <ul>
                {Object.values(checks).map((data, key) => {
                    return (
                        <PackagedCheck
                           check={data}
                           key={key}
                           extension={this.props.extension}
                           manager={this.props.extension.manager}
                           />);
                })}
              </ul>
            </div>);
    }

    renderCheckForm () {
        return (<CustomCheckForm manager={this.props.extension.manager} />);
    }
}
