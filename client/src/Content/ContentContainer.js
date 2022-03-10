import { Box } from "@mui/material";
import { useLayoutEffect, useState } from "react";
import { NavBarBoxRef } from "../NavBar/NavBar";

export default function ContentContainer({ content, backgroundColor }) {
	const [windowHeight, setWindowHeight] = useState(window.innerHeight);
	const [boxHeight, setBoxHeight] = useState(0);

	useLayoutEffect(() => {
		function update() {
			setWindowHeight(window.innerHeight);
			setBoxHeight(windowHeight - NavBarBoxRef.offsetHeight);
		}
		window.addEventListener("resize", () => {
			setTimeout(update, 100);
		});
		setBoxHeight(windowHeight - NavBarBoxRef.offsetHeight);
	}, [windowHeight]);

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: { xs: "column", md: "row" },
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: backgroundColor,
				padding: "3%",
				height: boxHeight,
				border: 1.5,
				borderColor: "secondary.main",
				scrollSnapAlign: "center",
			}}
		>
			{content}
		</Box>
	);
}
