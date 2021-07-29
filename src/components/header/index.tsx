import { FunctionalComponent } from 'preact';

import { 
	Header as ScHeader,
	H_h1,
	H_nav,
	H_a
 } from './header.style';

export interface HeaderProps {
	user: string;
}

const Header: FunctionalComponent<HeaderProps> = (props: HeaderProps) => {
	
	return (
		<ScHeader>
			<H_h1>Chat</H_h1>
			<H_nav>
				<H_a>{props.user}</H_a>
			</H_nav>
		</ScHeader>
	);
};

export default Header;
