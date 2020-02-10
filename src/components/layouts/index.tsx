import * as React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { Box, Grommet, Header } from 'grommet';
import { Anchor, Nav } from 'grommet';
import { Github, Linkedin, Twitter } from 'grommet-icons';
import { anchor } from './index.module.css';

const CustomBox = styled(Box)`
  height: 90%;
  width: 100%;
` 
const CustomHeader = styled(Header)`
  font-size: 3rem;
  margin: 20px 0px 60px;
  color: #B3EFFF;
`
const Layout = ({ children, title }) => (
	<Grommet themeMode={'dark'} full>
		<Helmet
			meta={[{ name: 'description', content: 'Technical Blog' }]}
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
			<title>{title}</title>
		</Helmet>
		<CustomBox
			align={'center'}
      animation={'fadeIn'}
      direction="column"
    >
	 <CustomHeader>Posts</CustomHeader>
			{children}
		</CustomBox>
    <Nav direction="row" pad="medium">
				<Anchor
					icon={<Github />}
					hoverIndicator
					href="http://github.com/ryanbas21"
				/>
				<Anchor
					icon={<Linkedin />}
					hoverIndicator
					href="https://www.linkedin.com/in/ryanbas21/"
				/>
				<Anchor
					icon={<Twitter />}
					hoverIndicator
					href="https://twitter.com/ryanbas21"
				/>
    </Nav>
	</Grommet>
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
