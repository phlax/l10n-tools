

import React from 'react';

// import CustomCheck from './custom';
import PackagedCheck from './packaged';

import CustomCheckForm from './forms';


export default class ChecksToolConfig extends React.Component {

    constructor(props) {
        super(props);
        this.state = {checks: []}
    }

    componentDidMount() {
        this.props.manager.tools.get().then(tools => {
            this.setState({checks: tools[this.props.type]});
        });
    }

    render() {
        const {checks} = this.state;
        return (
            <div>
              <ul>
                {Object.values(checks).map((data, key) => {
                    return (
                        <PackagedCheck
                           check={data}
                           key={key}
                           manager={this.props.manager}
                           />);
                })}
              </ul>
              <CustomCheckForm manager={this.props.manager} />
            </div>);
    }
}
