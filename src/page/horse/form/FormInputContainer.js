import React from "react";
import { Grid } from "@mui/material";
import VCentered from "../../../shared/grid/VCentered";

const FormInputContainer = (props) => {
  const marginTop = props.marginTop;
  const marginBottom = props.marginBottom;

  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
      align="flex"
      alignItems="end"
      marginTop={marginTop || "0px"}
      marginBottom={marginBottom || "20px"}
    >
      <VCentered style={{ width: "100%" }}>{props.children}</VCentered>
    </Grid>
  );
};
export default FormInputContainer;
