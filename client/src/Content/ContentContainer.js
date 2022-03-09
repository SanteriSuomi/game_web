import { Box } from "@mui/material";

export default function ContentContainer({ content, backgroundColor }) {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: { xs: "column", md: "row" },
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: backgroundColor,
				padding: "4%",
				gap: "22px 22px",
			}}
		>
			{content}
		</Box>
	);
}
