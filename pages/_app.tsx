import '../styles/main.scss';

import {ClayIconSpriteContext} from '@clayui/icon';
import {ClayLinkContext} from '@clayui/link';
import Head from 'next/head';
import Link from 'next/link';
import {useRouter} from 'next/router';
import React from 'react';

import Footer from '../components/Footer';

const spritemap = '/icons.svg';

const NextLink = ({href, ...otherProps}: any) => (
	<Link href={href} passHref>
		<a {...otherProps} />
	</Link>
);

export default function Lugbot({Component, pageProps}) {
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
					<main>
						<Component {...pageProps} />
					</main>

					<Footer />
				</ClayIconSpriteContext.Provider>
			</ClayLinkContext.Provider>
		</>
	);
}
