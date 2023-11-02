import { Button, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import FormInputContainer from "../FormInputContainer";
import HorseDropdown from "../../../../shared/dropdown/HorseDropdown";
import { updateHorseFamilyIdByRegNum } from "../../../../service/HorseService";

const DamSireForm = ({ currentHorse, setOpenPopup, refreshCounter, setRefreshCounter }) => {
  const damSireInputLabel = "DamSire";
  const [horseChosen, setHorseChosen] = useState();

  async function handleSetDamSire() {
    const horseRegistrationNumber = await horseChosen.registrationNumber;
    const currentHorseRegistrationNumber = await currentHorse.registrationNumber;
    const horse = await updateHorseFamilyIdByRegNum({
      horseRegistrationNumber: currentHorseRegistrationNumber,
      relationType: "DamSire",
      relationHorseRegistrationNumber: horseRegistrationNumber
    });
    console.log("updated horse");
    console.log(horse);
    await setOpenPopup(false);
    const newRefreshCounter = refreshCounter + 1;
    await setRefreshCounter(newRefreshCounter);
  }

  return (
    <div className="DamSireForm">
      <Grid container spacing={0} columns={{ xs: 12, sm: 12, md: 12 }} sx={{}}>
        <FormInputContainer>
          <HorseDropdown
            inputLabel={damSireInputLabel}
            horseChosen={horseChosen}
            setHorseChosen={setHorseChosen}
          />
        </FormInputContainer>
        <FormInputContainer>
          <Button
            variant="contained"
            sx={{ width: "100%" }}
            onClick={handleSetDamSire}
          >
            Set DamSire
          </Button>
        </FormInputContainer>
      </Grid>
    </div>
  );
};
export default DamSireForm;
