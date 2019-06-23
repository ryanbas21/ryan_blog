import React from 'react';
import { Card } from 'semantic-ui-react';
import { Link } from 'gatsby';
import { pipe, length, always, lt, ifElse, slice } from 'ramda';
import Loading from '../loading';
const Tag = React.lazy(() => import('../blog-tags'));

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
const lengthLessThan100 = pipe(
	length,
	lt(100)
);
const sliceFirst100 = slice(0, 100);

const Cards: React.SFC<CardProps> = function CardsComp(props) {
	const { path, style, content, tags, title, date } = props;
	const contentLength = ifElse(
		lengthLessThan100,
		sliceFirst100,
		always('Click to Read')
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
				<React.Suspense fallback={<Loading />}>
					<Tag tags={tags} />
				</React.Suspense>
			</Card.Content>
		</Card>
	);
};

export default Cards;
