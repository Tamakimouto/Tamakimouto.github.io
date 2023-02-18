import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1000,
            lg: 1200,
            xl: 1536,
            xxl: 2800,
        },
    },
    palette: {
        primary: {
            main: "#A0A0A0",
        },
    },
});

export default theme;
