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
};

function App() {
	return (
		<div style={styles.root}>
			<Container style={styles.container}>
				<Greeting daysElapsed={1} totalDays={28} />
			</Container>
		</div>
	);
}

export default App;
