import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import Link from 'gatsby-link';
import { toSlug } from '../../utils/';
import contentful from '../../utils/contentful-client';

interface CardProps {
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
	componentDidMount() {
		contentful.getEntries().then((a) => console.log(a));
	}
	render() {
		return (
			<Card
				fluid
				style={this.props.style}
				as={Link}
				to={toSlug(this.props.title)}>
				{this.props.media ? <Image src={this.props.media} /> : null}
				<Card.Content>
					<Card.Header>{this.props.title}</Card.Header>
					<Card.Meta>{this.props.date}</Card.Meta>
					<Card.Description>
						{this.props.content.slice(0, 100)}
					</Card.Description>
				</Card.Content>
			</Card>
		);
	}
}

export default Cards;
