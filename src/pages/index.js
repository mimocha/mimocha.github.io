// React
import React from "react"
import { Link } from "gatsby"

// HTML / CSS
import styles from "../styles/index.module.scss"
import Header from "../components/header"
import Button from "../components/buttons"


/* ========================= Header ========================= */
const Hero = () => (
<div className={styles.jumbotron + " jumbotron"}>
	<h1 className={styles.text}>
		Hello World!
	</h1>
	<p className={styles.text + " lead"}>
		I'm Chawit. I study artificial intelligence, and I code for fun!
	</p>

	<hr className="my-4"></hr>

	<div className={styles.buttonContainer}>
		<Button link="/showcase" type="internal" size="btn-lg">
			My work
		</Button>
		<Button link="/about" type="internal" size="btn-lg">
			About me
		</Button>
		<Button link="/contact" type="internal" size="btn-lg">
			Contact me
		</Button>
	</div>
</div>
)



/* ========================= Output ========================= */
const IndexPage = () => (
<main className="cover-container d-flex w-100 h-100">
	<Header />
	<Hero />
</main>
)

export default IndexPage
