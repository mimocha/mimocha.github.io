import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import styles from "../styles/index.module.scss"

const IndexPage = () => (
<Layout>
	<div className={styles.jumbotron + " jumbotron"}>
		<h1 className={styles.text + " display-4 text-monospace"}>
			Hello World!
		</h1>
		<p className={styles.text + " lead text-monospace"}>
			I'm Chawit. I study artificial intelligence, and I code for fun!
		</p>
		<hr className="my-4"></hr>
		<div className="container">
			<Link to="/about" className="btn btn-warning btn-lg shadow-sm mx-1">
				About me
			</Link>
			<Link to="/contact" className="btn btn-warning btn-lg shadow-sm mx-1">
				Contact me
			</Link>
		</div>
	</div>

	<div>
		<h1>Showcase Selections</h1>
	</div>
</Layout>
)

export default IndexPage
