import { Box } from "@mui/system";

export default function ImageBox({ source }) {
	return (
		<Box
			sx={{
				flex: 1.5,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "primary.main",
				padding: "0.5%",
				borderRadius: "4%",
				border: 1.5,
				borderColor: "secondary.main",
			}}
		>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					overflow: "hidden",
					borderRadius: "4%",
				}}
			>
				<img width="100%" height="auto" src={source} alt="art"></img>
			</Box>
		</Box>
	);
}
