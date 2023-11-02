import React from "react";
import { Grid } from "@mui/material";

const GridCol = (props) => {
  const { height, width, ...other } = props;

  return (
    <Grid
      container
      spacing={0}
      direction="row"
      xs={12}
      sm={12}
      md={12}
      lg={12}
      xl={12}
      {...other}
      sx={{
        height: height || "auto",
        border: "1px solid black",
      }}
    >
      {props.children}
    </Grid>
  );
};
export default GridCol;
