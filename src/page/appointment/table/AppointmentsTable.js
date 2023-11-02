import React from "react";
import ItemsTable from "../../../shared/table/itemsTable/ItemsTable";
import { COLUMNS } from "./AppointmentColumns";
import { useNavigate } from "react-router";
import { createSearchParams } from "react-router-dom";

const AppointmentsTable = (props) => {
  const data = props.data;
  const isGlobalFilterEnabled = props.isGlobalFilterEnabled;
  const navigate = useNavigate();

  async function goToAppointmentDetailsPage(row) {
    const appointmentId = await row.values.id;
    console.log(appointmentId);
    await navigate({
      pathname: "/appointmentDetails",
      search: createSearchParams({
        appointmentId,
      }).toString(),
    });
  }

  return (
    <div className="AppointmentsTable" style={{ width: "100%" }}>
      <ItemsTable
        columns={COLUMNS}
        data={data}
        goToItemDetailsPage={goToAppointmentDetailsPage}
        isGlobalFilterEnabled={isGlobalFilterEnabled}
      />
    </div>
  );
};
export default AppointmentsTable;
