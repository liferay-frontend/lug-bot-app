import '../styles/main.scss';
import ClayNav from '@clayui/nav';
import ClayIcon, {ClayIconSpriteContext} from '@clayui/icon';
import {useRouter} from 'next/router';

const spritemap = '../images/icons.svg';

function MyApp({Component, pageProps}) {
	const router = useRouter();
	const currentRoute = router.pathname;

	return (
		<>
			<ClayIconSpriteContext.Provider value={spritemap}>
				<header>
					<ClayNav>
						<ClayNav.Item>
							<ClayNav.Link
								active={currentRoute === '/'}
								href="/"
							>
								<ClayIcon symbol="sheets" />

								{'Dashboard'}
							</ClayNav.Link>
						</ClayNav.Item>

						<ClayNav.Item>
							<ClayNav.Link
								active={currentRoute === '/jobs'}
								href="/jobs"
							>
								<ClayIcon symbol="code" />

								{'Jobs'}
							</ClayNav.Link>
						</ClayNav.Item>

						<ClayNav.Item>
							<ClayNav.Link
								active={currentRoute === '/report'}
								href="/report"
							>
								<ClayIcon symbol="analytics" />

								{'Report'}
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
		</>
	);
}

export default MyApp;
