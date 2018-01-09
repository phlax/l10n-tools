
import React from 'react';

import TMConfig from './tm-config';


export default class TMServiceConfig extends React.Component {

    render() {
        return (
            <ul>
              {Object.entries(this.props.services).map(([tm, data], key) => {
                  return (
                      <TMConfig
                         manager={this.props.manager}
                         key={key}
                         tm={tm}
                         data={data}
                         />);
              })}
            </ul>);
    }
}
