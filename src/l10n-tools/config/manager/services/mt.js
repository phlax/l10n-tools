
import React from 'react';

import MTConfig from './mt-config';


export default class MTServicesConfig extends React.Component {

    render() {
        return (
            <ul>
              {Object.entries(this.props.mts).map(([mt, data], key) => {
                  return (
                      <MTConfig
                         updateMts={this.props.updateMts}
                         manager={this.props.manager}
                         key={key}
                         mt={mt}
                         data={data}
                         />);
              })}
            </ul>);
    }
}
