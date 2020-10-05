// React
import React from "react"

// HTML / CSS
import styles from "../styles/footer.module.scss"

const Footer = () => (
	<footer className={styles.footer}>
		<div className={styles.text}>
			<p className={styles.name}>© Chawit Leosrisook 2020</p>
			<a href="#">Back to top</a>
		</div>
	</footer>
)

export default Footer