import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Theme from "./Context/Theme";

ReactDOM.render(
	<BrowserRouter>
		<ThemeProvider theme={Theme}>
			<App />
		</ThemeProvider>
	</BrowserRouter>,
	document.getElementById("root")
);
