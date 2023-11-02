import React, { useState } from "react";
import FormInputContainer from "../../horse/form/FormInputContainer";
import MInput from "../../../shared/grid/MInput";
import { Button, Grid } from "@mui/material";
import { useForm } from "../../../shared/grid/UseForm";
import { createActionType } from "../../../service/ActionTypeService";
import { useNavigate } from "react-router";
import { createSearchParams } from "react-router-dom";
import LoadSpinner from "../../../shared/spinload/LoadSpinner";

const initialValues = {
  name: "",
  description: "",
  amount: "",
  smsContent: "",
};
const ActionTypeForm = ({
  setOpenPopup,
  refreshCounter,
  setRefreshCounter,
}) => {
  const navigate = useNavigate();
  const [isCreatingActionType, setIsCreatingActionType] = useState(false);

  async function handleCreateActionType() {
    await setIsCreatingActionType(true);
    console.log("handleCreateActionType");
    const actionType = await createActionType({
      name: values.name,
      description: values.description,
      amountString: values.amount,
      smsMessage: values.smsContent,
    });
    console.log(actionType);
    await setOpenPopup(false);
    await setIsCreatingActionType(false);
    const newRefreshCounter = refreshCounter + 1;
    await setRefreshCounter(newRefreshCounter);
    await navigate({
      pathname: "/actionTypeDetails",
      search: createSearchParams({
        actionTypeId: actionType.id,
      }).toString(),
    });
  }
  const validate = (fieldValues = values) => {
    return true;
  };
  const {
    values,
    setValues,
    errors = {},
    setErrors,
    handleInputChange,
    resetForm,
  } = useForm(initialValues, true, validate);
  return (
    <div className="ActionTypeForm">
      <LoadSpinner isLoading={isCreatingActionType}>
        <Grid
          container
          spacing={0}
          columns={{ xs: 12, sm: 12, md: 12 }}
          sx={{}}
        >
          <FormInputContainer>
            <MInput
              label="Name"
              name="name"
              value={values.name}
              onChange={handleInputChange}
              error={errors.name}
              width="100%"
            ></MInput>
          </FormInputContainer>
          <FormInputContainer>
            <MInput
              label="Description"
              name="description"
              value={values.description}
              onChange={handleInputChange}
              error={errors.description}
              width="100%"
            />
          </FormInputContainer>
          <FormInputContainer>
            <MInput
              label="Amount"
              type="number"
              name="amount"
              value={values.amount}
              onChange={handleInputChange}
              error={errors.amount}
              width="100%"
            />
          </FormInputContainer>
          <FormInputContainer>
            <MInput
              label="Sms Content"
              name="smsContent"
              value={values.smsContent}
              onChange={handleInputChange}
              error={errors.smsContent}
              width="100%"
            />
          </FormInputContainer>
          <FormInputContainer>
            <Button
              variant="contained"
              sx={{ width: "100%" }}
              onClick={handleCreateActionType}
            >
              Create Action Type
            </Button>
          </FormInputContainer>
        </Grid>
      </LoadSpinner>
    </div>
  );
};
export default ActionTypeForm;
