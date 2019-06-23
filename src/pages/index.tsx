import React, { Suspense } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { map } from 'ramda';
const Card = React.lazy(() => import('../components/card'));
const Layout = React.lazy(() => import('../components/layouts/index'));

const style = {
	margin: 20
};

interface node {
	node: {
		frontmatter: {
			title: string;
			date: string;
			path: string;
			tags: string;
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
		<div>
			<Suspense fallback={<div>LOADING</div>}>
				<Layout>
					<div>
						{map(
							({ node }) => (
								<Suspense fallback={<div>NOT HERE YET</div>}>
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
								</Suspense>
							),
							props.allMarkdownRemark.edges
						)}
					</div>
				</Layout>
			</Suspense>
		</div>
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
