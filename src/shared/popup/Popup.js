import React from 'react';
import { Dialog, DialogContent, DialogTitle, Button, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function Popup({
  title,
  children,
  openPopup,
  setOpenPopup
}) {
  return (
    <Dialog open={openPopup} maxWidth="md">
      <DialogTitle>
        <div style={{ display: 'flex' }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Button
            onClick={() => setOpenPopup(false)}
          >
            <CloseIcon />
          </Button>
        </div>
      </DialogTitle>
      <DialogContent dividers>
        {children}
      </DialogContent>
    </Dialog>
  )
}