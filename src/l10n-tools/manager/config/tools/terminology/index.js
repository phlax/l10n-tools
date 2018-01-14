
import React from 'react';

import CustomTerminologyForm from './forms';
import {OverlayButtonWidget} from 'web-ext-plugins/widgets/overlay';


export default class TMToolConfig extends OverlayButtonWidget {

    get text () {
        return "toolsTerminologyUploadTBXButton";
    }

    get id () {
        return 'TERMINOLOGY';
    }

    renderContent () {
        return (<CustomTerminologyForm manager={this.props.extension.manager} />);
    }

}
