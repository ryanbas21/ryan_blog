module.exports = {
	siteMetadata: {
		title: `Ryan's Blog`
	},
	plugins: [
		`gatsby-plugin-sharp`,
		`gatsby-plugin-postcss`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-typescript`,
		// `gatsby-plugin-typescript-css-modules`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/src/posts`,
				name: 'markdown-pages'
			}
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-copy-linked-files',
						ignoreFileExtensions: []
					},
					{
						resolve: `gatsby-remark-images`,
						options: {
							ignoreFileExtensions: [],
							maxWidth: 700
						}
					}
				]
			}
		},
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`
			}
		}
	]
};
