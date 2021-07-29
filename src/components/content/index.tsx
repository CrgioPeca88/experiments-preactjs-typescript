import { FunctionalComponent } from 'preact';

import {
	LocalMessage,
	Section,
	BoldText
} from './content.style';

export interface ContentProps {
	source: string;
}

const Content: FunctionalComponent<ContentProps> = (props: ContentProps) => {
	return (
		<Section>
			<LocalMessage>
				<p>Mensaje enviado desde <BoldText>{props.source}</BoldText> al cliente </p>
			</LocalMessage>
		</Section>
	);
};

export default Content;
