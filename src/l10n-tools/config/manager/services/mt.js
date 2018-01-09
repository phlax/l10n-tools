
import React from 'react';

import MTConfig from './mt-config';


export default class MTServicesConfig extends React.Component {

    render() {
        return (
            <ul>
              {Object.entries(this.props.services).map(([mt, data], key) => {
                  return (
                      <MTConfig
                         manager={this.props.manager}
                         key={key}
                         mt={mt}
                         data={data}
                         />);
              })}
            </ul>);
    }
}
