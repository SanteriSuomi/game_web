import { AppBar, Box, Button, Typography } from "@mui/material";
import ActivationButton from "../Sidebar/ActivationButton";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

let NavBarBoxRef = null;

const NavBar = function NavBar({ toggleSidebar }) {
	return (
		<AppBar position="sticky">
			<Box
				ref={(node) => {
					NavBarBoxRef = node;
				}}
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					padding: { xs: "1.1%", md: "0.55%" },
					borderBottom: 2,
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
						border: 2,
						borderColor: "secondary.main",
						borderRadius: 2,
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
};

export { NavBar, NavBarBoxRef };
