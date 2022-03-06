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
					border: 1,
					borderColor: "secondary.main",
					width: "calc(75px + 40%)",
				}}
			>
				<Typography
					sx={{
						fontSize: "calc(0.9rem + 0.6vw)",
						color: "text.primary",
					}}
				>
					{text}
				</Typography>
			</Button>
		</Box>
	);
}
