module.exports = {
	siteMetadata: {
		title: `Ryan's Blog`
	},
	plugins: [
		`gatsby-plugin-typescript`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/src/posts`,
				name: 'markdown-pages'
			}
		},
		`gatsby-transformer-remark`
	]
};
