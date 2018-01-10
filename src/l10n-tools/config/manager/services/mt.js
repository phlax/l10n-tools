
import React from 'react';

import MTConfig from './mt-config';


export default class MTServicesConfig extends React.Component {

    constructor(props) {
        super(props);
        this.state = {mts: {}}
    }

    componentDidMount() {
        this.props.extension.manager.services.get().then(services => {
            this.setState({mts: services[this.props.type]});
        });
    }

    render() {
        const {mts} = this.state;
        return (
            <ul>
              {Object.entries(mts).map(([mt, data], key) => {
                  return (
                      <MTConfig
                         manager={this.props.extension.manager}
                         key={key}
                         mt={mt}
                         data={data}
                         />);
              })}
            </ul>);
    }
}
