
import React from 'react';

import {Select, Option} from 'web-ext-plugins/widgets/select';
import TextInput from 'web-ext-plugins/widgets/text-input';


export default class MTTestForm extends React.Component {

    render () {
        return (
            <div>
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
}
