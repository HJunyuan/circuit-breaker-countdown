import React from "react";
import bg from "./img/background.png";

import { Container } from "react-bootstrap";
import Greeting from "./components/Greeting";

const styles = {
	root: {
		height: "100vh",
		background: `url(${bg}) no-repeat center center fixed`,
		backgroundSize: "cover",
		textAlign: "center",
	},
	container: {
		transform: "translate(0, 18vh)",
	},
	header: {
		color: "white",
		fontWeight: "bold",
		fontSize: "28px",
	},
};

function App() {
	return (
		<div style={styles.root}>
			<Container style={styles.container}>
				<h1 style={styles.header}>Hello Singapore,</h1>
				<Greeting />
			</Container>
		</div>
	);
}

export default App;
