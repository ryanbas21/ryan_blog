const { forEach, split, toLower, join, compose } = require('ramda');
const path = require('path');
const slash = require('slash');

const toSlug = compose(
	toLower,
	join('-'),
	split(' ')
);

exports.createPages = ({ graphql, boundActionCreators }) => {
	const { createPage } = boundActionCreators;
	return new Promise((resolve, reject) => {
		graphql(
			`
				{
					allContentfulBlogPost {
						edges {
							node {
								id
								title
								content {
									content
								}
                date
							}
						}
					}
				}
			`
		).then((result) => {
			if (result.errors) {
				reject(result.errors);
			}
			const productTemplate = path.resolve(`src/features/blog/index.tsx`);
			forEach((edge) => {
				createPage({
					path: `/` + edge.node.id,
					component: slash(productTemplate),
					context: {
						id: edge.node.id
					}
				});
			}, result.data.allContentfulBlogPost.edges);
      resolve();
		});
	});
};
