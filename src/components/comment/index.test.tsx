import * as React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';

import Comments from './';

afterEach(cleanup);
test('Should create a comment', () => {
	const { getByTestId, getByText } = render(
		<Comments user="Anon" styles={{ comments: 5 }} />
	);
	const comment = getByTestId('textbox');
	const button = getByText('Add Reply');
	comment.value = 'Great advice, I love your posts!';
	fireEvent.change(comment);
	fireEvent.click(button);
	expect(getByText('Great advice, I love your posts!').innerHTML).toBe(
		comment.value
	);
});
