import { html } from 'htm/preact';
import { Router } from 'preact-router';
import { FunctionalComponent } from 'preact';

import WCChat from './chat/chat.web-component';
import Test from './test/test.web-component';

const App: FunctionalComponent = () => {
	
	return html`
		<div id="app">
			<h1>Web Components Test</h1>
			<${Router}>
				<${WCChat} path="/wc-chat" user="Chat" source="TestPreact" />
				<${Test} path="/test" user="Test" source="TestPreact" />
			</${Router}>
		</div>
	`;
}

export default App;
