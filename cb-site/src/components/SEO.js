import React from "react";
import { Helmet } from "react-helmet";

import img from "../img/background.png";
const defaultSEO = require("../SEO.json");

export default (props) => {
	const {
		title = defaultSEO.name,
		description = defaultSEO.description,
		image = img,
	} = props;

	const currentURL = window.location.href;

	return (
		<Helmet>
			{/* FOR SEO USE */}
			{/* <!-- Primary Meta Tags --> */}
			<title>{title}</title>
			<meta name="title" content={title} />
			<meta name="description" content={description} />

			{/* <!-- Open Graph / Facebook --> */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content={currentURL} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />

			{/* <!-- Twitter --> */}
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content={currentURL} />
			<meta property="twitter:title" content={title} />
			<meta property="twitter:description" content={description} />
			<meta property="twitter:image" content={image} />
		</Helmet>
	);
};
