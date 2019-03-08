import * as React from 'react';
import CreateComment from './createComment';
import {
	render,
	fireEvent,
	cleanup,
	waitForElement
} from 'react-testing-library';

afterEach(cleanup);

test('Should submit the reply', () => {
	const fn = jest.fn();
	const change = jest.fn();

	const { getByText } = render(
		<CreateComment onReply={fn} replyChange={change} />
	);
	const text = getByText('Add Reply');
	fireEvent.click(text);

	expect(fn).toHaveBeenCalledTimes(1);
});

test('Should handle onchange', () => {
	const fn = jest.fn();
	const change = jest.fn();

	const { getByTestId } = render(
		<CreateComment onReply={fn} replyChange={change} />
	);
	const comment = getByTestId('textbox');

	(comment as HTMLInputElement).value = 'Great advice, I love your posts!';
	fireEvent.change(comment);

	expect(change).toHaveBeenCalledTimes(1);
});
