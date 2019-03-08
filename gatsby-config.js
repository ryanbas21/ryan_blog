module.exports = {
	siteMetadata: {
		title: `Ryan's Blog`
	},
	plugins: [
		`gatsby-plugin-postcss`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-typescript`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/src/posts`,
				name: 'markdown-pages'
			}
		},
		`gatsby-transformer-remark`,
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`
			}
		}
	]
};
