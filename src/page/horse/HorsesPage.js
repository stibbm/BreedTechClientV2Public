import React, { useState, useEffect } from "react";
import {
  getHorsesList,
  getHorsesWithActiveAppointments,
} from "../../service/HorseService";
import VCentered from "../../shared/grid/VCentered";
import HorsesTable from "./table/HorsesTable";
import GridRowAuto from "../../shared/grid/GridRowAuto";
import { Typography, Button } from "@mui/material";
import { ClipLoader } from "react-spinners";
import VRight from "../../shared/grid/VRight";
import AddIcon from "@mui/icons-material/Add";
import HorseForm from "./form/HorseForm";
import Popup from "../../shared/popup/Popup";
import VLeft from "../../shared/grid/VLeft";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import MoveHorseForm from "./form/movehorse/MoveHorseForm";

const HorsesPage = (props) => {
  const [checked, setChecked] = useState(true);

  const [horsesList, setHorsesList] = useState([]);
  const [horsesWithActiveAppointmentList, setHorsesWithActiveAppointmentList] =
    useState([]);
  const [
    isHorsesWithActiveAppointmentListReady,
    setIsHorsesWithActiveAppointmentListReady,
  ] = useState(false);
  const [isHorsesListLoaded, setIsHorsesListLoaded] = useState(false);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [refreshCounter, setRefreshCounter] = useState(0);

  const [openMoveHorsePopup, setOpenMoveHorsePopup] = useState(false);

  const { children } = props;

  const handleChange = (event) => {
    console.log("handleChange");
    console.log(event.target.value);
    setChecked(event.target.checked);
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log("horses page use effect");
      const horsesList = await getHorsesList();
      const horsesWithActiveAppointmentList =
        await getHorsesWithActiveAppointments();
      await setHorsesWithActiveAppointmentList(horsesWithActiveAppointmentList);
      console.log("horsesWithActiveAppointmentList");
      console.log(horsesWithActiveAppointmentList);
      await setHorsesList(horsesList);
      await setIsHorsesListLoaded(true);
    };
    fetchData().catch(console.error);
  }, [refreshCounter]);

  return (
    <div className="HorsesPage">
      <VCentered>
        <GridRowAuto>
          <Typography
            sx={{ marginTop: "30px", marginBottom: "30px" }}
            variant="h5"
          >
            Horses
          </Typography>
        </GridRowAuto>
        <GridRowAuto>
          <VLeft border="0">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
                label="Only Show Horses With Active Appointments"
              ></FormControlLabel>
            </FormGroup>
          </VLeft>
          <VRight border="0">
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => {
                setOpenMoveHorsePopup(true);
              }}
              sx={{
                marginRight: "15px",
              }}
            >
              Move Horse
            </Button>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => {
                setIsOpenPopup(true);
              }}
              sx={{
                marginRight: "0px",
              }}
            >
              Create Horse
            </Button>
          </VRight>
        </GridRowAuto>
        <GridRowAuto style={{ marginTop: "30px" }}>
          {isHorsesListLoaded && (
            <HorsesTable data={horsesList} isGlobalFilterEnabled={true} />
          )}
          <ClipLoader
            loading={!isHorsesListLoaded}
            size={150}
            aria-label="Loading..."
          />
        </GridRowAuto>
        <Popup
          title="Create Horse"
          openPopup={isOpenPopup}
          setOpenPopup={setIsOpenPopup}
        >
          <HorseForm
            setOpenPopup={setIsOpenPopup}
            refreshCounter={refreshCounter}
            setRefreshCounter={setRefreshCounter}
          />
        </Popup>
        <Popup
          title="Move Horse"
          openPopup={openMoveHorsePopup}
          setOpenPopup={setOpenMoveHorsePopup}
        >
          <MoveHorseForm
            setOpenMoveHorsePopup={setOpenMoveHorsePopup}
            refreshCounter={refreshCounter}
            setRefreshCounter={setRefreshCounter}
          />
        </Popup>
      </VCentered>
    </div>
  );
};
export default HorsesPage;
