import ColumnFilter from "../../../shared/table/itemsTable/ColumnFilter";

export const ACTION_TABLE_COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
    Filter: ColumnFilter,
  },
  {
    Header: "Description",
    accessor: "description",
    Filter: ColumnFilter,
  },
  {
    Header: "Amount",
    accessor: "amount",
    Filter: ColumnFilter,
  },
  {
    Header: "Customer",
    accessor: "customerFirstAndLastName",
    Filter: ColumnFilter,
  },
  {
    Header: "Time",
    accessor: "humanReadableTimestamp",
    Filter: ColumnFilter,
  },
  {
    Header: "Text Message",
    accessor: "smsMessage",
    Filter: ColumnFilter,
  },
  {
    Header: "Created By",
    accessor: "createdByUserFirstAndLastName",
    Filter: ColumnFilter,
  },
];
