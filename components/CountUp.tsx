import React, {useEffect, useState} from 'react';

const CountUp = ({startTime}) => {
	const [time, setTime] = useState(new Date(startTime).getTime());

	useEffect(() => {
		const interval = setInterval(() => {
			setTime((time) => time + 1000);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return <span>{new Date(time).toISOString().substr(11, 8)}</span>;
};

export default CountUp;
