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
<div className="carousel slide" data-ride="carousle" 
	id="carouselExampleControls">
	<div className="carousel-inner">
		<div className={styles.one + " carousel-item active"}>
			One
		</div>
		<div className={styles.two + "carousel-item"}>
			Two
		</div>
		<div className={styles.three + "carousel-item"}>
			Three
		</div>
		<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
			<span class="carousel-control-prev-icon" aria-hidden="true"></span>
			<span class="sr-only">Previous</span>
		</a>
		<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
			<span class="carousel-control-next-icon" aria-hidden="true"></span>
			<span class="sr-only">Next</span>
		</a>
	</div>
</div>
)

const IndexPage = () => (
<Layout>
	<Hero />
	<Showcase />
</Layout>
)

export default IndexPage
