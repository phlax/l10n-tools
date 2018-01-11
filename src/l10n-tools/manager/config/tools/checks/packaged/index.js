import React from 'react';

import CheckInfo from '../info';


export default class PackagedCheck extends React.Component {

    constructor(props) {
        super(props);
        this.state = {showCheckInfo: false};
    }

    toggleCheckInfo(evt) {
        const {showCheckInfo} = this.state;
        this.setState({showCheckInfo: !showCheckInfo});
        evt.preventDefault();
    }

    render() {
        const {showCheckInfo} = this.state;
        let icon = this.props.check.plugin.icon || "/images/check.svg";
        return (
            <li>
              <img src={icon} width="24px" />
              <a href="#" onClick={this.toggleCheckInfo.bind(this)}>{this.props.check.name}</a>
              {showCheckInfo
                  && (
                      <CheckInfo
                         extension={this.props.extension}
                         manager={this.props.manager}
                         runCheck={this.props.runCheck}
                         check={this.props.check} />)}
            </li>);
    }
}
