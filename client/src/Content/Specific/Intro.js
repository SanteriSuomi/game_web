import { Box, Typography } from "@mui/material";
import ContentContainer from "../ContentContainer";
import ImageBox from "../ImageBox";

export default function Intro() {
	return (
		<ContentContainer
			content={
				<Box
					sx={{
						display: "flex",
						flexDirection: { xs: "column", md: "row" },
						justifyContent: "center",
						width: "90%",
						rowGap: { xs: 5, sm: 0 },
						marginBottom: { xs: 12, sm: 0 },
					}}
				>
					<Box
						sx={{
							flex: 1,
							display: "flex",
							flexDirection: "column",
						}}
					>
						<Typography
							sx={{
								fontSize: "calc(2.1rem + 1.5vw)",
							}}
						>
							En Garde
						</Typography>
						<Typography
							sx={{
								fontSize: "calc(1.25rem + 0.5vw)",
								color: "secondary.main",
							}}
						>
							Sustainable Node GameFi
						</Typography>
					</Box>
					<ImageBox
						source="https://loremflickr.com/1000/600/game"
						flex={2}
					></ImageBox>
				</Box>
			}
			backgroundColor={"primary.main"}
		></ContentContainer>
	);
}
