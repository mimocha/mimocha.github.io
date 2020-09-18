import React from "react"
import { Link } from "gatsby"

import styles from "../styles/nav-tool.module.scss"

const footer = (
	<div className={styles.content_footer}>
		<p><Link to="/">Back Home</Link></p>
		<p><a href="#top">Go to Top</a></p>
	</div>
)

function NavFoot () {
	// Draws footer when not at landing page
	if (window.location.pathname === "/") {
		return null
	} else {
		return footer
	}
}

export default NavFoot