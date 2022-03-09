import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ContentBox from "./ContentBox";

export default function TextContentBox({ title, body, content, palette }) {
	return (
		<ContentBox
			content={
				<>
					<Typography
						sx={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "center",
							fontSize: "calc(1.3rem + 0.75vw)",
							color: palette.textColor,
						}}
					>
						{title}
					</Typography>
					<Box marginTop={"1.5%"}></Box>
					<Divider
						variant="middle"
						sx={{
							backgroundColor: palette.divider,
							height: "2px",
						}}
						flexItem
					></Divider>
					<Box marginTop={"3.5%"}></Box>
					<Typography
						sx={{
							fontSize: "calc(0.775rem + 0.55vw)",
							color: palette.textColor,
						}}
					>
						{body}
					</Typography>
					{content}
				</>
			}
			palette={palette}
		></ContentBox>
	);
}
