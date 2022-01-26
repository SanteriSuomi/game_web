import { Box, Button, Center, Image, Text } from "@chakra-ui/react";
import "./Mint.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar";

const Moralis = require("moralis");
const serverUrl = "https://5ywwhrwyqbuo.usemoralis.com:2053/server";
const appId = "HHiRwV2oHbmzWn3esARISFxrxOEzO3OfOISfmLeAD";
Moralis.start({ serverUrl, appId });

function Mint() {
	let user = Moralis.User.current();

	async function login() {
		if (!user) {
			user = await Moralis.authenticate({ provider: "walletconnect" })
				.then((u) => {
					console.log(u);
					console.log(u.get("ethAddress"));
				})
				.catch((err) => console.error(err));
		}
	}

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
						<Button
							backgroundColor={"black"}
							textColor={"white"}
							onClick={() => {
								login();
							}}
						>
							Connect
						</Button>
					</motion.div>
				</Box>
			</Box>
		</div>
	);
}

export default Mint;
