import React from "react";
import ReactDOM from "react-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Context from "./Context";

const theme = createTheme({
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

document.body.style.backgroundColor = theme.palette.primary.main;

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<Context.Provider
					value={{
						mainColor: "#1a1a1a",
						secondaryColor: "#ff9a2e",
					}}
				>
					<App />
				</Context.Provider>
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
