import * as React from 'react';

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
