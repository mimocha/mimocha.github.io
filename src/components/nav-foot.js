import React from "react"
import { Link } from "gatsby"

import styles from "../styles/nav-tool.module.scss"

const NavFoot = () => (
	<div className={styles.container}>
		<p><Link to="/">Back Home</Link></p>
		<p><a href="#top">Go to Top</a></p>
		<p>Chawit Leosrisook 2020</p>
	</div>
)

export default NavFoot