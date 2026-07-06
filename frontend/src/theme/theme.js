import { createTheme } from "@mui/material/styles";

const theme = createTheme({

    palette: {

        mode: "dark",

        primary: {
            main: "#7C3AED"
        },

        secondary: {
            main: "#3B82F6"
        },

        background: {
            default: "#0F172A",
            paper: "#1E293B"
        }

    },

    typography: {
        fontFamily: "Poppins, Roboto, sans-serif"
    },

    shape: {
        borderRadius: 14
    }

});

export default theme;