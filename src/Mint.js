import {
	Box,
	Center,
	Image,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	Text,
} from "@chakra-ui/react";
import "./Mint.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ProgressBar from "./ProgressBar";
import Popup from "reactjs-popup";
import MintButton from "./MintButton.js";
import { useState } from "react";

const Moralis = require("moralis");
const serverUrl = process.env.REACT_APP_SERVER_URL_LOCAL;
const appId = process.env.REACT_APP_APP_ID_LOCAL;
Moralis.start({ serverUrl, appId });

function Mint() {
	const [user, setUser] = useState(Moralis.User.current());
	const [amount, setAmount] = useState(0);

	async function connect(metamask) {
		if (metamask) {
			await Moralis.authenticate()
				.then((u) => {
					setUser(u);
				})
				.catch((e) => console.log(e));
		} else {
			await Moralis.authenticate({ provider: "walletconnect" })
				.then((u) => {
					setUser(u);
				})
				.catch((e) => console.log(e));
		}
	}

	async function disconnect() {
		await Moralis.User.logOut().then(() => {
			setUser(Moralis.User.current());
		});
	}

	async function mint() {
		console.log(amount);
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
					{user ? (
						<Box className="MintingBox">
							<Box h={1}></Box>
							<NumberInput
								w={65}
								defaultValue={1}
								min={1}
								max={10}
								onChange={(val) => setAmount(parseInt(val))}
							>
								<NumberInputField />
								<NumberInputStepper>
									<NumberIncrementStepper />
									<NumberDecrementStepper />
								</NumberInputStepper>
							</NumberInput>
							<Box h={1}></Box>
							<Box className="MintingBoxButtons">
								<MintButton
									content={"Mint"}
									onClickEvent={mint}
								></MintButton>
								<Box w={1}></Box>
								<MintButton
									content={"Disconnect"}
									onClickEvent={disconnect}
								></MintButton>
							</Box>
						</Box>
					) : (
						<Popup
							position={"center center"}
							closeOnDocumentClick={true}
							trigger={(open) => (
								<MintButton
									style={{ marginBottom: "4%" }}
									content={"Connect"}
									open={open}
								></MintButton>
							)}
						>
							<Center className="PopupContent">
								<MintButton
									content={"MetaMask"}
									onClickEvent={() => connect(true)}
								></MintButton>
								<Box width={1}></Box>
								<MintButton
									content={"WalleConnect"}
									onClickEvent={() => connect(false)}
								></MintButton>
							</Center>
						</Popup>
					)}
				</Box>
			</Box>
		</div>
	);
}

export default Mint;
