import React, { useState } from "react";
import UserDropdown from "../../../shared/dropdown/UserDropdown";
import { Grid, Button } from "@mui/material";
import FormInputContainer from "./FormInputContainer";
import MInput from "../../../shared/grid/MInput";
import HorseTypeDropdown from "../../../shared/dropdown/HorseTypeDropdown";
import { createHorse } from "../../../service/HorseService";
import { useNavigate } from "react-router";
import { createSearchParams } from "react-router-dom";
import LoadSpinner from "../../../shared/spinload/LoadSpinner";

const HorseForm = ({ setOpenPopup, refreshCounter, setRefreshCounter }) => {
  const navigate = useNavigate();

  const userInputLabel = "User";

  const [horseName, setHorseName] = useState();
  const [registrationNumber, setRegistrationNumber] = useState();
  const [horseType, setHorseType] = useState("");
  const [user, setUser] = useState();

  const [isUserDropdownReady, setIsUserDropdownReady] = useState(false);

  const [isCreatingHorse, setIsCreatingHorse] = useState(false);

  async function handleHorseNameChange(event) {
    const horseName = await event.target.value;
    await setHorseName(horseName);
  }

  async function handleRegistrationNumberChange(event) {
    const registrationNumber = await event.target.value;
    await setRegistrationNumber(registrationNumber);
  }

  async function handleCreateHorse() {
    console.log("handleCreateHorse");
    console.log("user chosen: ");
    console.log(user);
    await setIsCreatingHorse(true);
    const horse = await createHorse(
      horseName,
      registrationNumber,
      horseType,
      user
    );
    console.log("horse");
    console.log(horse);
    await setIsCreatingHorse(false);
    await setOpenPopup(false);
    const newRefreshCounter = refreshCounter + 1;
    await setRefreshCounter(newRefreshCounter);
    await navigate({
      pathname: "/horseDetails",
      search: createSearchParams({
        registrationNumber: horse.registrationNumber,
      }).toString(),
    });
  }

  return (
    <div className="HorseForm">
      <LoadSpinner isLoading={isCreatingHorse}>
        <Grid
          container
          spacing={0}
          columns={{ xs: 12, sm: 12, md: 12 }}
          sx={{}}
        >
          <FormInputContainer marginTop="0px" marginBottom="20px">
            <MInput
              label="Horse Name"
              name="horseName"
              value={horseName}
              onChange={handleHorseNameChange}
            />
          </FormInputContainer>
          <FormInputContainer marginTop="0px" marginBottom="20px">
            <MInput
              label="Registration Number"
              name="registrationNumber"
              value={registrationNumber}
              onChange={handleRegistrationNumberChange}
            />
          </FormInputContainer>
          <FormInputContainer marginTop="0px" marginBottom="20px">
            <HorseTypeDropdown
              horseType={horseType}
              setHorseType={setHorseType}
            />
          </FormInputContainer>
          <FormInputContainer marginTop="0px" marginBottom="20px">
            <UserDropdown
              inputLabel={userInputLabel}
              userChosen={user}
              setUserChosen={setUser}
            />
          </FormInputContainer>
          <FormInputContainer marginTop="0px" marginBottom="20px">
            <Button
              variant="contained"
              sx={{ width: "100%" }}
              onClick={handleCreateHorse}
            >
              Create Horse
            </Button>
          </FormInputContainer>
        </Grid>
      </LoadSpinner>
    </div>
  );
};
export default HorseForm;
