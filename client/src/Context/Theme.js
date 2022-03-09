import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
	palette: {
		primary: {
			main: "#353935",
		},
		secondary: {
			main: "#CC7722", // Secondary colors such as borders, dividers, etc
		},
		tertiary: {
			main: "#A9A9A9", // Complement primary colors such as occasional background, etc
		},
		text: {
			primary: "#ffffff",
			secondary: "#000000",
		},
	},
});

document.body.style.backgroundColor = Theme.palette.primary.main;

export default Theme;
