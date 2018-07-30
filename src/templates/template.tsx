import * as React from 'react';
import Comments from '../components/comment';
import styles from './template.module.css';

interface BlogPostProps {
	data: {
		markdownRemark: {
			title: string;
			date: string;
			html: string;
		};
	};
}
const BlogPost: React.SFC<BlogPostProps> = function Template(props) {
	const {
		data: { markdownRemark }
	} = props;
	return (
		<div>
			<h2>{markdownRemark.frontmatter.title} </h2>
			<i>{markdownRemark.frontmatter.date}</i>
			<div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
			<Comments styles={styles} />
		</div>
	);
};

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

export default BlogPost;
