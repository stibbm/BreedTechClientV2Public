import React from "react";
import VCentered from "../../../shared/grid/VCentered";
import GridRowAuto from "../../../shared/grid/GridRowAuto";
import GridCol from "../../../shared/grid/GridCol";
import GridColSplit from "../../../shared/grid/GridColSplit";
import { Grid, Typography } from "@mui/material";
import WeekDayContainer from "./WeekDayContainer";
import EventComponent from "./EventComponent";
import DatePickerTest from "./DatePickerTest";

const size = 12 / 7;

const Calendar = ({ }) => {
  return (
    <Grid
      container
      spacing={0}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <WeekDayContainer>
        <EventComponent

        ></EventComponent>
        <Typography sx={{
          border: '1px solid blue',
        }} variant="h6">1</Typography>
      </WeekDayContainer>
      <WeekDayContainer>
        <h1>2</h1>
      </WeekDayContainer>
      <WeekDayContainer>
        <h1>3</h1>
      </WeekDayContainer>
      <WeekDayContainer>
        <h1>4</h1>
      </WeekDayContainer>
      <WeekDayContainer>
        <h1>5</h1>
      </WeekDayContainer>
      <WeekDayContainer>
        <h1>6</h1>
      </WeekDayContainer>
      <WeekDayContainer>
        <h1>7</h1>
      </WeekDayContainer>
      <WeekDayContainer>
        <h1>8</h1>
      </WeekDayContainer>
      <WeekDayContainer>
        <h1>9</h1>
      </WeekDayContainer>
      <WeekDayContainer>
        <h1>10</h1>
      </WeekDayContainer>
      <WeekDayContainer>
        <DatePickerTest />
      </WeekDayContainer>
    </Grid>
  );
};
export default Calendar;
