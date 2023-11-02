import ColumnFilter from "../../../shared/table/itemsTable/ColumnFilter";

export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "Email",
    accessor: "emailAddress",
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "First Name",
    accessor: "firstName",
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "lastName",
    accessor: "lastName",
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "Creation Timestamp",
    accessor: "creationTimestamp",
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "Company Id",
    accessor: "companyId",
    Filter: ColumnFilter,
    disableFilters: true,
  },
];
