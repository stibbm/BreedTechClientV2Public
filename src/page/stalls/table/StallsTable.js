import React from "react";
import { useNavigate } from "react-router";
import { createSearchParams } from "react-router-dom";
import ItemsTable from "../../../shared/table/itemsTable/ItemsTable";
import { COLUMNS } from "./StallColumns";

export const StallsTable = (props) => {
  const isGlobalFilterEnabled = props.isGlobalFilterEnabled || false;
  const navigate = useNavigate();
  const data = props.data;

  async function goToStallDetailsPage(row) {
    const stallId = await row.values.stallId;
    navigate({
      pathname: "/stallDetails",
      search: createSearchParams({
        stallId,
      }).toString(),
    });
  }

  return (
    <div className="StallsTable" style={{ width: "100%" }}>
      <ItemsTable
        columns={COLUMNS}
        data={data}
        goToItemDetailsPage={goToStallDetailsPage}
        isGlobalFilterEnabled={isGlobalFilterEnabled}
      />
    </div>
  );
};
export default StallsTable;
