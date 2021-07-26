import { html } from 'htm/preact';
import { Router } from 'preact-router';
import { FunctionalComponent } from 'preact';

import WCChat from './chat/chat.web-component';

const App: FunctionalComponent = () => {
	
	return html`
		<div id="app">
			<${Router}>
				<${WCChat} path="/wc-chat" />
			</${Router}>
			<wc-chat></wc-chat>
		</div>
	`;
}

export default App;
