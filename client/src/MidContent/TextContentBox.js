import { Divider, Typography } from "@mui/material";
import ContentBox from "./ContentBox";

export default function TextContentBox({ title, body, content }) {
	return (
		<ContentBox
			content={
				<>
					<Typography
						sx={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "center",
							fontSize: "calc(1.3rem + 0.7vw)",
						}}
					>
						{title}
					</Typography>
					<Divider
						variant="middle"
						sx={{
							backgroundColor: "secondary.main",
						}}
						flexItem
					></Divider>
					<Typography
						sx={{
							fontSize: "calc(0.775rem + 0.5vw)",
						}}
					>
						{body}
					</Typography>
					{content}
				</>
			}
		></ContentBox>
	);
}
