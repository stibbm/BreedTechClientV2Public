import React from 'react';
import { Grid } from "@mui/material";

const GridRowDefault = (props) => {
  const {width, marginTop, ...other} = props;
  return (
    <Grid
      container
      {...other}
      sx={{
        border: '1px solid red',
        width: width || '100%'
      }}
    >
      {props.children}
    </Grid>
  )
}
export default GridRowDefault;