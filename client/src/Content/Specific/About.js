import { Box } from "@mui/system";
import ContentContainer from "../ContentContainer";
import ImageBox from "../ImageBox";
import TextContentBox from "../TextContentBox";

export default function About() {
	return (
		<ContentContainer
			content={
				<>
					<TextContentBox
						title={"About"}
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
							backgroundColor: "primary.main",
							border: "secondary.main",
							textColor: "text.primary",
						}}
					></TextContentBox>
					<ImageBox source="https://loremflickr.com/1000/600/game"></ImageBox>
				</>
			}
			backgroundColor={"tertiary.main"}
		></ContentContainer>
	);
}
