import { Button, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import "./App.css";

function ButtonLink({ text, href, className, width, height }) {
	return (
		<motion.Box
			whileHover={{
				scale: 1.015,
			}}
		>
			<Link href={href} style={{ textDecoration: "none" }}>
				<Button
					className={className}
					border="1px"
					borderColor="black.500"
					fontSize={"1.25vw"}
					width={width}
					height={height}
				>
					{text}
				</Button>
			</Link>
		</motion.Box>
	);
}

export default ButtonLink;
