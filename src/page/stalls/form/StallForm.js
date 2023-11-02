import React, { useState } from 'react';
import FormInputContainer from '../../horse/form/FormInputContainer';
import MInput from '../../../shared/grid/MInput';
import { Button, Grid } from '@mui/material';
import { createStall } from '../../../service/StallService';

const initialValues = {
  stallName: "",
  description: "",
  capacity: "",
  smsContent: ""
}
const StallForm = () => {
  const [stallName, setStallName] = useState('');
  const [description, setDescription] = useState('');
  const [capacity, setCapacity] = useState();
  const [notes, setNotes] = useState('');

  async function handleStallNameChange(event) {
    const value = await event.target.value;
    await setStallName(value);
  }

  async function handleDescriptionChange(event) {
    const description = await event.target.value;
    await setDescription(description);
  }

  async function handleCapacityChange(event) {
    const capacity = await event.target.value;
    await setCapacity(capacity);
  }

  async function handleNotesChange(event) {
    const notes = await event.target.value;
    await setNotes(notes);
  }

  async function handleCreateStall() {
    const stall = await createStall(
      {
        stallName,
        description,
        capacity,
        notes
      }
    );
    console.log('stall');
    console.log(stall);
  }

  return (
    <div className="StallForm">
      <Grid container spacing={0}
        columns={{ xs: 12, sm: 12, md: 12 }}
        sx={{}}
      >
        <FormInputContainer marginTop='0px' marginBottom='20px'>
          <MInput
            label="Stall Name"
            name="stallName"
            value={stallName}
            onChange={handleStallNameChange}
          />
        </FormInputContainer>
        <FormInputContainer marginTop='0px' marginBottom='20px'>
          <MInput
            label="Description"
            name="description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </FormInputContainer>
        <FormInputContainer marginTop='0px' marginBottom='20px'>
          <MInput
            label="Capacity"
            type="number"
            name="capacity"
            value={capacity}
            onChange={handleCapacityChange}
          />
        </FormInputContainer>
        <FormInputContainer marginTop='0px' marginBottom='20px'>
          <MInput
            label="Notes"
            name="notes"
            value={notes}
            onChange={handleNotesChange}
          />
        </FormInputContainer>
        <FormInputContainer marginTop='0px' marginBottom='20px'>
          <Button
            variant="contained"
            sx={{ width: '100%' }}
            onClick={handleCreateStall}
          >
            Create Stall
          </Button>
        </FormInputContainer>
      </Grid>
    </div>
  )
}
export default StallForm;