import * as React from 'react';
import { Grommet } from 'grommet';
import { render, fireEvent, cleanup } from 'react-testing-library';

import Comments, { onReply } from './';

afterEach(cleanup);
test('onreply should get called', () => {
  const commentsState = {comments: [], commentText: "new comment"} 
  const setComments = jest.fn();
  const result = onReply(commentsState, setComments)()

  expect(setComments).toHaveBeenCalled()
})
test('Should create a comment', () => {
	const { getByTestId, getByText } = render(
    <Grommet>
      <Comments styles={{ comments: 5 }} />
    </Grommet>
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
