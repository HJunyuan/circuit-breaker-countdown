import React from "react";
import bg from "./img/BG_Skyline.svg";

import { Container } from "react-bootstrap";
import Clouds from "./components/Clouds";
import Countdown from "./components/Countdown";
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
		marginTop: "15vh",
	},
};

function App() {
	return (
		<div style={styles.root}>
			<main style={styles.main}>
				<Clouds />
				<Container style={styles.container}>
					<Countdown />
				</Container>
			</main>
			<Footer />
		</div>
	);
}

export default App;
