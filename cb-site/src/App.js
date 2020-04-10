import React from "react";
import { Container } from "react-bootstrap";

import Background from "./components/Background";
import Countdown from "./components/Countdown";
import Footer from "./components/Footer";

const styles = {
	root: {
		height: "100vh",
		textAlign: "center",
		display: "flex",
		flexDirection: "column",
	},
	main: {
		flexGrow: "1",
	},
	container: {
		marginTop: "15vh",
	},
};

function App() {
	return (
		<div style={styles.root}>
			<main style={styles.main}>
				<Background />
				<Container style={styles.container}>
					<Countdown />
				</Container>
			</main>
			<Footer />
		</div>
	);
}

export default App;
