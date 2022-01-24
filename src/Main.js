import {
	Box,
	Center,
	Flex,
	Icon,
	List,
	ListIcon,
	ListItem,
	SimpleGrid,
	Text,
	UnorderedList,
	Wrap,
} from "@chakra-ui/react";
import "@fontsource/bungee";
import "./Main.css";
import { BsCheckSquare, BsDashSquare } from "react-icons/bs";
import { FaRegCopyright, FaTelegram } from "react-icons/fa";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import TokenChart from "./TokenChart";
import { useRef } from "react";
import NavBarLink from "./NavBarLink";
import ButtonLink from "./ButtonLink";

ChartJS.register(ArcElement, Tooltip, Legend);

function Main() {
	const aboutRef = useRef(null);
	const tokenomicsRef = useRef(null);
	const roadmapRef = useRef(null);
	const executeScroll = (ref) => ref.current.scrollIntoView();

	return (
		<div className="App">
			<Box className="NavBox">
				<Flex direction="row" align="center" justify="center">
					<Center className="NavBoxTextTitleWrapItem">
						<Text className="NavBoxTextTitle">Slime Keeper</Text>
					</Center>
					<Box className="NavBarDivider"></Box>
					<NavBarLink
						executeScroll={executeScroll}
						refe={aboutRef}
						text={"About"}
					></NavBarLink>
					<Box className="NavBarDivider"></Box>
					<NavBarLink
						executeScroll={executeScroll}
						refe={tokenomicsRef}
						text={"Tokenomics"}
					></NavBarLink>
					<Box className="NavBarDivider"></Box>
					<NavBarLink
						executeScroll={executeScroll}
						refe={roadmapRef}
						text={"Roadmap"}
					></NavBarLink>
					<Box className="NavBarDivider"></Box>
					<NavBarLink
						text={"Whitepaper"}
						href={"/whitepaper"}
					></NavBarLink>
					<Box className="NavBarDivider"></Box>
					<ButtonLink
						href={"/app"}
						className={"LaunchAppButton"}
						width={"14vw"}
						height={"4.25vw"}
						content={<Text>{"Launch Game"}</Text>}
					></ButtonLink>
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
				<Wrap spacing={"1%"} shouldWrapChildren={true} align={"center"}>
					<ButtonLink
						href={"/contract"}
						className={"AboutImportantLinksText"}
						width={"13vw"}
						height={"3vw"}
						content={<Text>{"Contract"}</Text>}
					></ButtonLink>
					<ButtonLink
						href={"/audit"}
						className={"AboutImportantLinksText"}
						width={"8vw"}
						height={"3vw"}
						content={<Text>{"Audit"}</Text>}
					></ButtonLink>
					<ButtonLink
						href={"/liquiditylock"}
						className={"AboutImportantLinksText"}
						width={"20vw"}
						height={"3vw"}
						content={<Text>{"Liquidity Lock"}</Text>}
					></ButtonLink>
					<ButtonLink
						href={"/chart"}
						className={"AboutImportantLinksText"}
						text={"Chart"}
						width={"7.5vw"}
						height={"3vw"}
						content={<Text>{"Chart"}</Text>}
					></ButtonLink>
					<ButtonLink
						href={"/presale"}
						className={"AboutImportantLinksText"}
						width={"12vw"}
						height={"3vw"}
						content={<Text>{"Presale"}</Text>}
					></ButtonLink>
					<ButtonLink
						href={"https://t.me/raritoken"}
						className={"AboutImportantLinksText"}
						width={"2vw"}
						height={"3vw"}
						content={<Icon as={FaTelegram} boxSize="1.25em"></Icon>}
					></ButtonLink>
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
				<Box className="FooterDevBox" display="flex">
					<Icon
						className="FooterDevBoxIcon"
						as={FaRegCopyright}
						color="black"
						boxSize="2.5em"
					/>
					<Text className="FooterDevBoxText">
						Slime Keeper Team 2022
					</Text>
				</Box>
			</Box>
		</div>
	);
}

export default Main;
