import { AppBar, Box, CssBaseline, Typography } from "@mui/material";
import { useState } from "react";
import ActivationButton from "./Sidebar/ActivationButton";
import Sidebar from "./Sidebar/Sidebar";

export default function App() {
	const [open, setOpen] = useState(false);
	const toggleSidebar = () => {
		setOpen(!open);
	};
	return (
		<>
			<CssBaseline></CssBaseline>
			<AppBar position="sticky">
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "flex-start",
						alignItems: "center",
						padding: "0.7%",
						borderBottom: 1,
						borderBottomColor: "secondary.main",
					}}
				>
					<Typography
						sx={{
							flex: 1,
							fontSize: "2.5rem",
							marginLeft: "1.5%",
							color: "typography.color",
						}}
					>
						En Garde
					</Typography>
					<ActivationButton
						open={false}
						toggleSidebar={toggleSidebar}
					></ActivationButton>
				</Box>
			</AppBar>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "flex-start",
					alignItems: "center",
					height: "100vh",
					backgroundColor: "primary.main",
				}}
			>
				<Sidebar open={open} toggleSidebar={toggleSidebar}></Sidebar>
			</Box>
		</>
	);
}
