import { html } from 'htm/preact';
import { FunctionalComponent } from 'preact';
import { useEffect, useState } from "preact/hooks";

import style from './style.scss';

export interface PathParamsProfile {
	user: string
}

export interface InputPropsProfile {
	path: string;
	url: string;
	user: string;
	matches: PathParamsProfile
}

const Profile: FunctionalComponent<InputPropsProfile> = (props: InputPropsProfile) => {

	const user = `${props.user} panita`;
	const [time, setTime] = useState(Date.now());
	const [count, setCount] = useState(10);

	useEffect(() => {
		let timer = setInterval(() => setTime(Date.now()), 1000);
		return () => clearInterval(timer);
	}, []);

	return html`
		<div class=${style.profile}>
			<h1>Profile: ${user}</h1>
			<p>This is the user profile for a user named ${ user }.</p>

			<div>Current time: ${new Date(time).toLocaleString()}</div>

			<p>
				<button class="${style.click_button}" onClick=${() => setCount((count) => count + 1)}>Click Me</button>
				${' '}
				Clicked ${count} times.
			</p>
		</div>
	`;
}

export default Profile;
