import React from "react";
import bg from "./img/background.png";

import { Container } from "react-bootstrap";
import Countdown from "./components/Countdown";

const styles = {
	root: {
		height: "100vh",
		background: `url(${bg}) no-repeat center center fixed`,
		backgroundSize: "cover",
	},
};

function App() {
	return (
		<div style={styles.root}>
			<Container>
				<Countdown />
			</Container>
		</div>
	);
}

export default App;
