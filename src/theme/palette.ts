// primary => royal blue
const COLOR_5F7BD7 = '#5F7BD7'
const COLOR_F2F5fC = '#F2F5FC'
const COLOR_E1E8F8 = '#E1E8f8'
const COLOR_CAD6F3 = '#CAD6F3'
const COLOR_A5BCEB = '#A5BCEB'
const COLOR_7A99E0 = '#7A99E0'
const COLOR_475DC9 = '#475DC9'
const COLOR_3D4BB8 = '#3D4BB8'
const COLOR_373F96 = '#373F96'
const COLOR_303878 = '#303878'

// Accent => chardonnay
const COLOR_FEF8EE = '#FEF8EE'
const COLOR_FEEFD6 = '#FEEFD6'
const COLOR_FBDCAD = '#FBDCAD'
const COLOR_F9C784 = '#F9C784'
const COLOR_F59E42 = '#F59E42'
const COLOR_F1811E = '#F1811E'
const COLOR_E36713 = '#E36713'
const COLOR_BC4E12 = '#BC4E12'
const COLOR_953e17 = '#953e17'
const COLOR_783516 = '#783516'
const COLOR_411809 = '#411809'

const HSLA_240_25_98 = 'hsla(240, 25%, 98%)'
const HSLA_220_14_96_1 = 'hsla(220, 14%, 96%, 1)'
const HSLA_300_0_0_1 = 'hsla(300, 0%, 0%, 1)'
const HSLA_0_0_100_1 = 'hsla(0, 0%, 100%, 1)'
export default {
	white: 'hsla(0, 0%, 100%, 1)',
	black: 'hsla(0, 0%, 0%, 1)',
	divider: {
		DEFAULT: 'hsla(216, 12%, 84%, 1)',
		dark: 'hsla(216, 12%, 84%, 0.56)',
	},
	background: {
		DEFAULT: HSLA_220_14_96_1,
		dark: HSLA_300_0_0_1,
	},
	button: {
		DEFAULT: 'hsla(215, 28%, 17%, 1)',
		hover: 'hsla(217, 19%, 27%, 1)',
		disabled: 'hsla(217, 19%, 27%, 0.56)',
		'outlined-hover': 'hsla(240, 3%, 12%, 0.08)',
	},
	color: {
		DEFAULT: 'hsla(240, 3%, 12%, 1)',
		light: {
			muted: 'hsla(0, 0%, 0%, 0.56)',
		},
		dark: {
			default: 'hsla(0, 0%, 100%, 0.87)',
			muted: 'hsla(0, 0%, 100%, 0.56)',
		},
	},
	foreground: {
		DEFAULT: HSLA_0_0_100_1,
		hover: 'hsla(220, 13%, 91%, 1)',
		dark: {
			default: HSLA_240_25_98,
		},
	},
	nav: {
		DEFAULT: 'rgba(250, 250, 252, .8)',
	},
	card: {
		DEFAULT: 'hsla(218, 11%, 65%, 1)',
	},
	primary: {
		DEFAULT: COLOR_5F7BD7,
		50: COLOR_F2F5fC,
		100: COLOR_E1E8F8,
		200: COLOR_CAD6F3,
		300: COLOR_A5BCEB,
		400: COLOR_7A99E0,
		600: COLOR_475DC9,
		700: COLOR_3D4BB8,
		800: COLOR_373F96,
		900: COLOR_303878,
	},
	accent: {
		DEFAULT: COLOR_F9C784,
		50: COLOR_FEF8EE,
		100: COLOR_FEEFD6,
		200: COLOR_FBDCAD,
		400: COLOR_F59E42,
		500: COLOR_F1811E,
		600: COLOR_E36713,
		700: COLOR_BC4E12,
		800: COLOR_953e17,
		900: COLOR_783516,
		950: COLOR_411809,
	},
}
