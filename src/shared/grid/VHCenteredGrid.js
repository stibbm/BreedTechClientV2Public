import React from 'react';
import { Grid } from '@mui/material';

const VHCenteredGrid = (props) => {

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
      }}
    >
      <Grid item xs={3} sx={{}}>
        {props.children}
      </Grid>
    </Grid>
  );
};
export default VHCenteredGrid;
