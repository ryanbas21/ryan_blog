import React from 'react';
import styled from 'styled-components';
import { Box, Header, Stack } from 'grommet'
import { Link } from 'gatsby';
import { pipe, length, always, lt, ifElse, slice } from 'ramda';

const CustomBox = styled(Box)`
  width: 100%;
  padding: 10px;
`
const CustomStack = styled(Stack)`
  color: #B3EFFF;
`
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
	const { path, title, date } = props;
	return (
    <CustomBox direction={"column"} align={'center'} alignSelf={'center'}>
        <Header to={`/${path}`} as={Link}>{title}</Header>
        <CustomStack>{date}</CustomStack>
		</CustomBox>
	);
};

export default Cards;
