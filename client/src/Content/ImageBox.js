import { Box } from "@mui/system";

export default function ImageBox({ source }) {
	return (
		<Box
			sx={{
				flex: 1,
				overflow: "hidden",
				borderRadius: "2%",
			}}
		>
			<img width="100%" height="auto" src={source} alt="art"></img>
		</Box>
	);
}
