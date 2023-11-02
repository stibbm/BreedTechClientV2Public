import React, { useState } from "react";
import { Grid, Button } from "@mui/material";
import FormInputContainer from "../FormInputContainer";
import UserDropdown from "../../../../shared/dropdown/UserDropdown";
import CheckedInHorseDropdown from "../../../../shared/dropdown/CheckedInHorseDropdown";
import StallDropdown from "../../../../shared/dropdown/StallDropdown";

// inputs required:
// horse
// destination stall
const MoveHorseForm = () => {
  const userInputLabel = "User";
  const horseInputLabel = "Horse";
  const stallInputLabel = "Stall";

  const [user, setUser] = useState();
  const [horse, setHorse] = useState();
  const [stall, setStall] = useState();
  /**
   * HorseDropdown (of those which have active appointments)
   * StallDropdown (of those which are not full)
   */

  const handleMoveHorse = async () => {
    console.log("handleMoveHorse");
    console.log(horse);
    console.log(user);
    console.log(stall);
    console.log("end");
  };

  return (
    <div className="MoveHorseForm">
      <Grid container spacing={0} columns={{ xs: 12, sm: 12, md: 12 }}>
        <FormInputContainer>
          <CheckedInHorseDropdown
            inputLabel={horseInputLabel}
            checkedInHorseChosen={horse}
            setCheckedInHorseChosen={setHorse}
          />
        </FormInputContainer>
        <FormInputContainer>
          <UserDropdown
            inputLabel={userInputLabel}
            userChosen={user}
            setUserChosen={setUser}
          />
        </FormInputContainer>
        <FormInputContainer>
          <StallDropdown
            inputLabel={stallInputLabel}
            stallChosen={stall}
            setStallChosen={setStall}
          />
        </FormInputContainer>
        <FormInputContainer>
          <Button
            variant="contained"
            sx={{ width: "100%" }}
            onClick={handleMoveHorse}
          >
            Move Horse
          </Button>
        </FormInputContainer>
      </Grid>
    </div>
  );
};
export default MoveHorseForm;
