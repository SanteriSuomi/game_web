import { useTheme } from "@emotion/react";
import { Box, Divider, Typography } from "@mui/material";
import ContentContainer from "../ContentContainer";
import ImageBox from "../ImageBox";

export default function Intro() {
	const theme = useTheme();
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
								color: "text.secondary",
								textShadow: `2px 2px 3.5px ${theme.palette.secondary.main}`,
							}}
						>
							En Garde
						</Typography>
						<Divider
							variant="middle"
							flexItem
							sx={{
								backgroundColor: "secondary.main",
								height: "2px",
								width: "65%",
								marginLeft: "0%",
							}}
						></Divider>
						<Typography
							sx={{
								fontSize: "calc(1.25rem + 0.5vw)",
								color: "text.secondary",
								marginTop: "1%",
								textShadow: `2px 2px 3px ${theme.palette.secondary.main}`,
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
			backgroundColor={"tertiary.main"}
		></ContentContainer>
	);
}
