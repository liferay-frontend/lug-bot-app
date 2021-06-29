import React from 'react';

import getAPIOrigin from '../../../utils/getAPIOrigin';

export default function Project({project}) {
	return <p>pls work</p>;
}

export async function getServerSideProps(context) {
	const APIOrigin = getAPIOrigin(context.req);

	const project = await fetch(
		`${`${APIOrigin}`}/api/projects/${context.query.projectId}`
	).then((res) => res.json());

	return {
		props: {project},
	};
}
