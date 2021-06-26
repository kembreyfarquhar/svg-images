import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const outline = '#3A2C60';
const primaryLight = '#6DC9F7';
const primary = '#0089EF';
const primaryDark = '#0070C3';
const primaryTransparent = '#0087ef63';
const secondaryTransparent = '#ff85aa42';
const greyDarkTransparent = '#58627963';
const greyTransparent = '#bec8e480';
const whiteTransparent = '#ffffff80';
const secondaryLight = '#ff85aa';
const secondary = '#FA3571';
const secondaryDark = '#9c2146';
const greyLight1 = '#e4ebf5';
const greyLight2 = '#c8d0e7';
const greyLight3 = '#bec8e4';
const greyDark = '#586279';
const white = '#ffffff';
const nearWhite = '#f5f9fd';
export const typographyBlack = '#393B3D';

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
		error: {
			main: '#ff4802',
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
			white: whiteTransparent,
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
		MuiFormLabel: {
			root: {
				color: typographyBlack,
			},
		},
		MuiBackdrop: {
			root: {
				backdropFilter: 'blur(1.5px)',
			},
		},
		MuiPaper: {
			root: {
				backgroundColor: nearWhite,
			},
			rounded: {
				borderRadius: '0.3rem',
			},
			elevation8: {
				boxShadow: `0.2rem 0.2rem 0.5rem ${greyLight3}, inset -0.2rem -0.2rem 0.8rem ${greyLight1}`,
			},
		},
		MuiDivider: {
			root: {
				backgroundColor: greyLight2,
			},
		},
		MuiPopover: {
			paper: {
				padding: '0 0.5rem',
			},
		},
		MuiTooltip: {
			tooltip: {
				backgroundColor: greyDark,
				fontSize: '0.7rem',
				textAlign: 'center',
			},
		},
		MuiDialog: {
			paper: {
				boxShadow: `0.1rem 0.1rem 1rem #272a33, inset -0.2rem -0.2rem 0.4rem ${greyLight3}`,
				overflowY: 'visible',
				padding: '2rem',
				textAlign: 'center',
				borderRadius: '0.3rem',
			},
		},
		MuiFormControlLabel: {
			label: {
				fontWeight: 'bold',
			},
		},
		MuiInputLabel: {
			shrink: {
				transform: 'translate(10px, -4px) scale(0.95) !important',
				fontWeight: 'bold',
			},
		},
		MuiInput: {
			underline: {
				padding: '4px',
				borderRadius: '0.2rem',
				boxShadow: `0.2rem 0.2rem 0.7rem ${greyLight3}, -0.2rem -0.2rem 0.3rem ${white}`,
			},
			input: {
				padding: '12px !important',
				'&:focus': {
					borderRadius: '0.2rem',
					boxShadow: `inset 0.2rem 0.2rem 0.7rem ${greyLight3}, inset -0.2rem -0.2rem 0.7rem ${white}`,
				},
			},
		},

		MuiButton: {
			root: {
				margin: '10px',
				transition: 'all .5s ease',
				borderRadius: '0.5rem',
			},
			text: {
				color: greyDark,
				'&:hover': {
					color: primary,
					backgroundColor: 'transparent',
				},
			},
			contained: {
				backgroundColor: greyLight1,
				color: greyDark,
				boxShadow: `inset -0.2rem -0.2rem 0.3rem ${greyLight3}, inset 0.2rem 0.2rem 0.3rem ${nearWhite}`,
				'&:hover': {
					boxShadow: 'none',
					color: primary,
				},
			},
			containedPrimary: {
				backgroundColor: primary,
				color: nearWhite,
				boxShadow: `0.35rem 0.35rem 0.4rem ${greyLight3}, -0.3rem -0.3rem 0.7rem ${white}`,
				'&:hover': {
					boxShadow: 'none',
					color: white,
				},
			},
			containedSecondary: {
				backgroundColor: secondary,
				color: nearWhite,
				boxShadow: `inset -0.2rem -0.2rem 0.3rem ${secondaryDark}, inset 0.2rem 0.2rem 0.3rem ${secondaryLight}`,
				'&:hover': {
					boxShadow: 'none',
					color: white,
				},
			},
			outlinedSecondary: {
				boxShadow: `0.1rem 0.1rem 0.1rem ${secondaryLight}, -0.1rem -0.1rem 0.1rem ${secondaryTransparent}`,
				border: 'none',
				'&:hover': {
					border: 'none',
					boxShadow: 'none',
				},
			},
			outlined: {
				boxShadow: `0.2rem 0.2rem 0.7rem ${greyLight3}, -0.2rem -0.2rem 0.7rem ${white}`,
				border: 'none',
				color: greyDark,
				backgroundColor: 'transparent',
				'&:hover': {
					border: 'none',
					boxShadow: 'none',
					color: typographyBlack,
				},
			},
		},
	},
});

export default responsiveFontSizes(theme);
