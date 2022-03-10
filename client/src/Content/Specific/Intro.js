import ContentContainer from "../ContentContainer";
import BasicInfoBox from "../BasicInfoBox";
import ImageBox from "../ImageBox";

export default function Intro() {
	return (
		<ContentContainer
			content={
				<BasicInfoBox
					textLeft={true}
					content={
						<ImageBox source="https://loremflickr.com/1000/600/game"></ImageBox>
					}
					title="En Garde"
					subTitle={"Sustainable Node GameFi"}
					textColor={"text.secondary"}
				></BasicInfoBox>
			}
			backgroundColor={"tertiary.main"}
		></ContentContainer>
	);
}
