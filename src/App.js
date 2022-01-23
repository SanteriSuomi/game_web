import {
	Box,
	Button,
	Center,
	Link,
	Text,
	Wrap,
	WrapItem,
} from "@chakra-ui/react";
import "@fontsource/bungee";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Box className="NavBox">
				<Wrap align="center" justify="center" spacing="4%">
					<WrapItem className="NavBoxTextTitleWrapItem">
						<Center>
							<Text className="NavBoxTextTitle">
								Slime Keeper
							</Text>
						</Center>
					</WrapItem>
					<WrapItem>
						<Link href="/features">
							<Text className="NavBoxText">About</Text>
						</Link>
					</WrapItem>
					<WrapItem>
						<Link href="/tokenomics">
							<Text className="NavBoxText">Tokenomics</Text>
						</Link>
					</WrapItem>
					<WrapItem>
						<Link href="/team">
							<Text className="NavBoxText">Team</Text>
						</Link>
					</WrapItem>
					<WrapItem>
						<Link href="/whitepaper">
							<Text className="NavBoxText">Whitepaper</Text>
						</Link>
					</WrapItem>
					<WrapItem>
						<Center>
							<Link>
								<Button className="LaunchAppButton">
									Launch App
								</Button>
							</Link>
						</Center>
					</WrapItem>
				</Wrap>
			</Box>
			<Box className="AboutBox">
				<Center className="AboutBoxTextCenter">
					<Text className="AboutBoxTextTitle">About</Text>
				</Center>
				<Text className="AboutBoxText">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Maxime mollitia, molestiae quas vel sint commodi repudiandae
					consequuntur voluptatum laborum numquam blanditiis harum
					quisquam eius sed odit fugiat iusto fuga praesentium optio,
					eaque rerum! Provident similique accusantium nemo autem.
					Veritatis obcaecati tenetur iure eius earum ut molestias
					architecto voluptate aliquam nihil, eveniet aliquid culpa
					officia aut! Impedit sit sunt quaerat, odit, tenetur error,
					harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
					quia. Quo neque error repudiandae fuga? Ipsa laudantium
					molestias eos sapiente officiis modi at sunt excepturi
					expedita sint? Sed quibusdam recusandae alias error harum
					maxime adipisci amet laborum. Perspiciatis minima nesciunt
					dolorem! Officiis iure rerum voluptates a cumque velit{" "}
				</Text>
			</Box>
		</div>
	);
}

export default App;
