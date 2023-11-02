import React, { useState } from "react";
import { useNavigate } from "react-router";
import FormInputContainer from "../../horse/form/FormInputContainer";
import { Grid, Button } from "@mui/material";
import ActionDropdown from "../../../shared/dropdown/ActionDropdown";
import { createActionByAppointmentIdAndActionTypeId } from "../../../service/ActionService";

const ActionForm = ({
  appointment,
  setOpenPopup,
  refreshCounter,
  setRefreshCounter,
}) => {
  const navigate = useNavigate();
  const actionTypeInputLabel = "Action";

  const [actionType, setActionType] = useState();

  async function handleAddAction() {
    const appointmentId = await appointment["id"];
    const actionTypeId = await actionType["id"];
    const actionTypeIdNumber = Number(actionTypeId);
    const appointmentIdString = appointmentId.toString();
    const responseActionType = await createActionByAppointmentIdAndActionTypeId(
      appointmentIdString,
      actionTypeIdNumber
    );
    await setRefreshCounter(refreshCounter + 1);
    setOpenPopup(false);
  }

  return (
    <div className="ActionForm">
      <Grid container spacing={0} columns={{ xs: 12, sm: 12, md: 12 }}>
        <FormInputContainer>
          <ActionDropdown
            inputLabel={actionTypeInputLabel}
            actionTypeChosen={actionType}
            setActionTypeChosen={setActionType}
          />
        </FormInputContainer>
        <FormInputContainer>
          <Button
            variant="contained"
            sx={{ width: "100%" }}
            onClick={handleAddAction}
          >
            Add Action
          </Button>
        </FormInputContainer>
      </Grid>
    </div>
  );
};
export default ActionForm;
