import styled from 'styled-components';

export const Header = styled.header`
	width: 100%;
	height: 56px;
	padding: 0;
	background: #673AB7;
	display: flex;
    justify-content: space-between;
`;

export const H_h1 = styled.h1`
	margin: 0;
	padding: 0 15px;
	font-size: 24px;
	line-height: 56px;
	font-weight: 400;
	color: #FFF;
`;

export const H_nav = styled.nav`
	width: 20%;
	height: auto;
	box-shadow: none;
	background-color: transparent;
`;

export const H_a = styled.a`
	display: flex;
	align-items: center;
	height: 56px;
	padding: 0 15px;
	min-width: 50px;
	text-align: center;
	background: rgba(255,255,255,0);
	text-decoration: none;
	color: #FFF;
	will-change: background-color;
	&:hover {
		background: rgba(0,0,0,0.2);	
	};
	&:active {
		background: rgba(0,0,0,0.2);	
	};
`;


