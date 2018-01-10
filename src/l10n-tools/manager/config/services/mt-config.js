
import React from 'react';

import _ from 'web-ext-plugins/localized'


export default class MTConfig extends React.Component {

    render() {
        return (
            <div>
              <_ text={this.props.data.name} l10n={this.props.data.plugin} />
            </div>
        );
    }
}
