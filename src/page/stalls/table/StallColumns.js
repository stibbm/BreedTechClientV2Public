import ColumnFilter from "../../../shared/table/itemsTable/ColumnFilter";

export const COLUMNS = [
    {
        Header: 'Stall Id',
        accessor: 'stallId',
        Filter: ColumnFilter,
        disableFilters: true
    },
    {
        Header: 'Name',
        accessor: 'name',
        Filter: ColumnFilter,
        disableFilters: true,
    },
    {
        Header: 'Capacity',
        accessor: 'capacity',
        Filter: ColumnFilter,
        disableFilters: true,
    },
    {
        Header: 'Description',
        accessor: 'description',
        Filter: ColumnFilter,
        disableFilters: true,
    },
    {
        Header: 'Notes',
        accessor: 'notes',
        Filter: ColumnFilter,
        disableFilters: true
    },
    {
        Header: 'Company Id',
        accessor: 'companyId',
        Filter: ColumnFilter,
        disableFilters: true
    }
]

