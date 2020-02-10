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
		`gatsby-plugin-styled-components`,
		{
			resolve: 'gatsby-plugin-html-attributes',
			options: {
				lang: 'en'
			}
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: process.env.SPACE_ID,
				// Learn about environment variables: https://gatsby.dev/env-vars
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
			}
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				// The property ID; the tracking code won't be generated without it
				trackingId: process.env.G_TRACKING_ID,
				// Defines where to place the tracking script - `true` in the head and `false` in the body
				head: false,
				// Setting this parameter is optional
				anonymize: true,
				// Setting this parameter is also optional
				respectDNT: true,
				// Avoids sending pageview hits from custom paths
				exclude: ['/preview/**'],
				// Delays sending pageview hits on route update (in milliseconds)
				pageTransitionDelay: 0,
				// Enables Google Optimize using your container Id
				// optimizeId: process.env.G_OPTIMIZE_ID,
				// // Enables Google Optimize Experiment ID
				// experimentId: 'YOUR_GOOGLE_EXPERIMENT_ID',
				// // Set Variation ID. 0 for original 1,2,3....
				// variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
				// Any additional optional fields
				sampleRate: 5,
				siteSpeedSampleRate: 10,
				cookieDomain: 'example.com'
			}
		},
		// {
		// 	resolve: `gatsby-source-contentful`,
		// 	options: {
		// 		spaceId: process.env.SPACE_ID,
		// 		// Learn about environment variables: https://gatsby.dev/env-vars
		// 		accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
		// 		host: `preview.contentful.com`
		// 	}
		// },
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
				// tailwind: true, // Enable tailwindcss support
				whitelist: ['whitelist'], // Don't remove this selector
				ignore: [] // Ignore files/folders
			}
		}
	]
};
