import { Button, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import FormInputContainer from "../FormInputContainer";
import HorseDropdown from "../../../../shared/dropdown/HorseDropdown";
import { updateHorseFamilyIdByRegNum, updateHorseFamily } from "../../../../service/HorseService";

const SireForm = ({ currentHorse, setOpenPopup, refreshCounter, setRefreshCounter }) => {
  const sireInputLabel = "Sire";
  const [horseChosen, setHorseChosen] = useState();

  async function handleSetSire() {
    const horseRegistrationNumber = await horseChosen.registrationNumber;
    const currentHorseRegistrationNumber = await currentHorse.registrationNumber;
    const horse = await updateHorseFamilyIdByRegNum({
      horseRegistrationNumber: currentHorseRegistrationNumber,
      relationType: "Sire",
      relationHorseRegistrationNumber: horseRegistrationNumber,
    });
    console.log("updated horse");
    console.log(horse);
    await setOpenPopup(false);
    const newRefreshCounter = refreshCounter + 1;
    await setRefreshCounter(newRefreshCounter);
  }

  return (
    <div className="SireForm">
      <Grid container spacing={0} columns={{ xs: 12, sm: 12, md: 12 }} sx={{}}>
        <FormInputContainer>
          <HorseDropdown
            inputLabel={sireInputLabel}
            horseChosen={horseChosen}
            setHorseChosen={setHorseChosen}
          />
        </FormInputContainer>
        <FormInputContainer>
          <Button
            variant="contained"
            sx={{ width: "100%" }}
            onClick={handleSetSire}
          >
            Set Sire
          </Button>
        </FormInputContainer>
      </Grid>
    </div>
  );
};
export default SireForm;
