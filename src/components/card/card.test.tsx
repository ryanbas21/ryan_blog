import React from 'react';
import DummyPost from './dummy-post';
import {
	render,
	fireEvent,
	cleanup,
	waitForElement
} from 'react-testing-library';
import 'jest-dom/extend-expect';
import { createMemoryHistory } from 'history';
import Card from './';

afterEach(cleanup);

test.skip('Cards Component View Tests', () => {
	(global as any).___loader = {
		enqueue: jest.fn()
	};
	const props = {
		id: 'id',
		path: '/first-post',
		title: 'My First Post',
		date: '10/20/15',
		content: DummyPost,
		tags: 'First, Post',
		style: { margin: 5 }
	};
	const { getByText } = render(<Card {...props} />);
	const expected =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque urna est, euismod quis feugiat vita...';

	expect(getByText(props.title).innerHTML).toBe(props.title);
	expect(getByText(props.date).innerHTML).toBe(props.date);
	expect(getByText(expected).innerHTML).toBe(expected);
	expect(getByText(props.date).innerHTML).toBe(props.date);
});
