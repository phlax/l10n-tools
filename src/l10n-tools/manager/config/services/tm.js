
import React from 'react';

import TMConfig from './tm-config';


export default class TMServiceConfig extends React.Component {

    constructor(props) {
        super(props);
        this.state = {tms: {}}
    }

    componentDidMount() {
        this.props.extension.manager.services.get().then(services => {
            this.setState({tms: services[this.props.type]});
        });
    }

    render() {
        let {tms} = this.state;
        tms = tms || {};
        return (
            <ul>
              {Object.entries(tms).map(([tm, data], key) => {
                  return (
                      <TMConfig
                         manager={this.props.extension.manager}
                         key={key}
                         tm={tm}
                         data={data}
                         />);
              })}
            </ul>);
    }
}
