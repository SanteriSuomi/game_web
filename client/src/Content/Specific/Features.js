import ContentContainer from "../ContentContainer";
import BasicInfoBox from "../BasicInfoBox";
import { Divider, Stack } from "@mui/material";
import FeaturesItem from "../FeaturesItem";

export default function Features({ theme }) {
	return (
		<ContentContainer
			backgroundColor={theme.palette.tertiary.main}
			theme={theme}
		>
			<BasicInfoBox
				textLeft={true}
				title="Features"
				subTitle={"What's our utility?"}
				textColor={"text.secondary"}
				gap={{ xs: 5, md: 0 }}
			>
				<Stack
					direction="column"
					flex={1}
					spacing={2}
					divider={
						<Divider
							orientation="horizontal"
							height="1px"
							sx={{
								backgroundColor: "primary.main",
								maxWidth: "400px",
							}}
						></Divider>
					}
				>
					<FeaturesItem text="Passive Income NFTs"></FeaturesItem>
					<FeaturesItem text="P2E NFT Game"></FeaturesItem>
					<FeaturesItem text="Low Tax Token"></FeaturesItem>
					<FeaturesItem text="Focus On Sustainability"></FeaturesItem>
				</Stack>
			</BasicInfoBox>
		</ContentContainer>
	);
}
