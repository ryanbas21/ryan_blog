import React from 'react';
import { Box, Header, Stack } from 'grommet'
import { Link } from 'gatsby';
import { pipe, length, always, lt, ifElse, slice } from 'ramda';

interface CardProps {
	id: string;
	path: string;
	title: string;
	date: string;
	content: string;
	tags: string;
	media?: any;
	style: { margin: number };
}

const sliceDate = slice(0, 10);
const Cards: React.SFC<CardProps> = function CardsComp(props) {
	const { path, style, content, tags, title, date } = props;
	return (
		<Box style={style} as={Link} to={path} direction={"column"} align={'center'} alignSelf={'center'}>
        <Header>{title}</Header>
        <Stack>{date}</Stack>
		</Box>
	);
};

export default Cards;
