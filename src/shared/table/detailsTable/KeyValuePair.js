import React from 'react';
import { Grid, Typography } from '@mui/material';
import VCentered from '../../grid/VCentered';
import VLeft from '../../grid/VLeft';

const KeyValuePair = (props) => {

  const labelBackgroundColor = '#3c44b126';
  const { label, value } = props;

  return (
    <>
      <Grid container direction="row" sx={{ width: '50%'}}>
        <VLeft backgroundColor={labelBackgroundColor} paddingTop={'16px'} paddingBottom={"0px"}>
          <Typography sx={{marginLeft: '16px'}}>
            <strong>
              {label}
            </strong>
          </Typography>
        </VLeft>
      </Grid>
      <Grid container direction="row" sx={{ width: '50%'}}>
        <VLeft paddingTop={"16px"}>
          <Typography sx={{
              marginLeft: '16px',
          }}>{value}</Typography>
        </VLeft>
      </Grid>
    </>
  )
}
export default KeyValuePair;
