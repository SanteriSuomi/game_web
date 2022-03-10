import { Box } from "@mui/system";

export default function ImageBox({ source, flex }) {
	return (
		<Box
			sx={{
				flex: flex === undefined ? 1 : flex,
				overflow: "hidden",
				borderRadius: "2%",
			}}
		>
			<img width="100%" height="auto" src={source} alt="art"></img>
		</Box>
	);
}
