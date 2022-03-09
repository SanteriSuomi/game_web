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
							fontSize: "calc(1.25rem + 0.7vw)",
							color: palette.textColor,
						}}
					>
						{title}
					</Typography>
					<Box marginTop={"1.75%"}></Box>
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
							fontSize: "calc(0.75rem + 0.5vw)",
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
