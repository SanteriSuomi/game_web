import { Box, Grid } from "@mui/material";

export default function ContentBox({ content }) {
	return (
		<Grid item xs={12} md={6}>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					gap: 1.5,
					backgroundColor: "primary.main",
					border: 1.5,
					borderColor: "secondary.main",
					borderRadius: 1,
					padding: "3.5%",
				}}
			>
				{content}
			</Box>
		</Grid>
	);
}
