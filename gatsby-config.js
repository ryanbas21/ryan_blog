module.exports = {
	siteMetadata: {
		title: `Blog`
	},
	plugins: [`gatsby-plugin-typescript`, {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: '5atqdoeqjhxa',
        accessToken: 'a6ba9e6ae20a0e77efc2f4c134845f8ba9742b12674551c8a3e688eee077b7a0'
      }
    }]
};
