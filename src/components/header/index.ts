import { html } from 'htm/preact';
import { FunctionalComponent } from 'preact';
import { Link } from 'preact-router/match';

import style from './style.scss';

export interface HeaderProps {
	user: string;
}

const Header: FunctionalComponent<HeaderProps> = (props: HeaderProps) => {
	
	return html`
		<header class=${style.header}>
			<h1>Chat</h1>
			<nav>
				<${Link} activeClassName=${style.active} href="/">${props.user}</${Link}>
			</nav>
		</header>
	`
};

export default Header;
