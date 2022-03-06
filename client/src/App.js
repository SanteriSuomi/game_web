import { AppBar, Box, Button, CssBaseline, Typography } from "@mui/material";
import { useState } from "react";
import ActivationButton from "./Sidebar/ActivationButton";
import Sidebar from "./Sidebar/Sidebar";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

export default function App() {
	const [open, setOpen] = useState(false);
	const toggleSidebar = () => {
		setOpen(!open);
	};
	return (
		<>
			<CssBaseline></CssBaseline>
			<AppBar position="fixed">
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						padding: "1.1%",
						borderBottom: 1,
						borderBottomColor: "secondary.main",
					}}
				>
					<Typography
						sx={{
							fontSize: "2.5rem",
							marginLeft: "1.5%",
							color: "typography.color",
						}}
					>
						En Garde
					</Typography>

					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "center",
							border: 1,
							borderColor: "secondary.main",
							borderRadius: 1,
							padding: "0.5%",
						}}
					>
						<AccountBalanceWalletIcon></AccountBalanceWalletIcon>
						<Button>
							<Typography
								sx={{
									fontSize: "0.9rem",
									color: "secondary.main",
								}}
							>
								Connect
							</Typography>
						</Button>
					</Box>

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
