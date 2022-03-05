import { Box, Drawer } from "@mui/material";
import ActivationButton from "./ActivationButton";
import ListButton from "./ListButton";

export default function Sidebar({ open, toggleSidebar }) {
	return (
		<Drawer
			variant="temporary"
			anchor="right"
			open={open}
			hideBackdrop={true}
			PaperProps={{
				sx: {
					backgroundColor: "primary.main",
					borderLeft: 1,
					borderColor: "secondary.main",
				},
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					marginTop: "7.5%",
					gap: 1.25,
					margin: 1.1,
				}}
			>
				<ActivationButton
					open={true}
					toggleSidebar={toggleSidebar}
				></ActivationButton>
				<ListButton text={"About"}></ListButton>
				<ListButton text={"Tokenomics"}></ListButton>
			</Box>
		</Drawer>
	);
}
