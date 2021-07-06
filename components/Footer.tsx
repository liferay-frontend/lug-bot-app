import ClayLayout from '@clayui/layout';
import ClayLink from '@clayui/link';

const Footer = () => (
	<footer>
		<ClayLayout.ContainerFluid>
			<ClayLayout.ContentRow style={{justifyContent: 'center'}}>
				<span>
					{'Created By '}

					<ClayLink href="https://liferay.com" target="__blank">
						{'Liferay'}
					</ClayLink>
				</span>
			</ClayLayout.ContentRow>
		</ClayLayout.ContainerFluid>
	</footer>
);

export default Footer;
