import React, { useState, useEffect } from "react";

const startDate = new Date(2020, 3, 7); // 3 = April
const endDate = new Date(2020, 4, 4); // 4 = May
const totalDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;

export default (props) => {
	const [daysElapsed, setDaysElapsed] = useState(0);
	const [daysLeft, setDaysLeft] = useState(0);

	useEffect(() => {
		const today = new Date();
		const timeElapsed = Math.abs(today - startDate);
		const timeLeft = Math.abs(endDate - today);

		const daysElapsed = Math.ceil(timeElapsed / (1000 * 60 * 60 * 24));
		const daysLeft = Math.ceil(timeLeft / (1000 * 60 * 60 * 24));

		setDaysElapsed(daysElapsed);
		setDaysLeft(daysLeft);
	}, []);

	return (
		<>
			Day {daysElapsed} of {totalDays}
			<br />
			Days left: {daysLeft}
		</>
	);
};
