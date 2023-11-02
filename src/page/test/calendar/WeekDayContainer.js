import React from "react";

import { Grid } from "@mui/material";

const WeekDayContainer = (props) => {
  const { height, width, ...other } = props;
  const size = 12 / 7;
  return (
    <Grid
      container
      display='flex'
      direction="column"
      xs={size}
      justifyContent="flex-start"
      alignItems="center"
      sx={{
        border: "1px solid red",
        height: height || "100px"
      }}
    >
      {props.children}
    </Grid>
  );
};
export default WeekDayContainer;
