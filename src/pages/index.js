import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import styles from "../styles/index.module.scss"

const Hero = () => (
<div className={styles.jumbotron + " jumbotron"}>
	<h1 className={styles.text + " display-4 text-monospace"}>
		Hello World!
	</h1>
	<p className={styles.text + " lead text-monospace"}>
		I'm Chawit. I study artificial intelligence, and I code for fun!
	</p>
	<hr className="my-4"></hr>
	<div className="container">
		<Link to="/about" className={styles.button + " btn btn-lg"}>
			About me
		</Link>
		<Link to="/contact" className={styles.button + " btn btn-lg"}>
			Contact me
		</Link>
	</div>
</div>
)

const Showcase = () => (
<div>
	<h1>Showcase Selections</h1>
</div>
)

const IndexPage = () => (
<Layout>
	<Hero />
	<Showcase />
</Layout>
)

export default IndexPage
