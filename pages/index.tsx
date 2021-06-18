export default function Home() {
	return (
		<>
			<h1>Dashboard</h1>
		</>
	);
}

export async function getServerSideProps(context) {
	return {
		redirect: {
			destination: '/jobs',
			permanent: true,
		},
	};
}
