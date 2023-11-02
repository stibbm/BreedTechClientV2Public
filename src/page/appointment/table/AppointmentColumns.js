import ColumnFilter from "../../../shared/table/itemsTable/ColumnFilter";

// this is columns for appointment table
export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
    Filter: ColumnFilter,
  },
  {
    Header: "Horse Name",
    accessor: "horseName",
    filter: ColumnFilter,
  },
  {
    Header: "User",
    accessor: "userFirstAndLastName",
    filter: ColumnFilter,
  },
  {
    Header: "Created By",
    accessor: "createdByUserFirstAndLastName",
    filter: ColumnFilter,
  },
  {
    Header: "Appointment Status",
    accessor: "appointmentStatus",
    filter: ColumnFilter,
  },
  {
    Header: "Created At",
    accessor: "createdAtTimestamp",
    filter: ColumnFilter,
  },
];
