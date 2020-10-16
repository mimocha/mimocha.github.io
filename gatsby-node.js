// Use module.rules configurations to suppress webpack warning,
// about not having configured loaders.
// Refer to:
// https://www.gatsbyjs.com/docs/add-custom-webpack-config/
// https://webpack.js.org/concepts/#loaders
// https://webpack.js.org/concepts/loaders/
// https://webpack.js.org/loaders/
exports.onCreateWebpackConfig = ({
	stage,
	rules,
	loaders,
	plugins,
	actions,
}) => {
	actions.setWebpackConfig({
		module: {
			rules: [
				{ test: /\.md$/, use: 'raw-loader' },
				// Manually load audio files
				{ 
					test: [
						/\.mp3$/,
						/\.ogg$/
					], 
					use: 'file-loader' 
				},
			],
		},
		plugins: [
			plugins.define({
				__DEVELOPMENT__: stage === `develop` || stage === `develop-html`,
			}),
		],
	})
}


/* =========== Programmatically generating pages =========== */
// https://www.gatsbyjs.com/tutorial/part-seven/
// https://www.gatsbyjs.com/docs/mdx/programmatically-creating-pages/#generate-slugs
const path = require(`path`)

exports.onCreateNode = ({ node, actions }) => {
	const { createNodeField } = actions

	// Use regex to match parts of the absolute file path instead
	// Uses `/content/folder_name/` as slug
	// This requires one page per folder
	if (node.internal.type === "MarkdownRemark") {
		const path = node.fileAbsolutePath.match(/\/content.*\//)
		createNodeField({
			node,
			name: "slug",
			value: path[0],
		})
	}
}

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	// **Note:** The graphql function call returns a Promise
	// see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
	const result = await graphql(`
		query {
			allMarkdownRemark {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
		}
	`)

	result.data.allMarkdownRemark.edges.forEach(
		({ node }) => {
			createPage({
				path: node.fields.slug,
				component: path.resolve(`./src/template/contents.jsx`),
				context: {
					// Data passed to context is available
					// in page queries as GraphQL variables.
					slug: node.fields.slug,
				},
			})
		}
	)
}