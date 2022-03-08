import { Box, Drawer } from "@mui/material";
import ActivationButton from "./ActivationButton";
import ListButton from "./ListButton";

export default function Sidebar({ open, toggleSidebar }) {
	return (
		<Drawer
			variant="temporary"
			anchor="right"
			open={open}
			PaperProps={{
				sx: {
					backgroundColor: "primary.main",
					borderLeft: 1,
					borderColor: "secondary.main",
					width: {
						xs: "100%",
						sm: "75%",
						md: "75%",
						lg: "50%",
						xl: "40%",
					},
				},
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "flex-end",
				}}
			>
				<ActivationButton
					open={true}
					toggleSidebar={toggleSidebar}
				></ActivationButton>
			</Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					marginTop: "7.5%",
					gap: 1.25,
					margin: 1.1,
				}}
			>
				<ListButton text={"About"}></ListButton>
				<ListButton text={"Features"}></ListButton>
				<ListButton text={"Tokenomics"}></ListButton>
				<ListButton text={"Team"}></ListButton>
				<ListButton text={"Whitepaper"}></ListButton>
				<ListButton text={"Presale"}></ListButton>
				<ListButton text={"Mint"}></ListButton>
				<ListButton text={"Game"}></ListButton>
			</Box>
		</Drawer>
	);
}
