
const columns = [
    {columns: [
        {Header: "tableHeaderTerm",
         id: "term",
         accessor: t => t.term
        },
        {Header: "tableHeaderTranslation",
         id: "translation",
         accessor: t => t.translation
        },
        {Header: "tableHeaderDescription",
         id: "description",
         accessor: t => t.description
        },
    ]}]

export default columns
