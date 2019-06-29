import * as React from 'react';
import { Anchor, Nav } from 'grommet';
import { Github, Linkedin, Twitter } from 'grommet-icons';
import { StaticQuery, graphql } from 'gatsby';
import { map } from 'ramda';
import { anchor, container, fadeIn } from './index.module.css'
import Card from '../components/card';
import Layout from '../components/layouts/index';
{/* import { TransitionGroup } from 'react-transition-group'; */}

const style = {
	margin: 20
};

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
							style={style}
							id={id}
							path={toPath(title)}
							key={id}
							title={title}
							date={subHeader}
						/>
					),
					props.allContentfulPost.edges
				)}
            <Nav direction="row" background="brand" pad="medium" className={anchor}>
                <Anchor icon={<Github />} hoverIndicator href="http://github.com/ryanbas21" />
                <Anchor icon={<Linkedin />} hoverIndicator href="https://www.linkedin.com/in/ryanbas21/" />
                <Anchor icon={<Twitter />} hoverIndicator href="https://twitter.com/ryanbas21"/>
            </Nav>
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
