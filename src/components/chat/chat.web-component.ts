import register from 'preact-custom-element';

import ChatComponent from './index'

export const mfTagName = 'wc-chat';

register(ChatComponent, mfTagName, []);

export default ChatComponent;
