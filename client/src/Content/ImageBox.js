import { Box } from "@mui/system";

export default function ImageBox({ source }) {
	return (
		<Box
			sx={{
				flex: 1.5,
				overflow: "hidden",
				borderRadius: "5%",
			}}
		>
			<img width="100%" height="auto" src={source} alt="art"></img>
		</Box>
	);
}
