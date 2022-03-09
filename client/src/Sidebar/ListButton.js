import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function ListButton({ text }) {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
			}}
		>
			<Button
				variant="contained"
				sx={{
					border: 2,
					borderColor: "secondary.main",
					width: "calc(60px + 35%)",
				}}
			>
				<Typography
					sx={{
						fontSize: "calc(0.85rem + 0.55vw)",
						color: "text.primary",
					}}
				>
					{text}
				</Typography>
			</Button>
		</Box>
	);
}
