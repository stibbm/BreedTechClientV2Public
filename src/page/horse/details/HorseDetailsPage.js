import React, { useState, useEffect } from "react";
import DetailsTable from "../../../shared/table/detailsTable/DetailsTable";
import { useSearchParams } from "react-router-dom";
import {
  getHorseByRegistrationNumber,
  getHorseByRegistrationNumberWithLocation,
} from "../../../service/HorseService";
import { appendTypeToHorse } from "./AppendTypeToHorse";
import VCentered from "../../../shared/grid/VCentered";
import GridRowAuto from "../../../shared/grid/GridRowAuto";
import VRight from "../../../shared/grid/VRight";
import { Button } from "@mui/material";
import Popup from "../../../shared/popup/Popup";
import SireForm from "../form/sireform/SireForm";
import DamForm from "../form/damform/DamForm";
import DamSireForm from "../form/damsireform/DamSireForm";
import LoadSpinner from "../../../shared/spinload/LoadSpinner";
import { getAppointmentsByHorseId } from "../../../service/AppointmentService";
import SirePopup from "./SirePopup";
import DamPopup from "./DamPopup";
import DamSirePopup from "./DamSirePopup";

const HorseDetailsPage = () => {
  const [searchParams] = useSearchParams();
  const [horse, setHorse] = useState({});
  const [isHorseLoaded, setIsHorseLoaded] = useState(false);
  const [openSirePopup, setOpenSirePopup] = useState(false);
  const [openDamPopup, setOpenDamPopup] = useState(false);
  const [openDamSirePopup, setOpenDamSirePopup] = useState(false);
  const [refreshCounter, setRefreshCounter] = useState(0);

  // appointment history for this horse
  const [appointmentsList, setAppointmentsList] = useState([]);
  const [isAppointmentsListLoaded, setIsAppointmentsListLoaded] =
    useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const horseRegistrationNumber = await searchParams.get(
        "registrationNumber"
      );
      const initialHorse = await getHorseByRegistrationNumberWithLocation(
        horseRegistrationNumber.toString()
      );
      const horse = await appendTypeToHorse(initialHorse);
      const horseWithId = await getHorseByRegistrationNumber(
        horseRegistrationNumber.toString()
      );
      const appointments = await getAppointmentsByHorseId(horse.id);
      console.log("appointments: ");
      console.log(appointments);
      await setAppointmentsList(appointments);
      await setIsAppointmentsListLoaded(true);
      await setHorse(horse);
      await setIsHorseLoaded(true);
    };
    fetchData().catch(console.error);
  }, [refreshCounter, setRefreshCounter]);
  const fields = {
    id: "Id",
    name: "Horse Name",
    registrationNumber: "Registration Number",
    horseType: "Horse Type",
    dam: "Dam",
    sire: "Sire",
    damSire: "Dam Sire",
    ownerUserId: "Owner User Id",
    stallId: "Stall Id",
  };
  async function handleSetSireButtonPressed() {
    console.log("handleSetSireButtonPressed");
    await setOpenSirePopup(true);
  }
  async function handleSetDamButtonPressed() {
    await setOpenDamPopup(true);
  }
  async function handleSetDamSireButtonPressed() {
    await setOpenDamSirePopup(true);
  }
  return (
    <div className="HorseDetailsPage">
      <LoadSpinner isLoading={!isHorseLoaded}>
        <VCentered>
          <GridRowAuto
            xs={12}
            sm={12}
            md={8}
            lg={8}
            xl={8}
            marginTop={"16px"}
            marginBottom={"16px"}
          >
            <VRight border="0">
              <Button
                variant={"contained"}
                sx={{ marginRight: "10px" }}
                onClick={() => {
                  handleSetDamButtonPressed();
                }}
              >
                Set Dam
              </Button>
              <Button
                variant={"contained"}
                sx={{ marginRight: "10px" }}
                onClick={() => {
                  handleSetSireButtonPressed();
                }}
              >
                Set Sire
              </Button>
              <Button
                variant={"contained"}
                sx={{ marginRight: "0" }}
                onClick={handleSetDamSireButtonPressed}
              >
                Set DamSire
              </Button>
            </VRight>
          </GridRowAuto>
          <SirePopup
            openSirePopup={openSirePopup}
            setOpenSirePopup={setOpenSirePopup}
            horse={horse}
            refreshCounter={refreshCounter}
            setRefreshCounter={setRefreshCounter}
          />
          <DamPopup
            openDamPopup={openDamPopup}
            setOpenDamPopup={setOpenDamPopup}
            horse={horse}
            refreshCounter={refreshCounter}
            setRefreshCounter={setRefreshCounter}
          />
          <DamSirePopup
            openDamSirePopup={openDamSirePopup}
            setOpenDamSirePopup={setOpenDamSirePopup}
            horse={horse}
            refreshCounter={refreshCounter}
            setRefreshCounter={setRefreshCounter}
          />
        </VCentered>
        {isHorseLoaded && (
          <DetailsTable title={"Horse Details"} data={horse} fields={fields} />
        )}
      </LoadSpinner>
    </div>
  );
};
export default HorseDetailsPage;
