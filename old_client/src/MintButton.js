import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import "./Mint.css";

const MintButton = React.forwardRef(
	({ open, onClickEvent, content, ...props }, ref) => (
		<motion.div
			{...props}
			whileHover={{
				scale: 1.1,
			}}
		>
			<Button
				ref={ref}
				backgroundColor={"black"}
				textColor={"white"}
				onClick={onClickEvent}
			>
				{content}
			</Button>
		</motion.div>
	)
);

export default MintButton;
