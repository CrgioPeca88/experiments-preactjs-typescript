import { html } from 'htm/preact';
import { FunctionalComponent } from 'preact';

import style from './style.scss';

export interface ContentProps {
	source: string;
}

const Content: FunctionalComponent<ContentProps> = (props: ContentProps) => {
	return html`
		<section class=${style.chat_content}>
			<div class=${style.local_message}>
				<p>Mensaje enviado desde <strong>${props.source}</strong> al cliente </p>
			</div>
		</section>
	`
};

export default Content;
