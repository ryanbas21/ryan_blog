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
		`gatsby-transformer-typescript-css-modules`,
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: 'https://www.example.com',
				sitemap: 'https://www.example.com/sitemap.xml',
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
							// Class prefix for <pre> tags containing syntax highlighting;
							// defaults to 'language-' (eg <pre class="language-js">).
							// If your site loads Prism into the browser at runtime,
							// (eg for use with libraries like react-live),
							// you may use this to prevent Prism from re-processing syntax.
							// This is an uncommon use-case though;
							// If you're unsure, it's best to use the default value.
							classPrefix: 'language-',
							// This is used to allow setting a language for inline code
							// (i.e. single backticks) by creating a separator.
							// This separator is a string and will do no white-space
							// stripping.
							// A suggested value for English speakers is the non-ascii
							// character '›'.
							inlineCodeMarker: null,
							// This lets you set up language aliases.  For example,
							// setting this to '{ sh: "bash" }' will let you use
							// the language "sh" which will highlight using the
							// bash highlighter.
							aliases: {},
							// This toggles the display of line numbers globally alongside the code.
							// To use it, add the following line in src/layouts/index.js
							// right after importing the prism color scheme:
							//  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
							// Defaults to false.
							// If you wish to only show line numbers on certain code blocks,
							// leave false and use the {numberLines: true} syntax below
							showLineNumbers: false,
							// If setting this to true, the parser won't handle and highlight inline
							// code used in markdown i.e. single backtick code like `this`.
							noInlineHighlight: false
						}
					},
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							// Class prefix for <pre> tags containing syntax highlighting;
							// defaults to 'language-' (eg <pre class="language-js">).
							// If your site loads Prism into the browser at runtime,
							// (eg for use with libraries like react-live),
							// you may use this to prevent Prism from re-processing syntax.
							// This is an uncommon use-case though;
							// If you're unsure, it's best to use the default value.
							classPrefix: 'language-',
							// This is used to allow setting a language for inline code
							// (i.e. single backticks) by creating a separator.
							// This separator is a string and will do no white-space
							// stripping.
							// A suggested value for English speakers is the non-ascii
							// character '›'.
							inlineCodeMarker: null,
							// This lets you set up language aliases.  For example,
							// setting this to '{ sh: "bash" }' will let you use
							// the language "sh" which will highlight using the
							// bash highlighter.
							aliases: {},
							// This toggles the display of line numbers globally alongside the code.
							// To use it, add the following line in src/layouts/index.js
							// right after importing the prism color scheme:
							//  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
							// Defaults to false.
							// If you wish to only show line numbers on certain code blocks,
							// leave false and use the {numberLines: true} syntax below
							showLineNumbers: false,
							// If setting this to true, the parser won't handle and highlight inline
							// code used in markdown i.e. single backtick code like `this`.
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
		`gatsby-plugin-offline`,
		{
			resolve: `gatsby-plugin-purgecss`,
			options: {
				printRejected: true, // Print removed selectors and processed file names
				develop: true, // Enable while using `gatsby develop`
				// tailwind: true, // Enable tailwindcss support
				whitelist: ['whitelist'], // Don't remove this selector
				ignore: ['/ignored.css', 'prismjs/', 'semantic-ui-css/'] // Ignore files/folders
				//purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
			}
		}
	]
};
