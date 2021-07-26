import { html } from 'htm/preact';
import { FunctionalComponent } from 'preact';
import { Link } from 'preact-router/match';

import style from './style.scss';

const Header: FunctionalComponent = () => {
	return html`
		<header class=${style.header}>
			<h1>Chat</h1>
			<nav>
				<${Link} activeClassName=${style.active} href="/">User</${Link}>
			</nav>
		</header>
	`
};

export default Header;
