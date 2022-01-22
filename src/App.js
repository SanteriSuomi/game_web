import { Box, Center, Link, Text, Wrap, WrapItem } from "@chakra-ui/react";
import "@fontsource/bungee";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Box className="NavBox">
				<Wrap
					className="NavBoxWrap"
					spacing="3.5%"
					justify="center"
					align="center"
				>
					<WrapItem>
						<Center className="NavBoxTextTitleBox">
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
				</Wrap>
			</Box>
		</div>
	);
}

export default App;
