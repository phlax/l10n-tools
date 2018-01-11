
import React from 'react';

import {Select, Option} from 'web-ext-plugins/widgets/select';
import Subheading from 'web-ext-plugins/widgets/sub-heading';
import TextInput from 'web-ext-plugins/widgets/text-input';
import {Columns} from 'web-ext-plugins/widgets/split-container';


export default class MTTestForm extends Columns {

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
              <TextInput placeholder="servicesTestMTSource" />
              <p>
                Source Language: <Select><Option /></Select>
              </p>
              <p>
                Target Language: <Select><Option /></Select>
              </p>
            </div>
        );
    }

    renderResultColumn () {
        return 'RESULT';
    }
}
