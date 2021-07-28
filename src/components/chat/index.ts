import { html } from 'htm/preact';
//import { useEffect } from 'preact/hooks'
import { FunctionalComponent } from 'preact';

import Header from '../header';
import Content from '../content';
import Actions from '../actions';
import {
	Main
} from './chat.style';
//import { event } from '../app';

export interface ChatProps {
	user: string;
	source: string;
}

const Chat: FunctionalComponent<ChatProps> = (props: ChatProps) => {

	/*useEffect(() => {
		event.onChanges((payload) => {
			console.log(payload)
		}, '[SOURCE_DATA]');
	});*/

	return html`
		<${Main}>
			<${Header} user=${props.user} />
			<${Content} source=${props.source} />
			<${Actions} source=${props.source}/>
		</${Main}>
	`;
};

export default Chat;
