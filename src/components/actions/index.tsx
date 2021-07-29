import { FunctionalComponent } from 'preact';

import {
	ActionsFooter,
	SendMsgButton
} from './actions.style';

const Actions: FunctionalComponent<any> = ( { source } ) => {

	const sendMessage = () => {
		alert(`Enviando mensaje desde ${source} ...`);
	}

	return (
		<ActionsFooter>
			<SendMsgButton onClick={sendMessage}>Enviar</SendMsgButton>
		</ActionsFooter>
	);
};

export default Actions;
