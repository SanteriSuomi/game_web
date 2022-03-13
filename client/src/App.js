import { CssBaseline } from "@mui/material";
import { useLayoutEffect, useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import About from "./Content/Specific/About";
import Features from "./Content/Specific/Features";
import Intro from "./Content/Specific/Intro";
import { Box } from "@mui/system";
import { NavBar, NavBarBoxRef } from "./NavBar/NavBar";
import { useTheme } from "@emotion/react";
import "./App.css";
import useOnResize from "./Hooks/useOnResize";

export default function App() {
	const theme = useTheme();

	const [open, setOpen] = useState(false);
	const toggleSidebar = () => {
		setOpen(!open);
	};

	const [maxHeight, setMaxHeight] = useState(window.innerHeight);

	useLayoutEffect(() => {
		setMaxHeight(window.innerHeight - NavBarBoxRef.offsetHeight);
	}, []);

	useOnResize(() => {
		setMaxHeight(window.innerHeight - NavBarBoxRef.offsetHeight);
	});

	return (
		<>
			<CssBaseline></CssBaseline>
			<NavBar toggleSidebar={toggleSidebar}></NavBar>
			<Sidebar open={open} toggleSidebar={toggleSidebar}></Sidebar>
			<Box
				className="content-container"
				sx={{
					scrollSnapType: "y mandatory",
					maxHeight: maxHeight,
				}}
			>
				<Intro theme={theme}></Intro>
				<About theme={theme}></About>
				<Features theme={theme}></Features>
			</Box>
		</>
	);
}
