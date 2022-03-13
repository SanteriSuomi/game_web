import { Divider, Stack, Typography } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

export default function FeaturesItem({ text }) {
	return (
		<Stack
			direction="row"
			spacing={2}
			alignItems="center"
			divider={
				<Divider
					orientation="vertical"
					width="1px"
					sx={{
						backgroundColor: "primary.main",
						maxWidth: "50px",
					}}
				></Divider>
			}
		>
			<DoubleArrowIcon
				sx={{
					fontSize: "calc(1.5rem + 1vw)",
					color: "secondary.main",
				}}
			></DoubleArrowIcon>
			<Typography
				sx={{
					fontSize: "calc(0.9rem + 0.75vw)",
					color: "text.secondary",
				}}
			>
				{text}
			</Typography>
		</Stack>
	);
}
