import Head from 'next/head';
import ClayNav from '@clayui/nav';
import ClayIcon from '@clayui/icon';

const spritemap = '../images/icons.svg';

export default function Home() {
	return (
		<>
			<Head>
				<title>LutBot</title>

				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header>
				<ClayNav>
					<ClayNav.Item>
						<ClayNav.Link active href="/">
							<ClayIcon symbol="sheets" spritemap={spritemap} />
							{'Dashboard'}
						</ClayNav.Link>
					</ClayNav.Item>

					<ClayNav.Item>
						<ClayNav.Link href="/jobs">
							<ClayIcon symbol="code" spritemap={spritemap} />
							{'Jobs'}
						</ClayNav.Link>
					</ClayNav.Item>

					<ClayNav.Item>
						<ClayNav.Link href="/report">
							<ClayIcon
								symbol="analytics"
								spritemap={spritemap}
							/>
							{'Report'}
						</ClayNav.Link>
					</ClayNav.Item>
				</ClayNav>
			</header>

			<main>
				<h1>Dashboard</h1>
			</main>

			<footer>
				<span>Footer</span>
			</footer>
		</>
	);
}