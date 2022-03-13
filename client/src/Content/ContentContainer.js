import { Box } from "@mui/material";
import { useState, useLayoutEffect } from "react";
import useOnResize from "../Hooks/useOnResize";
import { NavBarBoxRef } from "../NavBar/NavBar";

export default function ContentContainer({ children, backgroundColor, theme }) {
	const [boxHeight, setBoxHeight] = useState(0);

	useLayoutEffect(() => {
		setBoxHeight(window.innerHeight - NavBarBoxRef.offsetHeight);
	}, []);

	useOnResize(() => {
		setBoxHeight(window.innerHeight - NavBarBoxRef.offsetHeight);
	});

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: { xs: "column", md: "row" },
				alignItems: "center",
				justifyContent: "center",
				backgroundImage:
					backgroundColor === theme.palette.tertiary.main
						? `linear-gradient(270deg, ${theme.palette.primary.main} 0%, ${backgroundColor} 30%)`
						: `linear-gradient(270deg, ${backgroundColor} 70%, ${theme.palette.secondary.main} 100%)`,
				padding: "3%",
				height: boxHeight,
				border: 1.5,
				borderColor: "secondary.main",
				scrollSnapAlign: "center",
			}}
		>
			{children}
		</Box>
	);
}
