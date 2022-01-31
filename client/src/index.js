import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Mint from "./Mint";

ReactDOM.render(
	<HashRouter>
		<ChakraProvider>
			<Routes>
				<Route exact path="/" element={<Main></Main>}></Route>
				<Route path="mint" element={<Mint></Mint>}></Route>
			</Routes>
		</ChakraProvider>
	</HashRouter>,
	document.getElementById("root")
);
