import React, { useState, useEffect } from "react";
import { ProgressBar } from "react-bootstrap";

const startDate = new Date(2020, 3, 7); // 3 = April
const endDate = new Date(2020, 4, 4); // 4 = May
const totalDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;

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
		margin: "20px auto 0 auto",
		borderRadius: "20px",
	},
	progressBarText: {
		position: "absolute",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		top: "0",
		left: "0",
		right: "0",
		bottom: "0",
		color: "#5F5F5F",
		fontSize: "20px",
	},
};

export default () => {
	const today = new Date();
	const [daysElapsed, setDaysElapsed] = useState(0);
	const [daysLeft, setDaysLeft] = useState(0);

	useEffect(() => {
		const intervalID = setInterval(() => {
			console.log("hello");
		}, 1000);

		return () => clearInterval(intervalID);
	}, []);

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
				<div style={styles.progressBarText}>
					<span>
						Just{" "}
						<b>
							{daysLeft} day{daysLeft > 1 && "s"}
						</b>{" "}
						left!
					</span>
				</div>
			</div>
		</div>
	);
};
