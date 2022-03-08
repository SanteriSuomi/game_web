import { Grid } from "@mui/material";
import About from "./Content/About";
import Features from "./Content/Features";

export default function MidContent() {
	return (
		<Grid
			container
			spacing={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }}
			direction="row"
			justifyContent="center"
			alignItems="center"
			sx={{
				padding: "3.5%",
			}}
		>
			<About></About>
			<Features></Features>
		</Grid>
	);
}
