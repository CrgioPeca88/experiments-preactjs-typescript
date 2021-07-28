import { html } from 'htm/preact';
import { FunctionalComponent } from 'preact';

import {
	ActionsFooter,
	SendMsgButton
} from './actions.style';

const Actions: FunctionalComponent = () => {

	const sendMessage = () => {
		alert('Enviando mensaje ...');
	}

	return html`
		<${ActionsFooter}>
			<${SendMsgButton} onClick="${sendMessage}">Enviar</${SendMsgButton}>
		</${ActionsFooter}>
	`
};

export default Actions;
