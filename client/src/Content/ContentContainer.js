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
				padding: "3.5%",
				gap: "22px 25px",
			}}
		>
			{content}
		</Box>
	);
}
