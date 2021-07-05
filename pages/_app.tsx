import '../styles/main.scss';

import {ClayIconSpriteContext} from '@clayui/icon';
import ClayLayout from '@clayui/layout';
import ClayLink, {ClayLinkContext} from '@clayui/link';
import ClayNavigationBar from '@clayui/navigation-bar';
import Head from 'next/head';
import Link from 'next/link';
import {useRouter} from 'next/router';

const spritemap = '/icons.svg';

const NextLink = ({href, ...otherProps}: any) => (
	<Link href={href} passHref>
		<a {...otherProps} />
	</Link>
);

function Lugbot({Component, pageProps}) {
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
					content="Liferay automatic code improvement tool"
					name="description"
				/>

				<link href="/favicon.ico" rel="icon" />
			</Head>

			<ClayLinkContext.Provider value={NextLink}>
				<ClayIconSpriteContext.Provider value={spritemap}>
					<header>
						<ClayNavigationBar inverted triggerLabel="Tasks">
							<ClayLink className="navbar-brand" href="/">
								{'Lugbot'}
							</ClayLink>

							<ClayNavigationBar.Item
								active={currentRoute === '/tasks'}
							>
								<ClayLink
									className="nav-link"
									displayType="unstyled"
									href="/tasks"
								>
									{'Dashboard'}
								</ClayLink>
							</ClayNavigationBar.Item>
						</ClayNavigationBar>
					</header>

					<main>
						<Component {...pageProps} />
					</main>

					<footer>
						<ClayLayout.ContainerFluid>
							<ClayLayout.ContentRow
								style={{justifyContent: 'center'}}
							>
								<span>
									Created By{' '}
									<ClayLink
										href="https://liferay.com"
										target="__blank"
									>
										Liferay
									</ClayLink>
								</span>
							</ClayLayout.ContentRow>
						</ClayLayout.ContainerFluid>
					</footer>
				</ClayIconSpriteContext.Provider>
			</ClayLinkContext.Provider>
		</>
	);
}

export default Lugbot;
