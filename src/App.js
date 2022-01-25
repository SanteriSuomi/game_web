import { Route, Routes } from "react-router-dom";
import Main from "./Main/Main";
import Mint from "./Mint/Mint";

function App() {
	return (
		<Routes>
			<Route exact path="/" element={<Main></Main>}></Route>
			<Route path="/mint" element={<Mint></Mint>}></Route>
		</Routes>
	);
}

export default App;
