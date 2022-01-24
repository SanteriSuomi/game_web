import { Link, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import "./Main.css";

function NavBarLink({ executeScroll, refe, text, href }) {
	return (
		<motion.div
			whileHover={{
				scale: 1.1,
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
		</motion.div>
	);
}

export default NavBarLink;
