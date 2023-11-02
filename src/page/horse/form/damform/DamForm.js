import { Button, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import FormInputContainer from "../FormInputContainer";
import HorseDropdown from "../../../../shared/dropdown/HorseDropdown";
import { updateHorseFamilyIdByRegNum } from "../../../../service/HorseService";

const DamForm = ({ currentHorse, setOpenPopup, refreshCounter, setRefreshCounter }) => {
  const damInputLabel = "Dam";
  const [horseChosen, setHorseChosen] = useState();

  async function handleSetDam() {
    console.log('handleSetDam');
    const horseRegistrationNumber = await horseChosen.registrationNumber;
    const currentHorseRegistrationNumber = await currentHorse.registrationNumber;
    const horse = await updateHorseFamilyIdByRegNum({
      horseRegistrationNumber: currentHorseRegistrationNumber,
      relationType: "Dam",
      relationHorseRegistrationNumber: horseRegistrationNumber
    })
    console.log("updated horse");
    console.log(horse);
    await setOpenPopup(false);
    const newRefreshCounter = refreshCounter + 1;
    await setRefreshCounter(newRefreshCounter);
  }

  return (
    <div className="DamForm">
      <Grid container spacing={0} columns={{ xs: 12, sm: 12, md: 12 }} sx={{}}>
        <FormInputContainer>
          <HorseDropdown
            inputLabel={damInputLabel}
            horseChosen={horseChosen}
            setHorseChosen={setHorseChosen}
          />
        </FormInputContainer>
        <FormInputContainer>
          <Button
            variant="contained"
            sx={{ width: "100%" }}
            onClick={handleSetDam}
          >
            Set Dam
          </Button>
        </FormInputContainer>
      </Grid>
    </div>
  );
};
export default DamForm;
