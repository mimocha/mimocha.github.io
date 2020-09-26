// React
import React from "react"

// HTML / CSS
import Header from "../components/header"
import Button from "../components/buttons"
import styles from "../styles/index.module.scss"


/* ========================= Header ========================= */
const Hero = () => (
<div className={styles.hero}>
	<h1 className={styles.text}>
		Hello World!
	</h1>
	<p className={styles.text + " lead"}>
		I'm Chawit. I study artificial intelligence, and I code for fun!
	</p>

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
<main>
	<Header />
	<div className={styles.cover}>
		<Hero />
	</div>
</main>
)

export default IndexPage
