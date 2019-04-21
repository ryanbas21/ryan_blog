import * as React from 'react';
import { graphql } from 'gatsby';
import { prop, pipe } from 'ramda';
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

const frontmatterProp = prop('frontmatter');
const titleProp = prop('title');
const dateProp = prop('date');
const htmlProp = prop('html');

const grabTitle = pipe(
	frontmatterProp,
	titleProp
);
const grabDate = pipe(
	frontmatterProp,
	dateProp
);

const BlogPost: React.SFC<BlogPostProps> = function Template(props) {
	const {
		data: { markdownRemark }
	} = props;
	return (
		<div className={styles.center}>
			<div className={styles.margin}>
				<h2>{grabTitle(markdownRemark)} </h2>
				<i>{grabDate(markdownRemark)}</i>
				<div
					className={styles.postMargin}
					dangerouslySetInnerHTML={{ __html: htmlProp(markdownRemark) }}
				/>
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
