import React, {useEffect, useState} from 'react';

import formatDuration from '../utils/formatDuration';

const CountUp = ({startTime}) => {
	const [time, setTime] = useState(new Date(startTime).getTime());

	useEffect(() => {
		const interval = setInterval(() => {
			setTime((time) => time + 1000);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return <span>
				{formatDuration(
						new Date().getTime() -
							new Date(startTime).getTime()
				)}
			</span>;
};

export default CountUp;
