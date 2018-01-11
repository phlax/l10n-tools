
import React from 'react';

import _ from 'web-ext-plugins/localized'


export default class TMConfig extends React.Component {

    render() {
        return (
            <li>
              <_ text={this.props.data.name} l10n={this.props.data.plugin} />
            </li>
        );
    }
}
