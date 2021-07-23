import { html } from 'htm/preact';
import { FunctionalComponent } from 'preact';

import style from './style.scss';

const Home: FunctionalComponent = () => {
	return html`<div class=${style.home}>
		<h1>Home</h1>
		<p>This is the Home component.</p>
	</div>`;
};

export default Home;
