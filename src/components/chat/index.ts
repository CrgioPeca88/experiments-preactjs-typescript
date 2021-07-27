import { html } from 'htm/preact';
import { useEffect } from 'preact/hooks'
import { FunctionalComponent } from 'preact';

import Header from '../header';
import Content from '../content';
import Actions from '../actions';
import style from './style.scss';
import { event } from '../app';


const Chat: FunctionalComponent = () => {

	useEffect(() => {
		event.onChanges((payload) => {
			console.log(payload)
		}, '[SOURCE_DATA]');
	});

	return html`
		<main class=${style.chat_container}>
			<${Header} user="Sergio" />
			<${Content} source="Lupe" />
			<${Actions} />
		</main>
	`;
};

export default Chat;
