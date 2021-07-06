import ClayLink from '@clayui/link';
import ClayNavigationBar from '@clayui/navigation-bar';

const Header = ({currentRoute}) => (
	<header>
		<ClayNavigationBar inverted triggerLabel="Tasks">
			<ClayLink className="navbar-brand" href="/">
				{'Lugbot'}
			</ClayLink>

			<ClayNavigationBar.Item active={currentRoute === '/tasks'}>
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
);

export default Header;
