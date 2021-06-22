import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const outline = "#3A2C60";
const primaryLight = "#6DC9F7";
const primary = "#0089EF";
const primaryDark = "#0070C3";
const primaryTransparent = "#0087ef63";
const secondaryTransparent = "#ff85aa42";
const greyDarkTransparent = "#58627963";
const greyTransparent = "#c8d0e775";
const secondaryLight = "#ff85aa";
const secondary = "#FA3571";
const secondaryDark = "#9c2146";
const greyLight1 = "#e4ebf5";
const greyLight2 = "#c8d0e7";
const greyLight3 = "#bec8e4";
const greyDark = "#586279";
const white = "#ffffff";
const nearWhite = "#f5f9fd";
export const typographyBlack = "#2f3031";

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
      black: typographyBlack,
      outline: outline,
    },
    transparent: {
      primary: primaryTransparent,
      secondary: secondaryTransparent,
      greyDark: greyDarkTransparent,
      grey: greyTransparent,
    },
  },
  overrides: {
    MuiTypography: {
      root: {
        color: typographyBlack,
      },
      colorTextSecondary: {
        color: greyDark,
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
    MuiFormControlLabel: {
      label: {
        fontWeight: "bold",
      },
    },
    MuiInputLabel: {
      shrink: {
        transform: "translate(14px, -12px) scale(0.85) !important",
        fontWeight: "bold",
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
        boxShadow: `inset -0.2rem -0.2rem 0.3rem ${greyLight3}, inset 0.2rem 0.2rem 0.3rem ${nearWhite}`,
        "&:hover": {
          boxShadow: "none",
          color: primary,
        },
      },
      containedPrimary: {
        backgroundColor: primary,
        color: nearWhite,
        boxShadow: `inset -0.2rem -0.2rem 0.3rem ${primaryDark}, inset 0.2rem 0.2rem 0.3rem ${primaryLight}`,
        "&:hover": {
          boxShadow: "none",
          color: white,
        },
      },
      containedSecondary: {
        backgroundColor: secondary,
        color: nearWhite,
        boxShadow: `inset -0.2rem -0.2rem 0.3rem ${secondaryDark}, inset 0.2rem 0.2rem 0.3rem ${secondaryLight}`,
        "&:hover": {
          boxShadow: "none",
          color: white,
        },
      },
      outlinedSecondary: {
        boxShadow: `0.1rem 0.1rem 0.1rem ${secondaryLight}, -0.1rem -0.1rem 0.1rem ${secondaryTransparent}`,
        border: "none",
        "&:hover": {
          border: "none",
          boxShadow: "none",
        },
      },
      outlined: {
        boxShadow: `0.1rem 0.1rem 0.1rem ${greyLight2}, -0.1rem -0.1rem 0.1rem ${greyLight1}`,
        border: "none",
        color: greyDark,
        backgroundColor: white,
        "&:hover": {
          border: "none",
          boxShadow: "none",
          color: typographyBlack,
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
