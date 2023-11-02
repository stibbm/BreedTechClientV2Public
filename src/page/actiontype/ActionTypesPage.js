import React, { useEffect, useState } from "react";
import { getActionTypesList } from "../../service/ActionTypeService";
import { Button, Typography } from "@mui/material";
import GridRowAuto from "../../shared/grid/GridRowAuto";
import VCentered from "../../shared/grid/VCentered";
import { log } from "../../log/Logger";
import VRight from "../../shared/grid/VRight";
import AddIcon from "@mui/icons-material/Add";
import { ClipLoader } from "react-spinners";
import ActionTypesTable from "./table/ActionTypesTable";
import Popup from "../../shared/popup/Popup";
import ActionTypeForm from "./form/ActionTypeForm";

const ActionTypesPage = (props) => {
  const [actionTypesList, setActionTypesList] = useState([]);
  const [isActionTypesListLoaded, setIsActionTypesListLoaded] = useState(false);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [refreshCounter, setRefreshCounter] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const actionTypes = await getActionTypesList();
      log("actionTypes", actionTypes);
      await setActionTypesList(actionTypes);
      await setIsActionTypesListLoaded(true);
      log("actionTypesList: ", actionTypes);
      console.log("setActionTypesListLoaded to true");
    };
    fetchData().catch(console.error);
  }, [refreshCounter, setRefreshCounter]);

  return (
    <div className="ActionTypesPage">
      <VCentered>
        <GridRowAuto>
          <Typography
            sx={{ marginTop: "30px", marginBottom: "30px" }}
            variant="h5"
          >
            Action Types
          </Typography>
        </GridRowAuto>
        <GridRowAuto>
          <VRight border="0">
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              onClick={() => {
                setIsOpenPopup(true);
              }}
              sx={{
                margin: "0px",
              }}
            >
              Create Action Type
            </Button>
          </VRight>
        </GridRowAuto>
        <GridRowAuto style={{ marginTop: "30px" }}>
          {isActionTypesListLoaded && (
            <ActionTypesTable
              data={actionTypesList}
              isGlobalFilterEnabled={true}
            />
          )}
          <ClipLoader
            loading={!isActionTypesListLoaded}
            size={150}
            aria-label="Loading..."
          />
        </GridRowAuto>
        <Popup
          title="Create Action Type"
          openPopup={isOpenPopup}
          setOpenPopup={setIsOpenPopup}
        >
          <ActionTypeForm
            setOpenPopup={setIsOpenPopup}
            refreshCounter={refreshCounter}
            setRefreshCounter={setRefreshCounter}
          />
        </Popup>
      </VCentered>
    </div>
  );
};
export default ActionTypesPage;
