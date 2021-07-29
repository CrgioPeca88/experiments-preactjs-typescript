import register from 'preact-custom-element';

import TestComponent from './index'

export const mfTagName = 'test-chat';

register(TestComponent, mfTagName, []);

export default TestComponent;
