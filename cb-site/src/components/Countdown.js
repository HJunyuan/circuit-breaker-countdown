import React from "react";
import { ProgressBar } from "react-bootstrap";

const styles = {
	root: {
		color: "white",
		fontSize: "40px",
	},
	header: {
		fontWeight: "bold",
		fontSize: "28px",
	},
	underline: {
		textDecoration: "underline",
		fontWeight: "bold",
	},
	progressBarWrapper: {
		position: "relative",
	},
	progressBar: {
		maxWidth: "480px",
		height: "40px",
		margin: "20px auto",
		borderRadius: "20px",
	},
	progressBarText: {
		position: "absolute",
		left: "0",
		right: "0",
		top: "2px",
		bottom: "0",
		color: "#5F5F5F",
		fontSize: "24px",
	},
};

export default (props) => {
	const { daysElapsed = 0, totalDays = 0 } = props;
	const daysLeft = totalDays - daysElapsed;

	return (
		<div style={styles.root}>
			<h1 style={styles.header}>Hello Singapore,</h1>
			It is <span style={styles.underline}>Day {daysElapsed}</span> of
			<br />
			the {totalDays}-day Circuit Breaker.
			<div style={styles.progressBarWrapper}>
				<ProgressBar
					style={styles.progressBar}
					now={daysElapsed}
					max={totalDays}
					animated={true}
				/>
				<span style={styles.progressBarText}>
					Just{" "}
					<b>
						{daysLeft} day{daysLeft > 1 && "s"}
					</b>{" "}
					left!
				</span>
			</div>
		</div>
	);
};
