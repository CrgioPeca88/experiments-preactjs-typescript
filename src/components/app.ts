import { html } from 'htm/preact';
import { Router } from 'preact-router';
import { FunctionalComponent } from 'preact';

import WCChat from './chat/chat.web-component';

const App: FunctionalComponent = () => {
	
	return html`
		<div id="app">
			<h1>Web Components Test</h1>
			<${Router}>
				<${WCChat} path="/wc-chat" user="Test" source="TestPreact" />
			</${Router}>
		</div>
	`;
}

export default App;
