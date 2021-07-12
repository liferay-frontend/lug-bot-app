import ClayButton from '@clayui/button';
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

			<ClayButton
				className="align-self-center btn-danger ml-auto"
				onClick={() =>
					confirm('You are about to stop Lugbot. Are you sure?')
				}
				small
			>
				{'Stop Lugbot'}
			</ClayButton>
		</ClayNavigationBar>
	</header>
);

export default Header;
