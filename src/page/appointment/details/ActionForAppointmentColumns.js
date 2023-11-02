
import format from "date-fns/format";
import ColumnFilter from '../../../shared/table/itemsTable/ColumnFilter';

export const COLUMNS = [
    {
        Header: 'Id',
        accessor: 'id',
        Filter: ColumnFilter,
        disableFilters: true
    },
    {
        Header: 'Description',
        accessor: 'description',
        Filter: ColumnFilter,
        disableFilters: true,
    },
    {
        Header: 'Amount',
        accessor: 'amount',
        Filter: ColumnFilter,
        disableFilters: true,
    },
    {
        Header: 'Customer',
        accessor: 'customer',
        Filter: ColumnFilter,
        disableFilters: true,
    },
    {
        Header: 'Time',
        accessor: 'time',
        Filter: ColumnFilter,
        disableFilters: true,
    },
    {
        Header: 'Text Message',
        accessor: 'smsMessage',
        Filter: ColumnFilter,
        disableFilters: true,
    },
    {
        Header: 'CreatedBy',
        accessor: 'createdBy',
        Filter: ColumnFilter,
        disableFilters: true
    },
]

