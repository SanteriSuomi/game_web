import ContentContainer from "../ContentContainer";
import BasicInfoBox from "../BasicInfoBox";
import ImageBox from "../ImageBox";

export default function About() {
	return (
		<ContentContainer
			content={
				<BasicInfoBox
					textLeft={false}
					content={
						<ImageBox source="https://loremflickr.com/1000/600/game"></ImageBox>
					}
					title="About"
					subTitle={"What is it all about?"}
					textColor={"text.primary"}
				></BasicInfoBox>
			}
			backgroundColor={"primary.main"}
		></ContentContainer>
	);
}
