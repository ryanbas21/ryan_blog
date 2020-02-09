import React from 'react';
import DummyPost from './dummy-post';
import { Grommet } from 'grommet'
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

test('Cards Component View Tests', () => {
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
  const { getByText } = render(<Grommet><Card {...props} /></Grommet>);

	expect(getByText(props.title).innerHTML).toBe(props.title);
	expect(getByText(props.date).innerHTML).toBe(props.date);
	expect(getByText(props.date).innerHTML).toBe(props.date);
});
