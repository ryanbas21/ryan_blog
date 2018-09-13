import * as React from 'react';
import Reply from './reply';

import {
	render,
	fireEvent,
	cleanup,
	waitForElement
} from 'react-testing-library';

afterEach(cleanup);

describe('Reply Component', () => {
	it('Should have a button', () => {
		const props = {};
		const { getByTestId } = render(<Reply {...props} />);
		expect(getByTestId('reply-button').innerHTML).toBe('Reply');
	});

	it('Should allow a reply to click submit', () => {
		const fn = jest.fn();
		const props = {};
		const { getByTestId } = render(<Reply {...props} onClick={fn}/>);
		const button = getByTestId('reply-button');
		fireEvent.click(button);
		expect(fn).toHaveBeenCalledTimes(1);
	});
	// test('Should handle onchange', () => {
	// 	const fn = jest.fn();
	// 	const change = jest.fn();

	// 	const { getByTestId } = render(
	// 		<Reply />
	// 	);
	// 	const comment = getByTestId('textbox');

	// 	comment.value = 'Great advice, I love your posts!';
	// 	fireEvent.change(comment);

	// 	expect(change).toHaveBeenCalledTimes(1);
	// });
	// it('When submitted, text should appear below reply', () => {
	//   const props = {};
	//   const change = jest.fn();
	//   const { getByTestId } = render(<Reply {...props} />);
	//   const button = getByTestId('reply-button');
	//   const fireEvent.click(button)

	//  })
});
