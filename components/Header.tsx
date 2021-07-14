import ClayButton from '@clayui/button';
import ClayLink from '@clayui/link';
import ClayNavigationBar from '@clayui/navigation-bar';

import API_ENDPOINT from '../constants/apiEndpoint';

export default function Header({currentRoute}) {
	return (
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
						fetch(`${API_ENDPOINT}/shutdown`, {method: 'POST'})
					}
					small
				>
					{'Stop Lugbot'}
				</ClayButton>
			</ClayNavigationBar>
		</header>
	);
}
