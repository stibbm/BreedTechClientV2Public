import React from "react";
import { Grid } from "@mui/material";

const VCentered = (props) => {
  const { height, border, marginTop, marginBottom, backgroundColor, ...other } =
    props;

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      marginTop={marginTop || 0}
      marginBottom={marginBottom || 0}
      {...other}
      sx={{
        backgroundColor: backgroundColor || "inherit",
        border: border || 0,
        height: height || "auto",
      }}
    >
      {props.children}
    </Grid>
  );
};
export default VCentered;
