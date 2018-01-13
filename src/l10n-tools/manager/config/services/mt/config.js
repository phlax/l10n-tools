
import React from 'react';

import {OverlayLink} from 'web-ext-plugins/widgets/overlay';

import MTTestFormOverlay from './form';


export default class MTConfig extends React.Component {

    render() {
        return (
            <p>
              <OverlayLink text={this.props.data.name} l10n={this.props.data.plugin}>
                <MTTestFormOverlay
                   data={this.props.data}
                   plugin={this.props.data.plugin} />
              </OverlayLink>
            </p>
        );
    }
}
