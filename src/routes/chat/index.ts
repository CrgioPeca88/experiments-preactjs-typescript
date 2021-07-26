import { html } from 'htm/preact';
import { FunctionalComponent } from 'preact';

import Header from '../../components/header';
import Content from '../../components/content';
import Actions from '../../components/actions';
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
