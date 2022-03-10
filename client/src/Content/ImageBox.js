import { Box } from "@mui/system";

export default function ImageBox({ source, flex }) {
	return (
		<Box
			sx={{
				flex: 2,
				overflow: "hidden",
				borderRadius: "5%",
			}}
		>
			<img width="100%" height="auto" src={source} alt="art"></img>
		</Box>
	);
}
