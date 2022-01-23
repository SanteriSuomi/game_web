import { Link, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import "./App.css";

function NavBarLink({ executeScroll, refe, text, href }) {
	return (
		<motion.Box
			whileHover={{
				scale: 1.02,
			}}
		>
			<Link
				onClick={() => {
					executeScroll(refe);
				}}
				href={href}
				style={{ textDecoration: "none" }}
			>
				<Text className="NavBoxText">{text}</Text>
			</Link>
		</motion.Box>
	);
}

export default NavBarLink;
