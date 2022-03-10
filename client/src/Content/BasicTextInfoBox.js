import { Box, Divider, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function BasicTextInfoBox({
	textLeft,
	title,
	subTitle,
	textColor,
}) {
	const theme = useTheme();
	return (
		<Box
			sx={{
				display: "flex",
				flex: 1,
				flexDirection: "column",
				textAlign: textLeft ? "left" : "right",
			}}
		>
			<Typography
				sx={{
					fontSize: "calc(2.1rem + 1.5vw)",
					color: textColor,
					textShadow: `1.5px 1.5px 3px ${theme.palette.secondary.main}`,
				}}
			>
				{title}
			</Typography>
			{subTitle ? (
				<>
					<Divider
						variant="middle"
						flexItem
						sx={{
							backgroundColor: "secondary.main",
							height: "2px",
							width: "50%",
							marginLeft: textLeft ? "0%" : "50%",
						}}
					></Divider>
					<Typography
						sx={{
							fontSize: "calc(1.25rem + 0.5vw)",
							color: textColor,
							marginTop: "1%",
							textShadow: `1.5px 1.5px 3px ${theme.palette.secondary.main}`,
						}}
					>
						{subTitle}
					</Typography>
				</>
			) : (
				<></>
			)}
		</Box>
	);
}
