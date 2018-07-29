import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import Link from 'gatsby-link';
import { length, slice } from 'ramda';
import Tag from '../tags';

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
	const { path, style, content, tags, media, title, date } = props;
	const contentLength =
		length(content) > 100 ? slice(0, 100, content) : 'Click to Read';
	return (
		<Card fluid style={style} as={Link} to={path}>
			{media ? <Image src={media} /> : null}
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
