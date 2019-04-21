import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Loading from '../components/loading';
import { map } from 'ramda';
const Card = React.lazy(() => import('../components/card'));
const Layout = React.lazy(() => import('../components/layouts/index'));

const style = {
	margin: 20
};

interface IndexProps {
	title;
	content;
}

const Index: React.SFC<IndexProps> = function IndexComponent(props) {
	return (
		<React.Suspense fallback={() => <Loading />}>
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
		</React.Suspense>
	);
};

function toPath(title) {
	return title.replace(/ /gm, '-').toLowerCase();
}
export const PageQuery = ({ children, ...rest }) => {
	return (
		<StaticQuery
			query={graphql`
				query Name {
					allContentfulPost(sort: { order: DESC, fields: [subHeader] }) {
						edges {
							node {
								id
								title
								subHeader(formatString: "MM/DD/YY")
								tags
							}
						}
					}
				}
			`}
			render={(data) => <Index {...data} />}
		/>
	);
};

export default PageQuery;
