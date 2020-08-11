import React from "react"
import { Link } from "gatsby"

import styles from "../styles/nav-tool.module.scss"

const header = (
	<div className={styles.container}>
		<Link to="/">Back Home</Link>
	</div>
)

function NavHead (props) {
	// Draws footer when not on index
	if (props.isHome) {
		return null
	} else {
		return header
	}
}

export default NavHead