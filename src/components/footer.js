import React from "react"
// import {Link} from "gatsby"

import styles from "../styles/footer.module.scss"

const Footer = () => (
	<footer className="bg-dark">
		<div className={styles.text}>
			<p className="text-muted">© Chawit Leosrisook 2020</p>
			<a href="#">Back to top</a>
		</div>
	</footer>
)

export default Footer