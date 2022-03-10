import { CssBaseline } from "@mui/material";
import { useLayoutEffect, useRef, useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import { NavBar } from "./NavBar/NavBar";
import About from "./Content/Specific/About";
import Features from "./Content/Specific/Features";
import Intro from "./Content/Specific/Intro";
import { Box } from "@mui/system";

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
			<Box
				sx={{
					scrollSnapType: "y mandatory",
					scrollPaddingBottom: "12.25%",
					maxHeight: "100vh",
					overflowY: "scroll",
				}}
			>
				<Intro></Intro>
				<About></About>
				<Features></Features>
			</Box>
		</>
	);
}
