import { Grid } from '@mui/material';
import React from 'react';
const VLeft = (props) => {
  return (
    <>
      <Grid
        container
        width="100%"
        direction="row"
        justifyContent="start"
        marginTop={props.marginTop || '0px'}
        paddingTop={props.paddingTop || '0px'}
        paddingBottom={props.paddingBottom || '0px'}
        sx={{
            backgroundColor: props.backgroundColor || 'inherit',
            border: props.border || '1px solid black'
        }}
      >
          {props.children}
      </Grid>
    </>
  )
}
export default VLeft;
