import React from "react"
import { Link } from "gatsby"

import styles from "../styles/nav-tool.module.scss"

const NavHead = () => (
	<div className={styles.container}>
		<a className="top" />
		<Link to="/">Back Home</Link>
	</div>
)

export default NavHead