import React, { useState, useEffect } from "react";
import { getUsersList } from "../../service/UserService";
import VCentered from "../../shared/grid/VCentered";
import GridRowAuto from "../../shared/grid/GridRowAuto";
import VRight from "../../shared/grid/VRight";
import { Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { UsersTable } from "./table/UsersTable";

const UsersPage = () => {
  const [usersList, setUsersList] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [refreshCounter, setRefreshCounter] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const usersList = await getUsersList();
      console.log("usersList");
      console.log(usersList);
      await setUsersList(usersList);
      await setIsReady(true);
    };
    fetchData().catch(console.error);
  }, [refreshCounter, setRefreshCounter]);
  return (
    <div className="UsersPage">
      <VCentered>
        <GridRowAuto>
          <Typography
            sx={{ marginTop: "30px", marginBottom: "30px" }}
            variant="h5"
          >
            Users
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
            >
              Create User
            </Button>
          </VRight>
        </GridRowAuto>
        <GridRowAuto style={{ marginTop: "30px" }}>
          {isReady && (
            <UsersTable data={usersList} isGlobalFieldFilterEnabled={true} />
          )}
        </GridRowAuto>
      </VCentered>
    </div>
  );
};
export default UsersPage;
