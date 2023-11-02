import { Grid } from '@mui/material';
import React from 'react';
const VRight = (props) => {
  return (
    <>
      <Grid
        container
        width="100%"
        direction="row"
        justifyContent="end"
        marginTop={props.marginTop || '0px'}
        paddingTop={props.paddingTop || '0px'}
        paddingBottom={props.paddingBottom || '0px'}
        sx={{
          backgroundColor: props.backgroundColor || 'inherit',
          border: '0px'
        }}
      >
        {props.children}
      </Grid>
    </>
  )
}
export default VRight;