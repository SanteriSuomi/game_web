import { Button, Typography } from "@mui/material";

export default function ListButton({ text }) {
	return (
		<Button
			sx={{
				border: 1,
				borderColor: "secondary.main",
			}}
		>
			<Typography
				sx={{
					fontSize: "1rem",
					color: "typography.color",
				}}
			>
				{text}
			</Typography>
		</Button>
	);
}
