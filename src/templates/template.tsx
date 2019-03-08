import * as React from 'react';
// import Comments from '../components/comment';
// import Likes from '../components/likes';
import { StaticQuery, graphql } from 'gatsby';
import styles from './template.module.css';

interface BlogPostProps {
	data: {
		markdownRemark: {
			frontmatter: {
				date: string;
				path: string;
				title: string;
			};
			html: string;
		};
	};
}
const BlogPost: React.SFC<BlogPostProps> = function Template(props) {
	console.log(props);
	const {
		data: { markdownRemark }
	} = props;
	return (
		<div className={styles.margin}>
			<div classname={styles.center}>
				<h2>{markdownRemark.frontmatter.title} </h2>
				<i>{markdownRemark.frontmatter.date}</i>
				<div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
			</div>
		</div>
	);
};

export default BlogPost;
export const pageQuery = graphql`
	query BlogPostByPath($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				path
				title
			}
		}
	}
`;
