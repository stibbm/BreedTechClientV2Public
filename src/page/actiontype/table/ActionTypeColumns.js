import ColumnFilter from "../../../shared/table/itemsTable/ColumnFilter";
// this is columns for appointment table
export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
    Filter: ColumnFilter,
  },
  {
    Header: "Name",
    accessor: "name",
    filter: ColumnFilter,
  },
  {
    Header: "Description",
    accessor: "description",
    filter: ColumnFilter,
  },
  {
    Header: "Amount",
    accessor: "amount",
    filter: ColumnFilter,
  },
  {
    Header: "SMS Message",
    accessor: "smsMessage",
    filter: ColumnFilter,
  }
];
