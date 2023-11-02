import React, { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import {
  checkIn,
  complete,
  getAppointmentById,
} from "../../../service/AppointmentService";
import DetailsTable from "../../../shared/table/detailsTable/DetailsTable";
import { log } from "../../../log/Logger";
import GridRowAuto from "../../../shared/grid/GridRowAuto";
import VCentered from "../../../shared/grid/VCentered";
import VRight from "../../../shared/grid/VRight";
import { Button, Typography } from "@mui/material";
import {
  getActionsByAppointmentIdV2,
  getActionsByAppointmentId,
} from "../../../service/ActionService";
import Popup from "../../../shared/popup/Popup";
import ActionForm from "../form/ActionForm";
import ActionsTable from "../../action/table/ActionsTable";
//import { getAppointmentAmountDue } from "../../../service/tsx/AppointmentService";

const AppointmentDetails = (props) => {
  const [searchParams] = useSearchParams();
  const [appointment, setAppointment] = useState({});
  const [openActionFormPopup, setOpenActionFormPopup] = useState(false);
  const [isAppointmentLoaded, setIsAppointmentLoaded] = useState(false);
  const [refreshCounter, setRefreshCounter] = useState(0);
  const [actionsList, setActionsList] = useState([]);
  const [isActionsListLoaded, setIsActionsListLoaded] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const appointmentId = await searchParams.get("appointmentId");
      const appointment = await getAppointmentById(appointmentId);
      await setAppointment(appointment);
      const actions = await getActionsByAppointmentId(appointmentId);

      /*const appointmentAmountDue = await getAppointmentAmountDue(
        {
          appointmentId
        }
      );*/

      await setActionsList(actions);
      await setIsAppointmentLoaded(true);
      await setIsActionsListLoaded(true);
    };
    fetchData().catch(console.error);
  }, [refreshCounter]);

  async function handleAppointmentCheckedIn() {
    const appointmentId = await appointment.id;
    const updatedAppointment = await checkIn(appointmentId);
    await setRefreshCounter(refreshCounter + 1);
  }

  async function handleAppointmentCompleted() {
    const appointmentId = await appointment.id;
    const updatedAppointment = await complete(appointmentId);
    await setRefreshCounter(refreshCounter + 1);
  }

  async function handleAddAction() {
    await setOpenActionFormPopup(true);
  }

  const fields = {
    id: "Id",
    horseName: "Horse Name",
    userFirstAndLastName: "User",
    createdByUserFirstAndLastName: "Created By",
    appointmentStatus: "Status",
    createdAtTimestamp: "Created At",
  };

  return (
    <div className="AppointmentDetailsPage">
      <VCentered>
        <GridRowAuto
          xs={12}
          sm={12}
          md={8}
          lg={8}
          xl={8}
          marginTop={"16px"}
          marginBottom={"16px"}
        >
          <VRight border="0">
            {appointment.appointmentStatus === "Scheduled" && (
              <Button
                variant={"contained"}
                sx={{
                  marginRight: "10px",
                }}
                onClick={() => {
                  handleAppointmentCheckedIn();
                }}
              >
                Check In
              </Button>
            )}
            {appointment.appointmentStatus === "CheckedIn" && (
              <VRight border="0">
                <Button
                  variant={"contained"}
                  sx={{ marginRight: "10px" }}
                  onClick={() => {
                    handleAppointmentCompleted();
                  }}
                >
                  Complete
                </Button>
                <Button
                  variant={"contained"}
                  sx={{ marginRight: "10px" }}
                  onClick={() => {
                    handleAddAction();
                  }}
                >
                  Add Action
                </Button>
              </VRight>
            )}
            <Popup
              title="Add Action"
              openPopup={openActionFormPopup}
              setOpenPopup={setOpenActionFormPopup}
            >
              <ActionForm
                appointment={appointment}
                setOpenPopup={setOpenActionFormPopup}
                refreshCounter={refreshCounter}
                setRefreshCounter={setRefreshCounter}
              />
            </Popup>
          </VRight>
        </GridRowAuto>
      </VCentered>
      {isAppointmentLoaded && (
        <DetailsTable
          title={"Appointment Details"}
          data={appointment}
          fields={fields}
        ></DetailsTable>
      )}

      {isActionsListLoaded && (
        <VCentered marginTop="50px">
          <GridRowAuto>
            <Typography variant="h5" marginTop="40px" marginBottom="10px">
              Actions
            </Typography>
            <ActionsTable data={actionsList} isGlobalFilterEnabled={false} />
          </GridRowAuto>
        </VCentered>
      )}
    </div>
  );
};

export default AppointmentDetails;
