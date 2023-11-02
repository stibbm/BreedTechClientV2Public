import React, { useState } from 'react';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from "@mui/x-date-pickers";

const DatePickerTest = (props) => {
  const [date, setDate] = useState();

  return (
    <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
                label="TestDatePicker"
                value={date}
                onChange={(value => setDate(value))}
            >
                
            </DateTimePicker>
        </LocalizationProvider>
    </div>
  )
}
export default DatePickerTest;