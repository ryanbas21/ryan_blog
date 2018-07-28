import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import Link from 'gatsby-link';
import { length, slice } from 'ramda';
// import Tag from '../../components/tags/'../tags/;

interface CardProps {
	id: string;
	path: string;
	title: string;
	date: string;
	media?: any;
	content: string;
	tags: string;
	style: { margin: number };
}

const Cards: React.SFC<CardProps> = function CardsComp(props) {
	const { content } = props;
	const contentLength =
		length(content) > 100 ? slice(0, 100, content) : 'Click to Read';
	return (
		<Card fluid style={props.style} as={Link} to={props.path}>
			{props.media ? <Image src={props.media} /> : null}
			<Card.Content>
				<Card.Header>{props.title}</Card.Header>
				<Card.Meta>{props.date}</Card.Meta>
				<Card.Description>
					<div
						dangerouslySetInnerHTML={{
							__html: contentLength + '...'
						}}
					/>
				</Card.Description>
			</Card.Content>
		</Card>
	);
};

export default Cards;
