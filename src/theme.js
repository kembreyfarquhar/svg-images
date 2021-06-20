import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#6DC9F7",
      main: "#0089EF",
      dark: "#0070C3",
    },
    secondary: {
      light: "#FA759E",
      main: "#FA3571",
      dark: "#C12253",
    },
  },
  overrides: {
    MuiButton: {
      contained: {
        backgroundColor: "#d8d8d8",
        fontSize: "13.5px",
      },
    },
  },
});

export default responsiveFontSizes(theme);
