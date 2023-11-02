import React from "react";
import {
  useFilters,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
  useRowSelect,
} from "react-table";
import GlobalFilter from "./GlobalFilter";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  table: {
    width: "100%",
    minWidth: "700px",
    padding: 0,
    margin: 0,
    borderCollapse: "collapse",
    "& thead th": {
      fontWeight: "600",
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.light,
    },
    "& tbody td": {
      fontWeight: "300",
    },
    "& tbody tr:hover": {
      backgroundColor: "#fffbf2",
      cursor: "pointer",
    },
  },
  table_td_table_th: {
    textAlign: "center",
    border: "1px solid blue",
    paddingTop: "12px",
    paddingBottom: "12px",
  },
  tr: {},
}));

const ItemsTable = (props) => {
  const { columns, data, goToItemDetailsPage, isGlobalFilterEnabled } = props;
  const classes = useStyles();
  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: 0,
        pageSize: 10,
      },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance;

  const { pageIndex, pageSize, globalFilter } = state;

  async function goToDetailsPage(row) {
    await goToItemDetailsPage(row);
  }

  return (
    <div
      className="itemsTable"
      style={{ width: "100%", margin: "0", padding: "0", overflowX: "scroll", overflowY: 'hidden' }}
    >
      {isGlobalFilterEnabled && (
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      )}
      <table
        className={classes.table}
        {...getTableProps}
        style={{ width: "100%" }}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr className={classes.tr} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  className={classes.table_td_table_th}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr
                className={classes.tr}
                onClick={() => goToDetailsPage(row)}
                {...row.getRowProps()}
              >
                {row.cells.map((cell) => {
                  return (
                    <td
                      className={classes.table_td_table_th}
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <span>| Go to page: </span>
        <span>
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
            style={{ width: "50px" }}
          />
        </span>
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[5, 10, 25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>
      </div>
    </div>
  );
};
export default ItemsTable;
