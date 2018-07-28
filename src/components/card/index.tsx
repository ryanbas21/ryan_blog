import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import Link from 'gatsby-link';
import { length, slice } from 'ramda';

interface CardProps {
	id: string;
	path: string;
	title: string;
	date: string;
	media?: any;
	content: string;
	style: { margin: number };
}
interface CardState {}

class Cards extends React.Component<CardProps, CardState> {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { content } = this.props;
		let contentLength =
			length(content) > 100 ? slice(0, 100, content) : 'Click to Read';
		return (
			<Card fluid style={this.props.style} as={Link} to={this.props.path}>
				{this.props.media ? <Image src={this.props.media} /> : null}
				<Card.Content>
					<Card.Header>{this.props.title}</Card.Header>
					<Card.Meta>{this.props.date}</Card.Meta>
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
	}
}

export default Cards;
