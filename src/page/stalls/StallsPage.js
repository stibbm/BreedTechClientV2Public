import React, { useState, useEffect } from "react";
import { getStallOccupanciesList } from "../../service/StallService";
import { Typography, Button } from "@mui/material";
import VCentered from "../../shared/grid/VCentered";
import GridRowAuto from "../../shared/grid/GridRowAuto";
import StallsTable from "./table/StallsTable";
import VRight from "../../shared/grid/VRight";
import AddIcon from "@mui/icons-material/Add";
import { ClipLoader } from "react-spinners";
import Popup from "../../shared/popup/Popup";
import StallForm from "./form/StallForm";

const StallsPage = (props) => {
  const [stallsList, setStallsList] = useState([]);
  const [isStallsListLoaded, setIsStallsListLoaded] = useState(false);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [refreshCounter, setRefreshCounter] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const stallsList = await getStallOccupanciesList();
      await setStallsList(stallsList);
      await setIsStallsListLoaded(true);
      console.log('stalls');
      console.log(stallsList);
    }
    fetchData().catch(console.error);
  }, [refreshCounter, setRefreshCounter]);

  return (
    <div className="StallsPage">
      <VCentered>
        <GridRowAuto>
          <Typography sx={{ marginTop: '30px', marginBottom: '30px' }} variant="h5">Stalls</Typography>
        </GridRowAuto>
        <GridRowAuto>
          <VRight border="0">
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              onClick={() => {
                setIsOpenPopup(true);
              }}
            >Create Stall</Button>
          </VRight>
        </GridRowAuto>
        <GridRowAuto style={{ marginTop: '30px' }}>
          {isStallsListLoaded && <StallsTable data={stallsList} isGlobalFilterEnabled={true} />}
          <ClipLoader
            loading={!isStallsListLoaded}
            size={150}
            aria-label="Loading..."
          />
        </GridRowAuto>
        <Popup
          title="Create Stall"
          openPopup={isOpenPopup}
          setOpenPopup={setIsOpenPopup}
        >
          <StallForm
            setOpenPopup={setIsOpenPopup}
            refreshCounter={refreshCounter}
            setRefreshCounter={setRefreshCounter}
          />
        </Popup>
      </VCentered>
    </div>
  )
};
export default StallsPage;
