import React, {useState} from "react";
import VCentered from "../../../shared/grid/VCentered";
import GridRowAuto from "../../../shared/grid/GridRowAuto";
import GridCol from "../../../shared/grid/GridCol";
import GridColSplit from "../../../shared/grid/GridColSplit";
import { Grid, Typography } from "@mui/material";
import WeekDayContainer from "./WeekDayContainer";
import Calendar from './Calendar';
import EventComponent from './EventComponent';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const size = 12 / 7;



const TestCalendar = ({ }) => {

  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    console.log('handleChange');
    console.log('checked: ');
    console.log(event.target.checked);
    // this value is either true or false for if
    // checked or not checked
    setChecked(event.target.checked);
  }

  return (
    <div className="TestCalendar">
      <VCentered>
        <h1>Test</h1>
        <FormGroup>
          <FormControlLabel control=
          {
            <Checkbox defaultChecked
              checked={checked}
              onChange={handleChange}
              inputProps={{'aria-label': 'controlled'}}
            />
          } label="Label"/>
        </FormGroup>


        <GridRowAuto border="1px solid black">
          <Calendar>
            <EventComponent></EventComponent>
          </Calendar>
        </GridRowAuto>
      </VCentered>
    </div >
  )
};
export default TestCalendar;
