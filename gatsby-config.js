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
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `GatsbyJS`,
				short_name: `GatsbyJS`,
				start_url: `/`,
				background_color: `#f7f0eb`,
				theme_color: `#a2466c`,
				// Enables "Add to Homescreen" prompt and disables browser UI (including back button)
				// see https://developers.google.com/web/fundamentals/web-app-manifest/#display
				display: `standalone`,
				icon: `favicon.png`, // This path is relative to the root of the site.
				include_favicon: true // Include favicon
			}
		},
		`gatsby-plugin-offline`
	]
};
