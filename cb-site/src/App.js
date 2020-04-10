import React from "react";
import bg from "./img/background.png";

import { Container } from "react-bootstrap";
import Greeting from "./components/Greeting";
import Footer from "./components/Footer";

const styles = {
	root: {
		height: "100vh",
		background: `url(${bg}) no-repeat center center fixed`,
		backgroundSize: "cover",
		textAlign: "center",
		display: "flex",
		flexDirection: "column",
	},
	main: {
		flexGrow: "1",
	},
	container: {
		marginTop: "20vh",
	},
};

function App() {
	return (
		<div style={styles.root}>
			<main style={styles.main}>
				<Container style={styles.container}>
					<Greeting daysElapsed={1} totalDays={28} />
				</Container>
			</main>
			<Footer />
		</div>
	);
}

export default App;
