import '../styles/main.scss';
import ClayNav from '@clayui/nav';
import ClayIcon, {ClayIconSpriteContext} from '@clayui/icon';
import {ClayLinkContext} from '@clayui/link';
import Head from 'next/head';
import Link from 'next/link';
import {useRouter} from 'next/router';

const spritemap = '/icons.svg';

const NextLink = ({href, ...otherProps}: any) => (
	<Link href={href} passHref>
		<a {...otherProps} />
	</Link>
);

function MyApp({Component, pageProps}) {
	const router = useRouter();

	const currentRoute = router.asPath;

	const title = currentRoute.substr(1);

	const capitalizedTitle = title
		? title.charAt(0).toUpperCase() + title.slice(1)
		: 'Dashboard';

	return (
		<>
			<Head>
				<title>{capitalizedTitle}</title>

				<meta
					name="description"
					content="Liferay automatic code improvement tool"
				/>

				<link rel="icon" href="/favicon.ico" />
			</Head>

			<ClayLinkContext.Provider value={NextLink}>
				<ClayIconSpriteContext.Provider value={spritemap}>
					<header>
						<ClayNav>
							<ClayNav.Item>
								<ClayNav.Link
									active={currentRoute === '/jobs'}
									href="/jobs"
								>
									<ClayIcon symbol="code" />

									{'Jobs'}
								</ClayNav.Link>
							</ClayNav.Item>
						</ClayNav>
					</header>

					<main>
						<Component {...pageProps} />
					</main>

					<footer>
						<span>Footer</span>
					</footer>
				</ClayIconSpriteContext.Provider>
			</ClayLinkContext.Provider>
		</>
	);
}

export default MyApp;
