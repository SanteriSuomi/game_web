import { AppBar, Box, Button, Typography } from "@mui/material";
import ActivationButton from "../Sidebar/ActivationButton";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

export default function NavBar({ toggleSidebar }) {
	return (
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
						fontSize: "calc(1.5rem + 1vw)",
						marginLeft: "2.5%",
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
		</AppBar>
	);
}
