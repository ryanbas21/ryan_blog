import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './index';

storiesOf(`Card`, module).add(`default`, () => {
	const props = {
		title: 'Title',
		date: '11/03/91',
		content: 'some content',
		id: '0',
		path: '/path',
		tags: 'FP, TS, Vim'
	};
	return <Card {...props} />;
});
