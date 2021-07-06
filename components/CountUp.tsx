import React from 'react';

const CountUp = ({startTime}) => {
	const [time, setTime] = React.useState(new Date(startTime).getTime());

	React.useEffect(() => {
		setInterval(() => {
			setTime((time) => time + 1000);
		}, 1000);
	}, []);

	return <span>{new Date(time).toISOString().substr(11, 8)}</span>;
};

export default CountUp;
