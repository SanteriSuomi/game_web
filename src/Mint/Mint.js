import { Box, Button, Center, Image, Text } from "@chakra-ui/react";
import "./Mint.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar";

const Moralis = require("moralis");

function Mint() {
	return (
		<div className="Mint">
			<Box className="MintBox">
				<Box className="InnerBox">
					<Center className="TitleCenter">
						<Text className="ButtonText">Slime Minting</Text>
					</Center>
					<Box className="Carousel">
						<Text>Preview</Text>
						<Carousel dynamicHeight={false}>
							<Box>
								<Image src="https://img.itch.zone/aW1hZ2UvMzUzMDI4LzE3NTk0MDIuZ2lm/347x500m/tMxJoF.gif"></Image>
								<Text className="legend">Slime 2</Text>
							</Box>
							<Box>
								<Image src="https://img.itch.zone/aW1hZ2UvMzUzMDI4LzE3NTk0MDIuZ2lm/347x500m/tMxJoF.gif"></Image>
								<Text className="legend">Slime 2</Text>
							</Box>
							<Box>
								<Image src="https://img.itch.zone/aW1hZ2UvMzUzMDI4LzE3NTk0MDIuZ2lm/347x500m/tMxJoF.gif"></Image>
								<Text className="legend">Slime 3</Text>
							</Box>
						</Carousel>
					</Box>
					<ProgressBar
						width={210}
						height={25}
						current={150}
						max={1000}
					></ProgressBar>
					<motion.div
						className="ButtonConnect"
						whileHover={{
							scale: 1.1,
						}}
					>
						<Button backgroundColor={"black"} textColor={"white"}>
							Connect
						</Button>
					</motion.div>
				</Box>
			</Box>
		</div>
	);
}

export default Mint;
