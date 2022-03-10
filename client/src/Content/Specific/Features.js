import ContentContainer from "../ContentContainer";
import BasicInfoBox from "../BasicInfoBox";
import ImageBox from "../ImageBox";

export default function Features() {
	return (
		<ContentContainer
			content={
				<BasicInfoBox
					textLeft={true}
					content={
						<ImageBox source="https://loremflickr.com/1000/600/game"></ImageBox>
					}
					title="Features"
					subTitle={"What's our utility?"}
					textColor={"text.secondary"}
				></BasicInfoBox>
			}
			backgroundColor={"tertiary.main"}
		></ContentContainer>
	);
}
