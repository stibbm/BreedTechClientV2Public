import React from "react";
import { Grid } from "@mui/material";

const GridColSplit = (props) => {
  const { width, ...other } = props;

  return (
    <Grid
      container
      spacing={0}
      direction="row"
      sx={{
        width: width || "100%",
        border: "1px solid black",
      }}
    >
      {props.children}
    </Grid>
  );
};
export default GridColSplit;
