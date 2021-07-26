import { html } from 'htm/preact';
import { FunctionalComponent } from 'preact';

import Header from '../header';
import Content from '../content';
import Actions from '../actions';
import style from './style.scss';

const Chat: FunctionalComponent = () => {
	return html`
		<main class=${style.chat_container}>
			<${Header} />
			<${Content} />
			<${Actions} />
		</main>
	`;
};

export default Chat;
