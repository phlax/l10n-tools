
import React from 'react';

import Table from 'web-ext-plugins/widgets/table';


export default class TerminologyImportTable extends React.Component {

    render() {
        const columns = [
            {columns: [
                {Header: "tableHeaderTerm",
                 id: "term",
                 accessor: t => t.term
                },
                {
                    Header: "tableHeaderTranslation",
                    id: "translation",
                    accessor: t => t.translation
                },
                {
                    Header: "tableHeaderDescription",
                    id: "description",
                    accessor: t => t.description
                },
            ]}];
        return (
            <div>
              <Table
                 defaultPageSize={5}
                 className="-striped -highlight"
                 columns={columns}
                 data={this.props.data} />
            </div>);
    }
}
