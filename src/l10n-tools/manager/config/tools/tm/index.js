
import React from 'react';

import {OverlayButtonWidget} from 'web-ext-plugins/widgets/overlay';
import CustomTMForm from './forms';


export default class TMToolConfig extends OverlayButtonWidget {

    get text () {
        return "toolsTMUploadTMXButton";
    }

    get id () {
        return 'TM';
    }

    renderContent () {
        return (<CustomTMForm manager={this.props.extension.manager} />);
    }
}
