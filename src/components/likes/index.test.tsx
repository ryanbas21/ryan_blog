import * as React from 'react';
import { cleanup, fireEvent, render } from 'react-testing-library';
import Likes from './';

afterEach(cleanup);

test.skip('Should render Like button', () => {
	const { getByTestId, getByText } = render(<Likes />);
	const likeButton = getByTestId('likes-button');
	const totalLikes = getByText('0');

	expect(likeButton).toBeTruthy();
	expect(totalLikes.innerHTML).toBe('0');
});

test.skip('Should Click Like Button and increment Likes', () => {
	const { getByText, getByTestId } = render(<Likes />);
	const likeButton = getByTestId('likes-button');

	fireEvent.click(likeButton);
	const totalLikes = getByText('1');
});

test.skip('When Like is Clicked Heart should turn red', () => {
	const { getByText, getByTestId } = render(<Likes />);
	const likeButton = getByTestId('likes-button');

	fireEvent.click(likeButton);
	const redLikeButton = getByTestId('hearted-like');
	expect(redLikeButton.getAttribute('class')).toBe('red heart large icon');
});
