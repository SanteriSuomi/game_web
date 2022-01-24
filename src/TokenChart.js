import { Box } from "@chakra-ui/react";
import { Doughnut } from "react-chartjs-2";

function TokenChart({ labels, data }) {
	return (
		<Box
			width={"90%"}
			marginLeft={"auto"}
			marginRight={"auto"}
			marginTop={"2%"}
		>
			<Doughnut
				options={{
					plugins: {
						legend: {
							display: false,
						},
					},
				}}
				data={{
					labels: labels,
					datasets: [
						{
							label: "Token Distribution %",
							data: data,
							backgroundColor: [
								"rgba(0, 0, 0, 0.6)",
								"rgba(0, 0, 0, 0.6)",
								"rgba(0, 0, 0, 0.6)",
								"rgba(0, 0, 0, 0.6)",
							],
							borderColor: [
								"rgba(255, 99, 132, 1)",
								"rgba(54, 162, 235, 1)",
								"rgba(255, 206, 86, 1)",
								"rgba(75, 192, 192, 1)",
							],
							borderWidth: 2,
							hoverOffset: 4,
						},
					],
				}}
			></Doughnut>
		</Box>
	);
}

export default TokenChart;
