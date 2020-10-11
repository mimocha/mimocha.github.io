module.exports = {
	siteMetadata: {
		title: `Chawit Leosrisook | Github.io`,
		description: `Chawit's personal portfolio website`,
		author: `mimocha`,
		},
	plugins: [
		'gatsby-plugin-sass',
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
				"excerpt_separator": `<!-- endexcerpt -->`
			},
		},
	],
}
