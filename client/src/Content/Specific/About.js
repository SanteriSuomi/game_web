import ContentContainer from "../ContentContainer";
import BasicInfoBox from "../BasicInfoBox";
import { Typography } from "@mui/material";

export default function About({ theme }) {
	return (
		<ContentContainer
			backgroundColor={theme.palette.primary.main}
			theme={theme}
		>
			<BasicInfoBox
				textLeft={false}
				title="About"
				subTitle={"What is it all about?"}
				textColor={"text.primary"}
				gap={{ xs: 5, md: 0 }}
			>
				<Typography
					sx={{
						flex: 1,
						fontSize: "calc(0.9rem + 0.6vw)",
						marginTop: { xs: 10, md: 0 },
					}}
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.
				</Typography>
			</BasicInfoBox>
		</ContentContainer>
	);
}
