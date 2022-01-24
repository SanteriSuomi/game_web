import { Button, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import "./App.css";

function ButtonLink({ text, href, className, width, height, align }) {
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
					fontSize={"2vw"}
					width={width}
					height={height}
					verticalAlign={align ? "center" : ""}
				>
					{text}
				</Button>
			</Link>
		</motion.Box>
	);
}

export default ButtonLink;
