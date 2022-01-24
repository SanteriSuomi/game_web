import { Button, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import "./App.css";

function ButtonLink({ href, className, width, height, content }) {
	return (
		<motion.div
			whileHover={{
				scale: 1.1,
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
				>
					{content}
				</Button>
			</Link>
		</motion.div>
	);
}

export default ButtonLink;
