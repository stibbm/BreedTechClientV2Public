import { createTheme, responsiveFontSizes } from "@mui/material";
import { blue, purple, red } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: "#333996",
            light: '#3c44b126'
        },
        secondary: {
            main: "#db2133",
            light: '#f8324526'
        },
        background: {
            default: "#f4f5fd"
        },
    },
    overrides:{
        MuiAppBar:{
            root:{
                transform:'translateZ(0)'
            }
        }
    },
    props:{
        MuiIconButton:{
            disableRipple:true
        }
    }
});

export default responsiveFontSizes(theme);
