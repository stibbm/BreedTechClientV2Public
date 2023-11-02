import React, { useState } from "react";
import { useNavigate } from "react-router";
import UserDropdown from "../../../shared/dropdown/UserDropdown";
import FormInputContainer from "../../horse/form/FormInputContainer";
import HorseDropdown from "../../../shared/dropdown/HorseDropdown";
import MInput from "../../../shared/grid/MInput";
import LoadSpinner from "../../../shared/spinload/LoadSpinner";
import { createAppointment } from "../../../service/AppointmentService";
import { Button, Grid, Typography } from "@mui/material";
import { createSearchParams } from "react-router-dom";

const AppointmentForm = ({
  setOpenPopup,
  refreshCounter,
  setRefreshCounter
}) => {
  const userInputLabel = "User";
  const horseInputLabel = "Horse";

  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [horse, setHorse] = useState();
  const [reason, setReason] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isCreatingAppointment, setIsCreatingAppointment] = useState(false);

  async function handleCreateAppointment() {
    await setIsCreatingAppointment(true);
    var appointment;
    try {
      console.log("handleCreateAppointment");
      console.log("Horse");
      console.log(horse);
      // any restrictions on which horeses can be chosen?
      appointment = await createAppointment({
        user: user,
        horse: horse,
        reason: reason,
        phoneNumber: phoneNumber,
      });
      console.log("createdAppointment:");
      console.log(appointment);
      await setIsCreatingAppointment(false);
      await setOpenPopup(false);
      const newRefreshCounter = refreshCounter + 1;
      await setRefreshCounter(newRefreshCounter);
      await navigate({
        pathname: "/appointmentDetails",
        search: createSearchParams({
          appointmentId: appointment.id,
        }).toString(),
      });
    }
    catch (err) {
      await setErrorMessage(err.message);
      await setIsError(true);
      await setIsCreatingAppointment(false);
    }
  }

  async function handleReasonChange(event) {
    const reason = await event.target.value;
    await setReason(reason);
  }

  async function handlePhoneNumberChange(event) {
    const phoneNumber = await event.target.value;
    await setPhoneNumber(phoneNumber);
  }

  return (
    <div className="AppointmentForm">
      <LoadSpinner isLoading={isCreatingAppointment}>
        <Grid
          container
          spacing={0}
          columns={{ xs: 12, sm: 12, md: 12 }}
          sx={{}}
        >
          {isError &&
            <Typography variant="h6">{errorMessage}</Typography>
          }
          <FormInputContainer>
            <UserDropdown
              inputLabel={userInputLabel}
              userChosen={user}
              setUserChosen={setUser}
            />
          </FormInputContainer>
          <FormInputContainer>
            <HorseDropdown
              inputLabel={horseInputLabel}
              horseChosen={horse}
              setHorseChosen={setHorse}
            />
          </FormInputContainer>
          <FormInputContainer>
            <MInput
              label="Reason"
              name="reason"
              value={reason}
              onChange={handleReasonChange}
            />
          </FormInputContainer>
          <FormInputContainer>
            <MInput
              label="Phone Number"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </FormInputContainer>
          <FormInputContainer>
            <Button
              variant="contained"
              sx={{ width: "100%" }}
              onClick={handleCreateAppointment}
            >
              Create Appointment
            </Button>
          </FormInputContainer>
        </Grid>
      </LoadSpinner>
    </div>
  );
};
export default AppointmentForm;
