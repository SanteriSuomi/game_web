import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Context from "./Context/Context";
import Theme from "./Context/Theme";

ReactDOM.render(
	<BrowserRouter>
		<ThemeProvider theme={Theme}>
			<Context.Provider
				value={{
					mainColor: "#1a1a1a",
					secondaryColor: "#ff9a2e",
				}}
			>
				<App />
			</Context.Provider>
		</ThemeProvider>
	</BrowserRouter>,
	document.getElementById("root")
);
