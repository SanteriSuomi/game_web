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
						sm: "70%",
						md: "70%",
						lg: "45%",
						xl: "35%",
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
					gap: 1.5,
					margin: 1.1,
				}}
			>
				<ListButton text={"About"}></ListButton>
				<ListButton text={"Features"}></ListButton>
				<ListButton text={"Tokenomics"}></ListButton>
				<ListButton text={"Roadmap"}></ListButton>
				<ListButton text={"Team"}></ListButton>
				<ListButton text={"Whitepaper"}></ListButton>
				<ListButton text={"Presale"}></ListButton>
				<ListButton text={"Mint"}></ListButton>
				<ListButton text={"Game"}></ListButton>
			</Box>
		</Drawer>
	);
}
