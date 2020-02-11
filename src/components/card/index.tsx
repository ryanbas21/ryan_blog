import React from 'react';
import styled from 'styled-components';
import { Box, Header, Stack } from 'grommet'
import { Link } from 'gatsby';
import { pipe, length, always, lt, ifElse, slice } from 'ramda';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'
import { center } from './index.module.css'

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
  const trackClick = () => trackCustomEvent({
          category: "Post",
          // string - required - Type of interaction (e.g. 'play')
          action: "Click",
          // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
          label: title,
          // number - optional - Numeric value associated with the event. (e.g. A product ID)
          value: 43
  });
	return (
    <CustomBox direction={"column"} align={'center'} alignSelf={'center'}>
        <Box align={'center'} onClick={trackClick}>
          <Header to={`/${path}`} as={Link}>{title}</Header>
          <CustomStack>{date}</CustomStack>
        </Box>
		</CustomBox>
	);
};

export default Cards;
