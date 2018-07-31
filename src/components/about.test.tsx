import React from 'react';
import {
	render,
	fireEvent,
	cleanup,
	waitForElement
} from 'react-testing-library';
import 'jest-dom/extend-expect';
import About from './about';

afterEach(cleanup);

test('About Page Renders main content', () => {
	const content = `I'm currently a software engineer @ Paypal. I write React/Redux/Node/Express with typescript to help support the Wallet at your favorite payment platform.`;

	const { getByText } = render(<About />);
	expect(getByText(content).innerHTML).toBe(content);
});
