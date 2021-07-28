import { html } from 'htm/preact';
import { FunctionalComponent } from 'preact';

import {
	LocalMessage,
	Section
} from './content.style';

export interface ContentProps {
	source: string;
}

const Content: FunctionalComponent<ContentProps> = (props: ContentProps) => {
	return html`
		<${Section}>
			<${LocalMessage}>
				<p>Mensaje enviado desde <strong>${props.source}</strong> al cliente </p>
			</${LocalMessage}>
		</${Section}>
	`
};

export default Content;
