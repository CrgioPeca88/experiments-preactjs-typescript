import { html } from 'htm/preact';
import { FunctionalComponent } from 'preact';

import style from './style.scss';

const Header: FunctionalComponent = () => {

	const sendMessage = () => {
		alert('Enviando mensaje ...');
	}

	return html`
		<footer class=${style.chat_actions}>
			<button class=${style.send_button} onClick="${sendMessage}">Enviar</button>
		</footer>
	`
};

export default Header;
