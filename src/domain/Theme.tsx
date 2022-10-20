import { createTheme, ThemeOptions } from "@mui/material/styles";

export const lightTheme: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#496380",
      light: "#ffff",
    },
    secondary: {
      main: "#F46C49",
    },
  },
};

export const darkTheme: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#272D33",
      light: "#52575b",
    },
    secondary: {
      main: "#EB3F2F",
    },
    background: {
      default: "#272D33",
      paper: "#393c3f",
    },
  },
};
