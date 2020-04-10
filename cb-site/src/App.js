import React from "react";
import bg from "./img/background.png";

import { Container } from "react-bootstrap";
import Countdown from "./components/Countdown";

const styles = {
	root: {
		height: "100vh",
		background: `url(${bg}) no-repeat center center fixed`,
		backgroundSize: "cover",
		textAlign: "center",
	},
	greeting: {
		color: "white",
		fontWeight: "bold",
		fontSize: "30px",
	},
};

function App() {
	return (
		<div style={styles.root}>
			<Container>
				<h1 style={styles.greeting}>Hello Singapore,</h1>
				<Countdown />
			</Container>
		</div>
	);
}

export default App;
