import React from "react";

const style = {
	color: "white",
	fontSize: "40px",
};

export default (props) => {
	const { daysElapsed = 0, totalDays = 0 } = props;

	return (
		<div style={style}>
			It is Day {daysElapsed} of
			<br />
			the {totalDays}-day Circuit Breaker.
		</div>
	);
};
