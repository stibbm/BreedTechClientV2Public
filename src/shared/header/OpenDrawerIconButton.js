import { IconButton } from '@mui/material';
import React from 'react';

const OpenDrawerIconButton = (props) => {

  const { children, handleOpenDrawer } = props;

  return (
    <div className="OpenDrawerIconButton">
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={handleOpenDrawer}
        sx={{ mr: 2 }}
      >
        {children}
      </IconButton>
    </div>
  )
}
export default OpenDrawerIconButton;