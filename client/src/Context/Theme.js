import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
	palette: {
		primary: {
			main: "#1a1a1a",
		},
		secondary: {
			main: "#ff9a2e",
		},
		text: {
			primary: "#f7f7f7",
		},
	},
});

document.body.style.backgroundColor = Theme.palette.primary.main;

export default Theme;
