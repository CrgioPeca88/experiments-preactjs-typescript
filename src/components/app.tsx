import { FunctionalComponent } from 'preact';
import { Router } from 'preact-router';

import WCChat from './chat/chat.web-component';
import Test from './test/test.web-component';

const App: FunctionalComponent = () => {
	
	return (
		<div id="app">
			<h1>Web Components Test</h1>
			<Router>
				<WCChat path="/wc-chat" user="Chat" source="TestPreact" />
				<Test path="/test" user="Test" source="TestPreact" />
			</Router>
		</div>
	);
}

export default App;