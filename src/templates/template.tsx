import * as React from 'react';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { graphql } from 'gatsby';
import { slice, head, prop, pipe } from 'ramda';
import styles from './page.module.css';

interface BlogPostProps {
	data: {
		contentfulPost: {
			content: { content };
			subHeader;
			title;
		};
	};
}

const frontmatterProp = prop('frontmatter');
const titleProp = prop('title');
const dateProp = prop('subHeader');
const contentProp = prop('content');
const valueProp = prop('value');
const grabContent = pipe(
	contentProp,
	contentProp,
	JSON.parse,
	contentProp
);
const grabTitle = pipe(titleProp);
const grabDate = pipe(
	dateProp,
	slice(0, 10)
);

const document = (content) => ({
	nodeType: 'document',
	data: {},
	content
});
const options = {
	renderNode: {
		[BLOCKS.EMBEDDED_ASSET]: (node) => {
			const { title, description, file } = node.data.target.fields;
			const mimeType = file['en-US'].contentType;
			const mimeGroup = mimeType.split('/')[0];

			switch (mimeGroup) {
				case 'image':
					return (
						<img
							title={title ? title['en-US'] : null}
							alt={description ? description['en-US'] : null}
							src={file['en-US'].url}
						/>
					);
				default:
					return (
						<span style={{ backgroundColor: 'red', color: 'white' }}>
							{mimeType} embedded asset{' '}
						</span>
					);
			}
		}
	}
};
const BlogPost: React.SFC<BlogPostProps> = function Template(props) {
	const {
		data: { contentfulPost }
	} = props;
	return (
		<div className={styles.center}>
			<div className={styles.margin}>
				<h2>{grabTitle(contentfulPost)} </h2>
				<i>{grabDate(contentfulPost)}</i>
				<div className={styles.postMargin} />
				{documentToReactComponents(
					document(grabContent(contentfulPost)),
					options
				)}
			</div>
		</div>
	);
};

export default BlogPost;
export const pageQuery = graphql`
	query BlogPostByPath($path: String!) {
		contentfulPost {
			title
			subHeader
			content {
				content
			}
		}
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
