import * as React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import './index.css';
import 'semantic-ui-css/semantic.min.css';

const Layout = ({ children }) => (
	<div>
		<Helmet
			meta={[
				{ name: 'description', content: 'Sample' },
				{ name: 'keywords', content: 'sample, something' }
			]}
			link={[
				{
					rel: 'shortcut icon',
					type: 'image/png',
					href: '../../../favicon.ico'
				}
			]}>
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
			/>
		</Helmet>
		<div
			style={{
				margin: '0 auto',
				maxWidth: 960,
				padding: '0px 1.0875rem 1.45rem',
				paddingTop: 0
			}}>
			{children}
		</div>
	</div>
);

export default Layout;

export const query = graphql`
	query SiteTitleQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`;
