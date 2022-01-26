import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Mint from "./Mint";

ReactDOM.render(
	<BrowserRouter>
		<ChakraProvider>
			<Routes>
				<Route exact path="/" element={<Main></Main>}></Route>
				<Route path="mint" element={<Mint></Mint>}></Route>
			</Routes>
		</ChakraProvider>
	</BrowserRouter>,
	document.getElementById("root")
);
