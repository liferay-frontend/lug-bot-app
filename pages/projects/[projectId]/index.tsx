export async function getServerSideProps(context) {
	return {
		redirect: {
			destination: `/projects/${context.query.projectId}/jobs`,
		},
	};
}