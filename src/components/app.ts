import { html } from 'htm/preact';
import { Router } from 'preact-router';
import { FunctionalComponent } from 'preact';

import Chat from '../routes/chat';

const App: FunctionalComponent = () => {
	
	return html`
		<div id="app">
			<${Router}>
				<${Chat} path="/" />
			</${Router}>
		</div>
	`;
}

export default App;
