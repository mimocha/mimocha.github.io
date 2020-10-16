// React
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// HTML / CSS
import Layout from "../components/layout"
import styles from "../styles/showcase.module.scss"
import Cards from "../components/cards.js"
import Cardbox from "../components/cardbox.js"


/* ==================== Card Showcase ==================== */
function RenderCards (props) {
	// Array of card elements to render
	let CardElements = [];

	// Iterate through data objects
	let i;
	for (i=0; i<props.data.length; i++) {
		// Parse Markdown frontmatter
		const fm = props.data[i].node.frontmatter;
		// Get generated page slug
		const slug = props.data[i].node.fields.slug;

		// Each page itself is rendered separately in gatsby-node.js
		// Pages are rendered programatically into the template contents.jsx
		// This card element will Link to the pages through the provided slug
		// Slug itself is also generated and set in gatsby-node.js
		CardElements.push(
			<Cards
				key={i}
				interactive={true}

				header={fm.title}
				image={fm.image != null ? 
					require(`../${fm.image.relativePath}`)
					: null}
				link={slug}
				text={fm.excerpt}
				footer={fm.date}
				size={fm.size}
			/>
		)
	}

	// Render
	return (CardElements)
};

const Showcase = (props) => (
<div className={styles.showcase}>
	<h1>Work Showcase</h1>
	<hr></hr>

	<Cardbox>
		{/* Programmatically render queried contents */}
		<RenderCards data={props.data.allMarkdownRemark.edges} />
	</Cardbox>
</div>
)



/* ==================== Output ==================== */
const ShowcasePage = () => {
// graphQL query -- pass to: Showcase > RenderCards
const data = useStaticQuery (
	graphql`query ShowcaseQuery {
		allMarkdownRemark(filter: {frontmatter: {type: {ne: "template"}}}) {
			edges {
				node {
					frontmatter {
						title
						date
						image {
							id
							relativePath
						}
						size
						type
						language
						tag
						excerpt
					}
					html
					parent {
						... on File {
							id
							name
							relativePath
							relativeDirectory
						}
					}
					fields {
						slug
					}
				}
			}
		}
	}`
)

return (
	<Layout>
		<Showcase data={data}/>
	</Layout>
)
}

export default ShowcasePage