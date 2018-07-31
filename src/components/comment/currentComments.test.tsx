import * as React from 'react';
import CurrentComments from './currentComments';
import {
	render,
	fireEvent,
	cleanup,
	waitForElement
} from 'react-testing-library';

afterEach(cleanup);
test('Current Comments', () => {
	const comments = {
		user: 'Anon',
		date: '10/20/20',
		content: 'Here is a comment'
	};

	const { getByLabelText, getByText } = render(<CurrentComments {...comments} />);
	expect(getByText(comments.content).innerHTML).toBe('Here is a comment');
	expect(getByText(comments.date).innerHTML).toBe('10/20/20');
	expect(getByText(comments.user).innerHTML).toBe('Anon'));
});
