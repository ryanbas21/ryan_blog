import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { map } from 'ramda';
import Card from '../components/card';
import Layout from '../components/layouts/index';

const style = {
	margin: 20
};

interface node {
	node: {
		frontmatter: {
			title: string;
			date: string;
			path: string;
			tags: string[];
		};
		id: string;
		html: string;
	};
}
interface IndexProps {
	allMarkdownRemark: {
		edges: node[];
	};
}

const Index: React.SFC<IndexProps> = function IndexComponent(props) {
	return (
		<Layout>
			<div>
				{map(
					({ node }) => (
						<Card
							style={style}
							id={node.id}
							path={node.frontmatter.path}
							key={node.id}
							title={node.frontmatter.title}
							date={node.frontmatter.date}
							content={node.html}
							tags={node.frontmatter.tags}
						/>
					),
					props.allMarkdownRemark.edges
				)}
			</div>
		</Layout>
	);
};

export const PageQuery = ({ children }) => (
	<StaticQuery
		query={graphql`
			query LoadAll {
				allMarkdownRemark(
					sort: { order: ASC, fields: [frontmatter___date] }
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
								tags
							}
						}
					}
				}
			}
		`}
		render={(data) => <Index {...data} />}
	/>
);

export default PageQuery;
