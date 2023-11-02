import ColumnFilter from "../../shared/table/itemsTable/ColumnFilter";

export const COST_SUMMARY_COLUMNS = [
  {
    Header: "Remaining Amount Due",
    accessor: "remainingAmountDue",
    Filter: ColumnFilter,
  },
  {
    Header: "Amount Paid",
    accessor: "amountPaid",
    Filter: ColumnFilter,
  },
  {
    Header: "Total Cost",
    accessor: "totalCost",
    Filter: ColumnFilter,
  }
]
