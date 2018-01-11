
import React from 'react';

import {OverlayLink} from 'web-ext-plugins/widgets/overlay';

import MTTestForm from './form';


export default class MTConfig extends React.Component {

    render() {
        return (
            <p>
              <OverlayLink text={this.props.data.name}>
                <MTTestForm
                   data={this.props.data}
                   plugin={this.props.plugin} />
              </OverlayLink>
            </p>
        );
    }
}
