const { forEach, split, toLower, join, compose } = require('ramda');
const path = require('path');
const slash = require('slash');

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;
	return new Promise((resolve, reject) => {
		graphql(`
			{
				allContentfulPost {
					edges {
						node {
							title
							subHeader
							content {
								content
							}
							id
						}
					}
				}
			}
		`).then((result) => {
			const productTemplate = path.resolve(`src/templates/template.tsx`);
			forEach(({ node, ...other }) => {
				createPage({
					path: toPath(node.title),
					component: slash(productTemplate),
					context: {
						title: node.title
					}
				});
			}, result.data.allContentfulPost.edges);
			resolve();
		});
	});
};

function toPath(title) {
	return title.replace(/ /gm, '-').toLowerCase();
}
