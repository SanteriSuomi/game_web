import { Text } from "@chakra-ui/react";

function ProgressBar({ current, max }) {
	let mult = 210 / max;
	return (
		<div>
			<Text>{`Minted: ${current}/${max}`}</Text>
			<Text>{`Price: 0.1 BNB`}</Text>
			<div
				className="BarRoot"
				style={{
					width: "210px",
					height: "25px",
					backgroundColor: "black",
				}}
			>
				<div
					className="Bar"
					style={{
						width: current * mult,
						height: "25px",
						backgroundColor: "green",
					}}
				></div>
			</div>
		</div>
	);
}

export default ProgressBar;
