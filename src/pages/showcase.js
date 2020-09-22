// React
import React from "react"

// HTML / CSS
import Layout from "../components/layout"
import styles from "../styles/showcase.module.scss"


/* ==================== Hero Carousel ==================== */
const Carousel = () => (
	<div className="carousel slide" data-ride="carousle" 
		id="carouselExampleControls">
		<div className="carousel-inner">
			<div className={styles.one + " carousel-item active"}>
				One
			</div>
			<div className={styles.two + " carousel-item"}>
				Two
			</div>
			<div className={styles.three + " carousel-item"}>
				Three
			</div>
			<a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="sr-only">Previous</span>
			</a>
			<a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="sr-only">Next</span>
			</a>
		</div>
	</div>
)



/* ==================== Card Deck ==================== */
const Cards = () => (
	<div></div>
)






/* ==================== Output ==================== */
const ShowcasePage = () => (
	<Layout>
		<h1>Showcase</h1>

		<Carousel />

		<p>This is the showcase</p>
	</Layout>
)

export default ShowcasePage