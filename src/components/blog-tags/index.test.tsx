import React from 'react';
import {
	render,
	fireEvent,
	cleanup,
	waitForElement
} from 'react-testing-library';
import 'jest-dom/extend-expect';
import Tags from './index';

afterEach(cleanup);

test('Tags are rendered', () => {
	const tags = 'Functional Programming, Pure Functions';
	const { getByText } = render(<Tags tags={tags} />);
	expect(getByText('Functional Programming')).toBeTruthy();
	expect(getByText('Pure Functions')).toBeTruthy();
});
