import { CssBaseline } from "@mui/material";
import { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import { NavBar } from "./NavBar/NavBar";
import About from "./Content/Specific/About";
import Features from "./Content/Specific/Features";
import Intro from "./Content/Specific/Intro";

export default function App() {
	const [open, setOpen] = useState(false);
	const toggleSidebar = () => {
		setOpen(!open);
	};

	return (
		<>
			<CssBaseline></CssBaseline>
			<NavBar toggleSidebar={toggleSidebar}></NavBar>
			<Sidebar open={open} toggleSidebar={toggleSidebar}></Sidebar>
			<Intro></Intro>
			<About></About>
			<Features></Features>
		</>
	);
}
