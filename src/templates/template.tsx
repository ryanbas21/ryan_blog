import * as React from 'react';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';
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
const dataProp = prop('data');
const nodeProp = prop('node');
const contentfulPostProp = prop('allContentfulPost');
const edges = prop('edges');
const contentProp = prop('content');
const valueProp = prop('value');
const grabContent = pipe(
	dataProp,
	contentfulPostProp,
	edges,
	head,
	nodeProp,
	contentProp,
	contentProp,
	JSON.parse,
	contentProp
);
const grabTitle = pipe(
	dataProp,
	contentfulPostProp,
	edges,
	head,
	nodeProp,
	titleProp
);
const grabDate = pipe(
	dataProp,
	contentfulPostProp,
	edges,
	head,
	nodeProp,
	dateProp
);
const document = (content) => ({
	nodeType: 'document',
	data: {},
	content
});
const options = {
	renderNode: {
		[MARKS.CODE]: (node) => {
			return <pre>{node.value}</pre>;
		},
		[INLINES.HYPERLINK]: (node, next) => {
			return `<a href="${node.data.uri}">${next(node.content)}</a>`;
		},
		[INLINES.ENTRY_HYPERLINK]: (node, next) => {
			// TODO figure out how to use gatsby link
			return `<a href=''>${next(node.content)}</a>`;
		},
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
	return (
		<div className={styles.center}>
			<div className={styles.margin}>
				<h2>{grabTitle(props)} </h2>
				<i>{grabDate(props)}</i>
				<div className={styles.postMargin} />
				{documentToReactComponents(document(grabContent(props)), options)}
			</div>
		</div>
	);
};

export default BlogPost;
export const pageQuery = graphql`
	query BlogPostByPath($title: String!) {
		allContentfulPost(filter: { title: { eq: $title } }) {
			edges {
				node {
					title
					subHeader(formatString: "MM/DD/YY")
					content {
						content
					}
				}
			}
		}
	}
`;
