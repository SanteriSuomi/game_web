import ContentContainer from "../ContentContainer";
import BasicInfoBox from "../BasicInfoBox";
import ImageBox from "../ImageBox";

export default function Intro() {
	return (
		<ContentContainer backgroundColor={"tertiary.main"}>
			<BasicInfoBox
				textLeft={true}
				title="En Garde"
				subTitle={"Sustainable Node GameFi"}
				textColor={"text.secondary"}
			>
				<ImageBox source="https://loremflickr.com/1000/600/game"></ImageBox>
			</BasicInfoBox>
		</ContentContainer>
	);
}
