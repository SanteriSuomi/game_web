import { Box } from "@mui/material";
import BasicTextInfoBox from "./BasicTextInfoBox";

export default function BasicInfoBox({
	children,
	textLeft,
	title,
	subTitle,
	textColor,
	gap,
}) {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				flexDirection: { xs: "column", md: "row" },
				width: "90%",
				rowGap: gap ? gap : { xs: 5, sm: 3 },
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
					{children}
				</>
			) : (
				<>
					{children}
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
