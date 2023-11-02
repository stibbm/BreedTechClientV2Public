import React from "react";
import { Grid } from "@mui/material";

const GridRowAuto = (props) => {
  const { border, height, xs, sm, md, lg, xl, paddingTop, marginTop, ...other } = props;

  return (
    <Grid
      paddingTop={paddingTop || "0"}
      marginTop={marginTop || "0"}
      xs={xs || 12}
      sm={sm || 12}
      md={md || 10}
      lg={lg || 10}
      xl={xl || 10}
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      {...other}
      sx={{
        height: height || "auto",
        border: border || '0'
      }}
    >
      {props.children}
    </Grid>
  );
};
export default GridRowAuto;
