import { Box } from "@mui/material";
import BasicTextInfoBox from "./BasicTextInfoBox";

export default function BasicInfoBox({
	textLeft,
	content,
	title,
	subTitle,
	textColor,
}) {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: { xs: "column", md: "row" },
				width: "90%",
				rowGap: { xs: 5, sm: 0 },
				marginBottom: { xs: 12, sm: 0 },
			}}
		>
			{textLeft ? (
				<>
					<BasicTextInfoBox
						textLeft={textLeft}
						title={title}
						subTitle={subTitle}
						textColor={textColor}
					></BasicTextInfoBox>
					{content}
				</>
			) : (
				<>
					{content}
					<BasicTextInfoBox
						textLeft={textLeft}
						title={title}
						subTitle={subTitle}
						textColor={textColor}
					></BasicTextInfoBox>
				</>
			)}
		</Box>
	);
}
