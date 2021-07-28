import { html } from 'htm/preact';
import { FunctionalComponent } from 'preact';

import {
	ActionsFooter,
	SendMsgButton
} from './actions.style';

const Actions: FunctionalComponent<any> = ( { source } ) => {

	const sendMessage = () => {
		alert(`Enviando mensaje desde ${source} ...`);
	}

	return html`
		<${ActionsFooter}>
			<${SendMsgButton} onClick="${sendMessage}">Enviar</${SendMsgButton}>
		</${ActionsFooter}>
	`
};

export default Actions;
