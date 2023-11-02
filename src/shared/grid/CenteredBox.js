import React from 'react';
import { Box } from '@mui/material';

const CenteredBox = props => {
  const {marginTop, display, justifyContent, alignItems, width, children, ...other} = props;

  return (
    <Box
      marginTop={marginTop || '0'}
      display={display || "flex"}
      justifyContent={justifyContent || "center"}
      alignItems={alignItems || "center"}
      width={width || "100%"}
      {...other}
    >
      {children}
    </Box>
  )
}
export default CenteredBox;