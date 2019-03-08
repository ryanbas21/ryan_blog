import * as React from 'react';
// import Comments from '../components/comment';
// import Likes from '../components/likes';
import { graphql } from 'gatsby';
import styles from './page.module.css';

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
	const {
		data: { markdownRemark }
	} = props;
	return (
		<div className={styles.center}>
			<div className={styles.margin}>
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
