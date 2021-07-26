import { html } from 'htm/preact';
import { FunctionalComponent } from 'preact';

import style from './style.scss';

const Content: FunctionalComponent = () => {
	return html`
		<section class=${style.chat_content}>
			<div class=${style.local_message}>
				<p>Mensaje de prueba local q llegará al usuario remoto</p>
			</div>
		</section>
	`
};

export default Content;
