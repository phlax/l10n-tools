
import React from 'react';

import Table from 'web-ext-plugins/widgets/table';

import columns from './columns';


export default class TMImportTable extends React.Component {

    get columns () {
        return columns
    }

    render() {
        return (
            <div>
              <Table
                 defaultPageSize={5}
                 className="-striped -highlight"
                 columns={this.columns}
                 data={this.props.data} />
            </div>);
    }
}
