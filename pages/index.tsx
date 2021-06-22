export default function Home() {
	return (
		<>
			<h1>Dashboard</h1>
		</>
	);
}

export async function getServerSideProps() {
	return {
		redirect: {
			destination: '/jobs',
			permanent: true,
		},
	};
}
