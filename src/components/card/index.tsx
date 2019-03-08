import React from 'react';
import { Card } from 'semantic-ui-react';
import { Link } from 'gatsby';
import { pipe, length, always, lt, ifElse, slice } from 'ramda';
import Tag from '../blog-tags';

interface CardProps {
	id: string;
	path: string;
	title: string;
	date: string;
	content: string;
	tags: string[];
	media?: any;
	style: { margin: number };
}

const Cards: React.SFC<CardProps> = function CardsComp(props) {
	const { path, style, content, tags, title, date } = props;
	const contentLength = pipe(
		length,
		ifElse(lt(100), always(slice(0, 100, content)), always('Click to Read'))
	)(content);
	return (
		<Card fluid style={style} as={Link} to={path}>
			<Card.Content>
				<Card.Header content={title} />
				<Card.Meta content={date} />
				<Card.Description>
					<div
						dangerouslySetInnerHTML={{
							__html: contentLength + '...'
						}}
					/>
				</Card.Description>
			</Card.Content>
			<Card.Content extra>
				<Tag tags={tags} />
			</Card.Content>
		</Card>
	);
};

export default Cards;
