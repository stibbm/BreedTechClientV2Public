import { TextField } from "@mui/material";
import React from "react";

const MInput = (props) => {
  const { marginTop, marginBottom, width, paddingTop, name, label, value, error = null, onChange, ...other } = props;
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...other}
      {...(error && { error: true, helperText: error })}
      sx={{
        paddingTop: paddingTop || "0",
        marginTop: marginTop || "0",
        marginBottom: marginBottom || "0",
        width: width || '100%'
      }}
    />
  )
}
export default MInput;
