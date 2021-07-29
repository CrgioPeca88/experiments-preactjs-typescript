import { FunctionalComponent } from 'preact';

import Header from '../header';
import Content from '../content';
import Actions from '../actions';
import {
	Main
} from './test.style';

export interface ChatProps {
	user: string;
	source: string;
}

const Chat: FunctionalComponent<ChatProps> = (props: ChatProps) => {

	return (
		<Main>
			<Header user={props.user} />
			<Content source={props.source} />
			<Actions source={props.source}/>
		</Main>
	);
};

export default Chat;
