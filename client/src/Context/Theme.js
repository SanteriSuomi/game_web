import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
	palette: {
		primary: {
			main: "#383333",
		},
		secondary: {
			main: "#fcad3d",
		},
		tertiary: {
			main: "#cdcccc",
		},
		text: {
			primary: "#ffffff",
			secondary: "#000000",
		},
	},
});

document.body.style.backgroundColor = Theme.palette.primary.main;

export default Theme;
