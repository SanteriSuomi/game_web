import { Box } from "@mui/material";
import ContentContainer from "../ContentContainer";
import TextContentBox from "../TextContentBox";

export default function Features() {
	return (
		<ContentContainer
			content={
				<>
					<Box flex={1}>
						<img
							width={"100%"}
							height={"auto"}
							src="https://loremflickr.com/1000/600/game"
							alt="art"
						></img>
					</Box>

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
						palette={{
							divider: "secondary.main",
							backgroundColor: "tertiary.main",
							border: "secondary.main",
							textColor: "text.secondary",
						}}
					></TextContentBox>
				</>
			}
			backgroundColor={"primary.main"}
		></ContentContainer>
	);
}
