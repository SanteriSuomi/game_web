import {
	Box,
	Button,
	Center,
	Flex,
	Icon,
	Link,
	List,
	ListIcon,
	ListItem,
	SimpleGrid,
	Text,
	UnorderedList,
	Wrap,
} from "@chakra-ui/react";
import "@fontsource/bungee";
import "./App.css";
import { BsCheckSquare, BsDashSquare } from "react-icons/bs";
import { FaTelegram, FaRegCopyright } from "react-icons/fa";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import TokenChart from "./TokenChart";
import { useRef } from "react";
import { motion } from "framer-motion";
import NavBarLink from "./NavBarLink";
import ButtonLink from "./ButtonLink";

ChartJS.register(ArcElement, Tooltip, Legend);

function App() {
	const aboutRef = useRef(null);
	const tokenomicsRef = useRef(null);
	const roadmapRef = useRef(null);
	const executeScroll = (ref) => ref.current.scrollIntoView();

	const navbarMargin = "0.7%";

	return (
		<div className="App">
			<Box className="NavBox">
				<Flex direction="row" align="center" justify="center">
					<Center className="NavBoxTextTitleWrapItem">
						<Text className="NavBoxTextTitle">Slime Keeper</Text>
					</Center>
					<Box
						marginLeft={navbarMargin}
						marginRight={navbarMargin}
					></Box>
					<NavBarLink
						executeScroll={executeScroll}
						refe={aboutRef}
						text={"About"}
					></NavBarLink>
					<Box
						marginLeft={navbarMargin}
						marginRight={navbarMargin}
					></Box>
					<NavBarLink
						executeScroll={executeScroll}
						refe={tokenomicsRef}
						text={"Tokenomics"}
					></NavBarLink>
					<Box
						marginLeft={navbarMargin}
						marginRight={navbarMargin}
					></Box>
					<NavBarLink
						executeScroll={executeScroll}
						refe={roadmapRef}
						text={"Roadmap"}
					></NavBarLink>
					<Box
						marginLeft={navbarMargin}
						marginRight={navbarMargin}
					></Box>
					<NavBarLink
						text={"Whitepaper"}
						href={"/whitepaper"}
					></NavBarLink>
					<Box
						marginLeft={navbarMargin}
						marginRight={navbarMargin}
					></Box>
					<Box marginBottom={"2%"}>
						<ButtonLink
							href={"/app"}
							className={"LaunchAppButton"}
							text={"Launch Game"}
							width={"18vw"}
							height={"4vw"}
							align={false}
						></ButtonLink>
					</Box>
				</Flex>
			</Box>
			<Box className="AboutBox" ref={aboutRef}>
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
				<Center className="AboutBoxCenterFeatures">
					<Text className="AboutBoxTextTitleFeatures">Features</Text>
				</Center>
				<UnorderedList className="AboutBoxList">
					<ListItem className="AboutBoxListText">
						Lorem ipsum dolor sit amet
					</ListItem>
					<ListItem className="AboutBoxListText">
						Consectetur adipiscing elit
					</ListItem>
					<ListItem className="AboutBoxListText">
						Integer molestie lorem at massa
					</ListItem>
					<ListItem className="AboutBoxListText">
						Facilisis in pretium nisl aliquet
					</ListItem>
				</UnorderedList>
				<Center className="AboutBoxCenterImportant">
					<Text className="AboutBoxTextTitleImportant">
						Important Links
					</Text>
				</Center>
				<Wrap
					className="AboutImportantLinks"
					spacing={"1%"}
					shouldWrapChildren={true}
				>
					<ButtonLink
						href={"/contract"}
						className={"AboutImportantLinksText"}
						text={"Contract"}
						width={"13vw"}
						height={"3vw"}
					></ButtonLink>
					<ButtonLink
						href={"/audit"}
						className={"AboutImportantLinksText"}
						text={"Audit"}
						width={"8vw"}
						height={"3vw"}
					></ButtonLink>
					<ButtonLink
						href={"/liquiditylock"}
						className={"AboutImportantLinksText"}
						text={"Liquidity Lock"}
						width={"20vw"}
						height={"3vw"}
					></ButtonLink>
					<ButtonLink
						href={"/chart"}
						className={"AboutImportantLinksText"}
						text={"Chart"}
						width={"7vw"}
						height={"3vw"}
					></ButtonLink>
					<ButtonLink
						href={"/presale"}
						className={"AboutImportantLinksText"}
						text={"Presale"}
						width={"12vw"}
						height={"3vw"}
					></ButtonLink>
					<motion.Box
						whileHover={{
							scale: 1.01,
						}}
						style={{
							textDecoration: "none",
						}}
					>
						<Link
							className="AboutImportantLinksText"
							href="https://t.me/raritoken"
						>
							<Button
								border="1px"
								borderColor="black.500"
								width={"1vw"}
								height={"3vw"}
								marginTop={"7.5%"}
							>
								<Icon
									as={FaTelegram}
									color="black.500"
									w={"2.5vw"}
									h={"2.5vw"}
								></Icon>
							</Button>
						</Link>
					</motion.Box>
				</Wrap>
			</Box>
			<Box className="TokenomicsBox" ref={tokenomicsRef}>
				<Center className="TokenomicsBoxTextCenter">
					<Text className="TokenomicsBoxTextTitle">Tokenomics</Text>
				</Center>
				<SimpleGrid columns={2}>
					<Box>
						<Center className="TokenomicsBoxTextCenterTaxes">
							<Text className="TokenomicsBoxTextTitleTaxes">
								Taxes
							</Text>
						</Center>
						<TokenChart
							labels={[
								"Game Rewards",
								"Marketing",
								"Development",
								"Liquidity",
							]}
							data={[3, 2, 2, 2]}
						></TokenChart>
					</Box>
					<Box>
						<Center className="TokenomicsBoxTextCenterDistribution">
							<Text className="TokenomicsBoxTextTitleDistribution">
								Distribution
							</Text>
						</Center>
						<TokenChart
							labels={[
								"Presale",
								"Game Rewards",
								"Reserved",
								"Team",
							]}
							data={[30, 50, 10, 10]}
						></TokenChart>
					</Box>
				</SimpleGrid>
			</Box>
			<Box className="RoadmapBox" ref={roadmapRef}>
				<Center className="RoadmapBoxTextCenter">
					<Text className="RoadmapBoxTextTitle">Roadmap</Text>
				</Center>
				<Box className="RoadmapBoxBox">
					<Center className="RoadmapBoxBoxTextCenter">
						<Text className="RoadmapBoxBoxTextTitle">Phase 1</Text>
					</Center>
					<List spacing={3} className="RoadMapBoxBoxList">
						<ListItem className="RoadmapBoxBoxItem">
							<Box display="flex" align="center" justify="center">
								<ListIcon
									as={BsCheckSquare}
									color="green.500"
								/>
								<Text>
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit
								</Text>
							</Box>
						</ListItem>
						<ListItem className="RoadmapBoxBoxItem">
							<Box display="flex" align="center" justify="center">
								<ListIcon
									as={BsCheckSquare}
									color="green.500"
								/>
								<Text>
									Assumenda, quia temporibus eveniet a libero
									incidunt suscipit
								</Text>
							</Box>
						</ListItem>
						<ListItem className="RoadmapBoxBoxItem">
							<Box display="flex" align="center" justify="center">
								<ListIcon as={BsDashSquare} color="red.500" />

								<Text>
									Quidem, ipsam illum quis sed voluptatum quae
									eum fugit earum
								</Text>
							</Box>
						</ListItem>
					</List>
					<Center className="RoadmapBoxBoxTextCenter">
						<Text className="RoadmapBoxBoxTextTitle">Phase 2</Text>
					</Center>
					<List spacing={3}>
						<ListItem className="RoadmapBoxBoxItem">
							<Box display="flex" align="center" justify="center">
								<ListIcon as={BsDashSquare} color="red.500" />
								<Text>
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit
								</Text>
							</Box>
						</ListItem>
						<ListItem className="RoadmapBoxBoxItem">
							<Box display="flex" align="center" justify="center">
								<ListIcon as={BsDashSquare} color="red.500" />
								<Text>
									Assumenda, quia temporibus eveniet a libero
									incidunt suscipit
								</Text>
							</Box>
						</ListItem>
						<ListItem className="RoadmapBoxBoxItem">
							<Box display="flex" align="center" justify="center">
								<ListIcon as={BsDashSquare} color="red.500" />
								<Text>
									Quidem, ipsam illum quis sed voluptatum quae
									eum fugit earum
								</Text>
							</Box>
						</ListItem>
					</List>
				</Box>
			</Box>
			<Box className="FooterBox" display="flex">
				<Box
					className="FooterDevBox"
					display="flex"
					align="center"
					justify="center"
				>
					<Icon
						className="FooterDevBoxIcon"
						as={FaRegCopyright}
						color="black"
						w={"3.5vw"}
						h={"3.5vw"}
					/>
					<Text className="FooterDevBoxText">
						Slime Keeper Team 2022
					</Text>
				</Box>
			</Box>
		</div>
	);
}

export default App;
