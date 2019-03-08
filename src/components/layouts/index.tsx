import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Header from '../header';
// import Search from '../components/search/index';
// import Navbar from '../components/navbar';
import './index.css';
import 'semantic-ui-css/semantic.min.css';

const Layout = ({ children, data }) => (
	<div>
		<Helmet
			meta={[
				{ name: 'description', content: 'Sample' },
				{ name: 'keywords', content: 'sample, something' }
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
