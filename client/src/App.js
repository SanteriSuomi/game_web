import {
	AppBar,
	Box,
	Button,
	CssBaseline,
	Divider,
	Grid,
	Typography,
} from "@mui/material";
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
			<AppBar position="sticky">
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
							fontSize: "calc(1.9rem + 0.9vw)",
							marginLeft: "1.5%",
							color: "text.primary",
							whiteSpace: "nowrap",
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
						}}
					>
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
								marginLeft: "calc(10px + 5%)",
							}}
						>
							<AccountBalanceWalletIcon></AccountBalanceWalletIcon>
							<Button>
								<Typography
									sx={{
										color: "text.primary",
										fontSize: "calc(0.8rem + 0.4vw)",
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
				</Box>
			</AppBar>

			<Sidebar open={open} toggleSidebar={toggleSidebar}></Sidebar>

			<Box>
				<Grid
					container
					spacing={2}
					direction="row"
					justifyContent="center"
					alignItems="center"
					sx={{
						padding: "3.5%",
					}}
				>
					<Grid item xs={12} md={6}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								gap: 1.5,
								backgroundColor: "primary.main",
								border: 1,
								borderColor: "secondary.main",
								borderRadius: 1,
								padding: "3.5%",
							}}
						>
							<Typography
								sx={{
									display: "flex",
									flexDirection: "row",
									justifyContent: "center",
									fontSize: "calc(1.5rem + 0.8vw)",
								}}
							>
								About
							</Typography>
							<Divider
								variant="middle"
								sx={{
									backgroundColor: "secondary.main",
								}}
							></Divider>
							<Typography
								sx={{
									fontSize: "calc(0.875rem + 0.55vw)",
								}}
							>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in
								reprehenderit in voluptate velit esse cillum
								dolore eu fugiat nulla pariatur. Excepteur sint
								occaecat cupidatat non proident, sunt in culpa
								qui officia deserunt mollit anim id est laborum.
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} md={6}>
						<Typography>KEK</Typography>
					</Grid>
					<Grid item xs={12} md={6}>
						<Typography>KEK</Typography>
					</Grid>
					<Grid item xs={12} md={6}>
						<Typography>KEK</Typography>
					</Grid>
				</Grid>
			</Box>
		</>
	);
}
