// React
import React from "react"
import { graphql } from "gatsby"

// HTML / CSS
import Layout from "../components/layout"
import styles from "../styles/contents.module.scss"

const BlogTemplate = ({ data }) => {
	const post = data.markdownRemark;
	const url = post.fields.slug.match(/content\/.*\//);

	// Max length set in header.module.scss -> $char-n: 50
	// FA icon + "content>" is 9 characters
	// This limit is entirely arbitrary. As long as brand text doesn't overflow
	// Navbar, any length should be fine. However, it requires defining $char-n
	// to a high value, which creates extra scss rules with mixins. It is 
	// unclear whether or not this will incur any performance cost.
	let brandText = url[0];
	if (brandText.length > 50) {
		brandText = brandText.slice(0,50);
	}
	
	return (
		<Layout brand={brandText}>
			<div className={styles.contents} 
				dangerouslySetInnerHTML={{ __html: post.html }} />
		</Layout>
	)
}

export const query = graphql`
query($slug: String!) {
	markdownRemark(fields: { slug: { eq: $slug } }) {
		fields {
			slug
		}
		html
		frontmatter {
			title
			date
			image {
				relativePath
				relativeDirectory
				base
				id
			}
			size
			language
			tag
			type
			excerpt
		}
	}
}
`

export default BlogTemplate