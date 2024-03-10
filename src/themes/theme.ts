import { createTheme, ThemeOptions } from "@mui/material";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#fff",
    },
    background: {
      default: "#000",
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
