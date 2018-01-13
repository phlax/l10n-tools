
import React from 'react';

import Subheading from 'web-ext-plugins/widgets/sub-heading';
import {Columns} from 'web-ext-plugins/widgets/split-container';

import MTTestForm from './form';


export default class MTTestFormOverlay extends Columns {

    get columns () {
        return [
            [this.renderSourceColumn(), 2],
            [this.renderResultColumn(), 2]];
    }

    renderMTInfo () {
        return (
            <div>
              <p>Plugin: {this.props.data.plugin}</p>
            </div>);
    }

    renderMTTitle () {
        return (<Subheading text={this.props.data.name} l10n={this.props.data.plugin} />);
    }

    renderSourceColumn () {
        return (
            <div>
              {this.renderMTTitle()}
              {this.renderMTInfo()}
              <MTTestForm />
            </div>
        );
    }

    renderResultColumn () {
        return 'RESULT';
    }
}
