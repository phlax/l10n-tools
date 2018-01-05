
import React from 'react';

import TMConfig from './tm-config';


export default class TMServicesConfig extends React.Component {

    render() {
        return (
            <ul>
              {Object.entries(this.props.tms).map(([tm, data], key) => {
                  return (
                      <TMConfig
                         updateTms={this.props.updateTms}
                         manager={this.props.manager}
                         key={key}
                         tm={tm}
                         data={data}
                         />);
              })}
            </ul>);
    }
}
