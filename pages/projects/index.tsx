import ClayCard from '@clayui/card';
import ClayLayout from '@clayui/layout';
import ClayLink from '@clayui/link';
import React from 'react';

import getAPIOrigin from '../../utils/getAPIOrigin';

export default function Projects({projects}) {
	return (
		<ClayLayout.ContainerFluid view>
			<ClayLayout.Row justify="start">
				{Object.keys(projects).map((project) => (
					<ClayLayout.Col key={projects[project].location} size={6}>
						<ClayCard horizontal>
							<ClayCard.Row>
								<ClayCard.Body>
									<ClayCard.Description
										displayType="text"
										tag="h1"
									>
										{projects[project].name}
									</ClayCard.Description>

									<ClayCard.Description
										truncate={false}
										displayType="text"
									>
										{projects[project].description}
									</ClayCard.Description>

									<section className="autofit-section">
										<ClayLink
											button
											displayType="primary"
											href={`/projects/${project}`}
										>
											{'View Jobs'}
										</ClayLink>
									</section>
								</ClayCard.Body>
							</ClayCard.Row>
						</ClayCard>
					</ClayLayout.Col>
				))}
			</ClayLayout.Row>
		</ClayLayout.ContainerFluid>
	);
}

export async function getServerSideProps(context) {
	const projects = await fetch(
		`${getAPIOrigin(context.req)}/api/projects`
	).then((res) => res.json());

	return {
		props: {projects},
	};
}
