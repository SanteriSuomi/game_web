import ContentContainer from "../ContentContainer";
import BasicInfoBox from "../BasicInfoBox";
import ImageBox from "../ImageBox";

export default function Intro({ theme }) {
	return (
		<ContentContainer
			backgroundColor={theme.palette.tertiary.main}
			theme={theme}
		>
			<BasicInfoBox
				textLeft={true}
				title="En Garde"
				subTitle={"Sustainable Node GameFi"}
				textColor={"text.secondary"}
			>
				<ImageBox source="https://loremflickr.com/1500/900/game"></ImageBox>
			</BasicInfoBox>
		</ContentContainer>
	);
}
