import { Typography } from "@mui/material";
import TextContentBox from "../TextContentBox";

export default function About() {
	return (
		<>
			<TextContentBox
				title={"Features"}
				body={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.`}
				content={<Typography>KEK</Typography>}
			></TextContentBox>
		</>
	);
}