import '../styles/main.scss';

import {ClayIconSpriteContext} from '@clayui/icon';
import {ClayLinkContext} from '@clayui/link';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import Footer from '../components/Footer';

const spritemap = '/icons.svg';

const NextLink = ({href, ...otherProps}: any) => (
	<Link href={href} passHref>
		<a {...otherProps} />
	</Link>
);

export default function Lugbot({Component, pageProps}) {
	const {task} = pageProps;

	return (
		<>
			<Head>
				<title>{task ? task.name : 'Tasks'}</title>

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
