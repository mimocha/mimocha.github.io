module.exports = {
	siteMetadata: {
		title: `Chawit Leosrisook | Github.io`,
		description: `Chawit's personal portfolio website`,
		author: `mimocha`,
		},
	plugins: [
		'gatsby-plugin-sass',
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-transition-link`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `src`,
				path: `${__dirname}/src/`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				commonmark: true,
				pedantic: false,
				// GitHub Flavored Markdown mode (default: true)
				gfm: true,
				// Custom excerpt separator
				"excerpt_separator": `<!-- endexcerpt -->`,
				plugins: [
					{
						// https://www.gatsbyjs.com/plugins/gatsby-remark-images
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 500,
							linkImagesToOriginal: true,
							backgroundColor: "none",
							disableBgImageOnAlpha: true,
							quality: 80,
							withWebp: true,
							showCaptions: ['title'],
							markdownCaptions: true,
						},
					},
					{
						// https://www.gatsbyjs.com/plugins/gatsby-remark-vscode
						resolve: `gatsby-remark-vscode`,
						options: {
							theme: 'Solarized Light',
							inlineCode: {
								theme: 'Solarized Light',
								marker: '•'
							}
						}
					}
				],
			},
		},
	],
}
