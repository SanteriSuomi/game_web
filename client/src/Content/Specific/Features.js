import ContentContainer from "../ContentContainer";
import BasicInfoBox from "../BasicInfoBox";
import ImageBox from "../ImageBox";

export default function Features() {
	return (
		<ContentContainer backgroundColor={"tertiary.main"}>
			<BasicInfoBox
				textLeft={true}
				title="Features"
				subTitle={"What's our utility?"}
				textColor={"text.secondary"}
			>
				<ImageBox source="https://loremflickr.com/1000/600/game"></ImageBox>
			</BasicInfoBox>
		</ContentContainer>
	);
}
