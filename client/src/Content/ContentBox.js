import { Box } from "@mui/material";

export default function ContentBox({ content, palette }) {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: palette.backgroundColor,
				border: 1.5,
				borderColor: palette.border,
				borderRadius: 1,
				padding: "3.5%",
				flex: 1,
			}}
		>
			{content}
		</Box>
	);
}
