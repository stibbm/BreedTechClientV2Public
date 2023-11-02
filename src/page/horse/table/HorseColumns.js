
import format from "date-fns/format";
import ColumnFilter from '../../../shared/table/itemsTable/ColumnFilter';

export const COLUMNS = [
    {
        Header: 'Horse Name',
        accessor: 'horseName',
        Filter: ColumnFilter,
        disableFilters: true
    },
    {
        Header: 'Horse Reg #',
        accessor: 'registrationNumber',
        Filter: ColumnFilter,
        disableFilters: true,
    },
    {
        Header: 'Is Stallion',
        accessor: 'isStallion',
        Filter: ColumnFilter,
        disableFilters: true,
    },
    {
        Header: 'Dam',
        accessor: 'dam',
        Filter: ColumnFilter,
        disableFilters: true,
    },
    {
        Header: 'Sire',
        accessor: 'sire',
        Filter: ColumnFilter,
        disableFilters: true,
    },
    {
        Header: 'Dam Sire',
        accessor: 'damSire',
        Filter: ColumnFilter,
        disableFilters: true,
    },
    {
        Header: 'Owner Id',
        accessor: 'ownerUserId',
        Filter: ColumnFilter,
        disableFilters: true
    },
    {
        Header: 'Stall Id',
        accessor: 'stallId',
        Filter: ColumnFilter,
        disableFilters: true
    }
]

