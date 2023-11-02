import React from "react";
import VCentered from "../../grid/VCentered";
import GridRowAuto from "../../grid/GridRowAuto";
import { Grid, Typography } from "@mui/material";
import KeyValuePair from "./KeyValuePair";
import { Button } from '@mui/material';
import VRight from "../../grid/VRight";

const DetailsTable = (props) => {
  const { title, data, fields, paddingTop, paddingBottom } = props;

  function getKeyValuePairsList() {
    let keyValuePairsList = [];
    for (const [key, value] of Object.entries(fields)) {
      const field = fields[key];
      const dataValue = data[key];
      const keyValuePair = <KeyValuePair label={field} value={dataValue} />;
      keyValuePairsList.push(keyValuePair);
    }
    return keyValuePairsList;
  }

  return (
    <div
      className="DetailsPage"
      style={{
        paddingTop: "30px",
      }}
    >
      <VCentered>
        <GridRowAuto xs={12} sm={12} md={8} lg={8} xl={8}>
          <Typography variant="h4">{title}</Typography>
        </GridRowAuto>
        <GridRowAuto xs={12} sm={12} md={8} lg={8} xl={8} marginTop={"16px"}>
          <Grid container direction="row">
            {getKeyValuePairsList()}
          </Grid>
        </GridRowAuto>
      </VCentered>
    </div>
  );
};
export default DetailsTable;
