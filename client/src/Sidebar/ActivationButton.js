import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function ActivationButton({ open, toggleSidebar }) {
	let style = {
		flex: 1,
		fontSize: "2.75rem",
		color: "secondary.main",
	};
	return (
		<Button onClick={toggleSidebar}>
			{open ? (
				<CloseIcon sx={style}></CloseIcon>
			) : (
				<MenuIcon sx={style}></MenuIcon>
			)}
		</Button>
	);
}
