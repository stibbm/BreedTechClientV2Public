import React from 'react';
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const ItemDropdown = ({
  inputLabel,
  itemsList,
  itemChosen,
  setItemChosen,
  initialValue
}) => {

  const handleChange = async (event) => {
    const item = event.target.value;
    await setItemChosen(item);
  }

  return (
    <div className="ItemDropdown" style={{ width: '100%' }}>
      <FormControl fullWidth variant="outlined">
        <InputLabel id="ItemDropdown__InputLabel" sx={{ width: '100%' }}>{inputLabel}</InputLabel>
        <Select
          labelId="ItemDropdown__InputLabel"
          placeholder="Select"
          label={inputLabel}
          sx={{ width: '100%' }}
          id="ItemDropdown__Select"
          value={itemChosen}
          defaultValue={initialValue}
          onChange={handleChange}
        >
          {itemsList.map((item, index) => (
            <MenuItem value={item}>{item['toStringCustom']}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}
export default ItemDropdown;