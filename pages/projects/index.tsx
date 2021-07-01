import ClayCard from '@clayui/card';
import ClayLayout from '@clayui/layout';
import ClayLink from '@clayui/link';
import React from 'react';

import getAPIOrigin from '../../utils/getAPIOrigin';

export default function Projects({projects}) {
	return (
		<ClayLayout.ContainerFluid view>
			<ClayLayout.Row justify="start">
				{projects.map((project) => (
					<ClayLayout.Col key={project.location} size={6}>
						<ClayCard horizontal>
							<ClayCard.Row>
								<ClayCard.Body>
									<ClayCard.Description
										displayType="text"
										tag="h1"
									>
										{project.name}
									</ClayCard.Description>

									<ClayCard.Description
										truncate={false}
										displayType="text"
									>
										{project.description}
									</ClayCard.Description>

									<section className="autofit-section">
										<ClayLink
											button
											displayType="primary"
											href={`/projects/${project.id}/tasks`}
										>
											{'View Tasks'}
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

	if (projects.length === 1) {
		const project = projects[0];

		return {
			redirect: {
				destination: `/projects/${project.id}/tasks`,
			},
		};
	}

	return {
		props: {projects},
	};
}
