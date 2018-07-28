import * as React from 'react';
import { map } from 'ramda';
import Link from 'gatsby-link';
import Card from '../components/card';
import About from '../components/about';

const style = {
	margin: 20
};

interface node {
	node: {
		frontmatter: {
			date: string;
			path: string;
		};
		html: string;
	};
}
interface IndexProps {
	data: {
		edges: {
			allMarkdownRemark: {
				edges: node[];
			};
		};
	};
}
const Index: React.SFC<IndexProps> = function IndexComponent(props) {
	return (
		<div>
			<About />
			<h1>Some recent posts</h1>
			{map(
				({ node }) => (
					<Card
						path={node.frontmatter.path}
						key={node.id}
						title={node.frontmatter.title}
						date={node.frontmatter.date}
						content={node.html}
					/>
				),
				props.data.allMarkdownRemark.edges
			)}
		</div>
	);
};

export const pageQuery = graphql`
	query LoadAll {
		allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date] }
			limit: 1000
		) {
			edges {
				node {
					id
					html
					frontmatter {
						path
						title
						date
					}
				}
			}
		}
	}
`;

export default Index;
