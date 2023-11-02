import React from "react";
import ItemsTable from "../../../shared/table/itemsTable/ItemsTable";
import { useNavigate } from "react-router";
import { ACTION_TABLE_COLUMNS } from "./ActionTableColumns";

const ActionsTable = (props) => {
  const navigate = useNavigate();
  const data = props.data;
  const isGlobalFilterEnabled = props.isGlobalFilterEnabled;

  console.log("data: ");
  console.log(data);
  console.log("endData");
  for (var i = 0; i < data.length; i++) {
    const action = data[i];
    console.log("i = " + i);
    console.log(action);
  }
  //const action = data[0];

  async function goToActionDetailsPage() {
    console.log("goToActionDetailsPage");
  }

  return (
    <div className="ActionsTable" style={{ width: "100%" }}>
      <ItemsTable
        columns={ACTION_TABLE_COLUMNS}
        data={data}
        goToItemDetailsPage={goToActionDetailsPage}
        isGlobalFilterEnabled={isGlobalFilterEnabled}
      />
    </div>
  );
};
export default ActionsTable;
