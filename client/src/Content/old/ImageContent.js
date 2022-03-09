import { Grid, CardMedia } from "@mui/material";
import { Box } from "@mui/system";

export default function ImageContent() {
	return (
		<Grid item xs={12} md={6}>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<CardMedia
					sx={{
						width: {
							xs: "100%",
							sm: 550,
							md: 600,
							lg: 625,
							xl: "75%",
						},
						height: {
							xs: 250,
							sm: 350,
							md: 375,
							lg: 375,
							xl: 450,
						},
						border: 2.5,
						borderColor: "secondary.main",
						borderRadius: "5px",
					}}
					image="https://loremflickr.com/500/300"
				></CardMedia>
			</Box>
		</Grid>
	);
}
