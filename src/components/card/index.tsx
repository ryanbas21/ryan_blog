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
	const { path, style, title, date } = props;
	return (
		<Box style={style} direction={"column"} align={'center'} alignSelf={'center'}>
        <Header to={path} as={Link}>{title}</Header>
        <Stack>{date}</Stack>
		</Box>
	);
};

export default Cards;
