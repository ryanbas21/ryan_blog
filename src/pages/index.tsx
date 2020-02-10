import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { map } from 'ramda';
import { container } from './index.module.css'
import Card from '../components/card';
import Layout from '../components/layouts/index';

interface IndexProps {
	title;
	content;
}

const Index: React.SFC<IndexProps> = function IndexComponent(props) {
	return (
		<Layout>
			<div className={container}>
				{map(
					({ node: { tags, id, title, subHeader } }) => (
						<Card
							id={id}
							path={toPath(title)}
							key={id}
							title={title}
							date={subHeader}
						/>
					),
					props.allContentfulPost.edges
				)}
            
			</div>
		</Layout>
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
