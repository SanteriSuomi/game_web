import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const style = {
	flex: 1,
	fontSize: "calc(2.3rem + 1.3vw)",
	color: "secondary.main",
};

export default function ActivationButton({ open, toggleSidebar }) {
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
