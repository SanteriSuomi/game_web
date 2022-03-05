import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function ActivationButton({ open, toggleSidebar }) {
	return (
		<Button onClick={toggleSidebar}>
			{open ? (
				<CloseIcon
					sx={{
						flex: 1,
						fontSize: "2.75rem",
						color: "secondary.main",
					}}
				></CloseIcon>
			) : (
				<MenuIcon
					sx={{
						flex: 1,
						fontSize: "2.75rem",
						color: "secondary.main",
					}}
				></MenuIcon>
			)}
		</Button>
	);
}
