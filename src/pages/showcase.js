// React
import React from "react"

// HTML / CSS
import Layout from "../components/layout"
import styles from "../styles/showcase.module.scss"


/* ==================== Hero Carousel ==================== */
const Carousel = () => (
<div className="carousel slide" data-ride="carousle" 
	id="carouselControl">
	<div className="carousel-inner">
		<CarouselIndicator target="carouselControl" n={3} />

		<CarouselItem style={styles.one + " active"}>
			<h1 className="display-1">One</h1>
		</CarouselItem>

		<CarouselItem style={styles.two}>
			<h1 className="display-1">Two</h1>
		</CarouselItem>
		
		<CarouselItem style={styles.three}>
			<h1 className="display-1">Three</h1>
		</CarouselItem>

		<a className="carousel-control-prev" href="#carouselControl" role="button" data-slide="prev">
			<span className="carousel-control-prev-icon" aria-hidden="true"></span>
			<span className="sr-only">Previous</span>
		</a>
		<a className="carousel-control-next" href="#carouselControl" role="button" data-slide="next">
			<span className="carousel-control-next-icon" aria-hidden="true"></span>
			<span className="sr-only">Next</span>
		</a>
	</div>
</div>
)

const CarouselItem = (props) => (
<div className={props.style + " carousel-item"}>
	{props.children}
</div>
)

function CarouselIndicator (props) {
	let array = [];
	let i;
	for (i=0; i<props.n; i++) {
		if (i==0) {
			array.push(
				<li data-target={props.target} data-slide-to={i.toString()} className="active" />
			)
		} else {
			array.push(
				<li data-target={props.target} data-slide-to={i.toString()} />
			)
		}
	}

	return (
		<ul className="carousel-indicators">
			{array}
		</ul>
	)
}



/* ==================== Card Deck ==================== */
const CardDeck = () => (
	<div className={styles.cardDeck + " card-deck"}>
		<Cards title="Card 1"/>
		<Cards title="Card 2"/>
		<Cards title="Card 3"/>
		<Cards title="Card 4"/>
		<Cards />
		<Cards />
		<Cards />
	</div>
)

function Cards (props) {
	let image = <svg className={styles.placeholder}>
		<rect width="100%" height="100%" fill="transparent"></rect>
		<text x="50%" y="50%" fill="#eceeef" dy=".3em">Placeholder</text>
	</svg>
	if (props.img != null) {
		image = props.img;
	}

	let title = <h5 className="card-title">Card Title</h5>
	if (props.title != null) {
		title = <h5 className="card-title">{props.title}</h5>
	}

	let mainText = <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
	if (props.maintext != null) {
		mainText = <p className="card-text">{props.maintext}</p>;
	}

	let smallText = <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
	if (props.smalltext != null) {
		smallText = <p className="card-text"><small className="text-muted">{props.smalltext}</small></p>
	}

	return (
		<div className={styles.card + " card"}>
		{image}
		<div className="card-body">
			{title}
			{mainText}
			{smallText}
		</div>
	</div>
	)
}



/* ==================== Output ==================== */
const ShowcasePage = () => (
	<Layout>
		<Carousel />
		<CardDeck />
	</Layout>
)

export default ShowcasePage