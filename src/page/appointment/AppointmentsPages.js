import React, { useState, useEffect } from "react";
import GridRowAuto from "../../shared/grid/GridRowAuto";
import { Typography, Button, Checkbox, FormGroup, Radio, FormControlLabel } from "@mui/material";
import { convertTimestampToDateTime, getAppointmentsList } from "../../service/AppointmentService";
import VCentered from "../../shared/grid/VCentered";
import VRight from "../../shared/grid/VRight";
import AddIcon from "@mui/icons-material/Add";
import { ClipLoader } from "react-spinners";
import AppointmentsTable from "./table/AppointmentsTable";
import Popup from "../../shared/popup/Popup";
import AppointmentForm from "./form/AppointmentForm";
import VLeft from "../../shared/grid/VLeft";

const AppointmentsPage = (props) => {
  const [appointmentsList, setAppointmentsList] = useState([]);
  const [isAppointmentsListLoaded, setIsAppointmentsListLoaded] =
    useState(false);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [refreshCounter, setRefreshCounter] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const appointmentsList = await getAppointmentsList();
      console.log(appointmentsList);
      await setAppointmentsList(appointmentsList);

      await setIsAppointmentsListLoaded(true);
    };
    fetchData().catch(console.error);
  }, [refreshCounter, setRefreshCounter]);

  return (
    <div className="appointmentPage">
      <VCentered>
        <GridRowAuto>
          <Typography
            sx={{ marginTop: "30px", marginBottom: "30px" }}
            variant="h5"
          >
            Appointments
          </Typography>
        </GridRowAuto>
        <GridRowAuto>
          <FormControlLabel value="active" 
          control={<Radio />} label="Active"/>
          <FormControlLabel
            control={<Checkbox defaultChecked/>} label="Label">
          
          </FormControlLabel>
        </GridRowAuto>
        <GridRowAuto>
          <VLeft border="0" >
            <Button>

            </Button>
          </VLeft>
          <VRight border="0">
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              onClick={() => {
                setIsOpenPopup(true);
              }}
              sx={{
                margin: "0px",
              }}
            >
              Create Appointment
            </Button>
          </VRight>
        </GridRowAuto>
        <GridRowAuto style={{ marginTop: "30px" }}>
          {isAppointmentsListLoaded && (
            <AppointmentsTable
              data={appointmentsList}
              isGlobalFilterEnabled={true}
            />
          )}
          <ClipLoader
            loading={!isAppointmentsListLoaded}
            size={150}
            aria-label="Loading..."
          />
        </GridRowAuto>
        <Popup
          title="Create Appointment"
          openPopup={isOpenPopup}
          setOpenPopup={setIsOpenPopup}
        >
          <AppointmentForm
            setOpenPopup={setIsOpenPopup}
            refreshCounter={refreshCounter}
            setRefreshCounter={setRefreshCounter}
          />
        </Popup>
      </VCentered>
    </div>
  );
};
export default AppointmentsPage;
