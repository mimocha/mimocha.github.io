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
	for (i=0; i<props.md.length; i++) {
		// Parse Markdown frontmatter
		const fm = props.md[i].node.frontmatter;
		console.log("Markdown:", props.md[i].node);

		// TODO:
		// generate new page for main content html
		// use: dangerouslySetInnerHTML={{ __html: body }}
		// see: https://www.gatsbyjs.com/docs/adding-markdown-pages/
		// const body = mdNode.html;

		CardElements.push(
			<Cards 
				header={fm.title != null ? fm.title : null}
				image={fm.image != null ? 
					require(`../${fm.image.relativePath}`)
					: null}
				link={fm.link != null ? fm.link : null}
				text={fm.excerpt != null ? fm.excerpt : null}
				footer={fm.date != null ? fm.date : null}

				key={i}
				interactive={true}

				// set sizes
				regular={fm.size==="regular" ? true : false}
				wide={fm.size==="wide" ? true : false}
				tall={fm.size==="tall" ? true : false}
				large={fm.size==="large" ? true : false}
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
		<RenderCards
			md={props.data.allMarkdownRemark.edges}
		/>
	</Cardbox>
</div>
)



/* ==================== Output ==================== */
const ShowcasePage = () => {
	// graphQL query -- pass to: Showcase > RenderCards
	const data = useStaticQuery(
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
					link
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