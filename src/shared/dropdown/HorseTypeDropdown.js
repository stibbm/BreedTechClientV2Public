import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const HorseTypeDropdown = ({
  horseType,
  setHorseType
}) => {

  async function handleHorseTypeChange(event) {
    const type = event.target.value;
    await setHorseType(type);
  }

  return (
    <div className="HorseTypeDropdown" style={{ width: '100%' }}>
      <FormControl fullWidth>
        <InputLabel id="HorseType__InputLabel">Type</InputLabel>
        <Select
          variant="outlined"
          defaultValue="Stallion"
          labelId="HorseType__InputLabel"
          id="HorseType__Dropdown"
          value={horseType}
          onChange={handleHorseTypeChange}
          sx={{
            width: '100%'
          }}
        >
          <MenuItem value="Stallion">Stallion</MenuItem>
          <MenuItem value="Mare">Mare</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
export default HorseTypeDropdown;