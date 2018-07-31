import * as React from 'react';
import CommentHeader from './commentHeader';
import {
	render,
	fireEvent,
	cleanup,
	waitForElement
} from 'react-testing-library';

afterEach(cleanup);

test('Should render Comment Header', () => {
	const { getByText } = render(<CommentHeader />);

	expect(getByText('Comments').innerHTML).toBe('Comments');
});
