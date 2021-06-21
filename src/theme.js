import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const primaryLight = "#6DC9F7";
const primary = "#0089EF";
const primaryDark = "#0070C3";
const primaryTransparent = "#0087ef63";
const secondaryTransparent = "#ff85aa42";
const secondaryLight = "#ff85aa";
const secondary = "#FA3571";
const secondaryDark = "#9c2146";
const greyLight1 = "#e4ebf5";
const greyLight2 = "#c8d0e7";
const greyLight3 = "#bec8e4";
const greyDark = "#586279";
const white = "#ffffff";
const nearWhite = "#f5f9fd";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: primaryLight,
      main: primary,
      dark: primaryDark,
    },
    secondary: {
      light: secondaryLight,
      main: secondary,
      dark: secondaryDark,
    },
    background: {
      greyLight1: greyLight1,
      greyLight2: greyLight2,
      greyLight3: greyLight3,
      greyDark: greyDark,
      paper: nearWhite,
    },
    typography: {
      black: "#272a33",
      grey: "#3d4453",
    },
  },
  overrides: {
    MuiTypography: {
      root: {
        color: "#272a33",
      },
    },
    MuiBackdrop: {
      root: {
        backdropFilter: "blur(1.5px)",
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: nearWhite,
      },
      rounded: {
        borderRadius: "1rem",
      },
      elevation8: {
        boxShadow: `0.3rem 0.5rem 1.3rem ${greyLight3}, inset -0.2rem -0.2rem 1rem ${greyLight1}`,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: greyLight2,
      },
    },
    MuiDialog: {
      paper: {
        boxShadow: `0.1rem 0.1rem 1rem #272a33, inset -0.2rem -0.2rem 0.4rem ${greyLight3}`,
        overflowY: "visible",
        padding: "2rem",
        textAlign: "center",
        borderRadius: "1rem",
      },
    },
    MuiButton: {
      root: {
        margin: "10px",
        transition: "all .5s ease",
      },
      text: {
        color: greyDark,
        "&:hover": {
          color: primary,
          backgroundColor: "transparent",
        },
      },
      contained: {
        backgroundColor: greyLight1,
        color: greyDark,
        boxShadow: `0.3rem 0.3rem 0.6rem ${greyLight2}, -0.2rem -0.2rem 0.5rem ${white}`,
        "&:hover": {
          boxShadow: `inset 0.2rem 0.2rem 0.5rem ${greyLight2}, inset -0.2rem -0.2rem 0.5rem ${white}`,
          color: primary,
        },
      },
      containedPrimary: {
        backgroundColor: primary,
        color: nearWhite,
        boxShadow: `0.1rem 0.1rem 0.3rem ${primaryDark}, -0.1rem -0.1rem 0.4rem ${primaryTransparent}`,
        "&:hover": {
          boxShadow: `inset 0.1rem 0.1rem 0.3rem ${primaryDark}, inset -0.1rem -0.1rem 0.4rem ${primaryTransparent}`,
          color: white,
        },
      },
      containedSecondary: {
        backgroundColor: secondary,
        color: nearWhite,
        boxShadow: `0.1rem 0.1rem 0.3rem ${secondaryDark}, -0.1rem -0.1rem 0.4rem ${secondaryTransparent}`,
        "&:hover": {
          boxShadow: `inset 0.1rem 0.1rem 0.3rem ${secondaryDark}, inset -0.1rem -0.1rem 0.4rem ${secondaryTransparent}`,
          color: white,
        },
      },
      outlinedSecondary: {
        boxShadow: `0.1rem 0.1rem 0.3rem ${secondaryLight}, -0.1rem -0.1rem 0.3rem ${secondaryTransparent}`,
        border: "none",
        "&:hover": {
          border: "none",
          boxShadow: `inset 0.1rem 0.1rem 0.3rem ${secondaryLight}, inset -0.1rem -0.1rem 0.3rem ${secondaryTransparent}`,
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
