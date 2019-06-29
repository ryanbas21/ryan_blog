require('dotenv').config();
module.exports = {
	siteMetadata: {
		title: `Ryan Bas Blog`,
		siteUrl: `https://www.ryanbas.com`
	},
	plugins: [
		`gatsby-plugin-sharp`,
		`gatsby-plugin-postcss`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-typescript`,
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-webpack-bundle-analyser-v2`,
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: process.env.SPACE_ID,
				// Learn about environment variables: https://gatsby.dev/env-vars
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
			}
		},
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: 'https://www.ryanbas.com',
				sitemap: 'https://www.ryanbas.com/sitemap.xml',
				env: {
					development: {
						policy: [{ userAgent: '*', disallow: ['/'] }]
					},
					production: {
						policy: [{ userAgent: '*', allow: '/' }]
					}
				}
			}
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [`gatsby-remark-smartypants`]
			}
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [`gatsby-remark-smartypants`]
			}
		},
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
						resolve: `gatsby-remark-prismjs`,
						options: {
							classPrefix: 'language-',
							inlineCodeMarker: null,
							aliases: {},
							showLineNumbers: false,
							noInlineHighlight: false
						}
					},
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							classPrefix: 'language-',
							inlineCodeMarker: null,
							aliases: {},
							showLineNumbers: false,
							noInlineHighlight: false
						}
					},
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
				name: `Ryan Bas Blog`,
				short_name: `RyanBas.com`,
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
		`gatsby-plugin-offline`,
		{
			resolve: `gatsby-plugin-purgecss`,
			options: {
				printRejected: true, // Print removed selectors and processed file names
				develop: true, // Enable while using `gatsby develop`
				tailwind: true, // Enable tailwindcss support
				whitelist: ['whitelist'], // Don't remove this selector
				ignore: ['/ignored.css', 'prismjs/', 'semantic-ui-css/'] // Ignore files/folders
				purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
			}
		}
	]
};
