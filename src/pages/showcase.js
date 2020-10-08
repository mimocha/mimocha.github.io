// React
import React from "react"

// HTML / CSS
import Layout from "../components/layout"
import styles from "../styles/showcase.module.scss"
import Cards from "../components/cards.js"
import Cardbox from "../components/cardbox.js"


/* ==================== Hero Carousel ==================== */
// TODO: Carousel
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
		if (i===0) {
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



/* ==================== Card Showcase ==================== */
const Showcase = () => (
<div className={styles.showcase}>
<h1>Work Showcase</h1>
<hr></hr>
<Cardbox>
	<Cards 
		image="https://picsum.photos/350/500"
		header="Card 1"
		subheader="Subheader 1"
		text="This is the main card body text. A little bit long, a little bit unnecessary"
		subtext="This is the subtext"
		interactive={true}
		regular={true}
	/>
	<Cards 
		image="https://picsum.photos/350/500"
		header="Card 2"
		text="This is the main card body text. A little bit long, a little bit unnecessary"
		subtext="This is the subtext"
		interactive={true}
		regular={true}
	/>
	<Cards 
		image="https://picsum.photos/350/500"
		subheader="Card 3"
		text="This is the main card body text. A little bit long, a little bit unnecessary"
		subtext="This is the subtext"
		interactive={true}
		regular={true}
	/>
	<Cards 
		image="https://picsum.photos/500"
		header="Card 4"
		subheader="Wide Card (1x2)"
		text="This is the main card body text. A little bit long, a little bit unnecessary"
		subtext="This is the subtext"
		interactive={true}
		wide={true}
	/>
	<Cards 
		image="https://picsum.photos/350/500"
		header="Card 5"
		subheader="Subheader 5"
		text="This is the main card body text. A little bit long, a little bit unnecessary"
		subtext="This is the subtext"
		interactive={true}
		regular={true}
	/>
	<Cards 
		header="Card 6"
		subheader="Subheader 6"
		text="This is the main card body text. A little bit long, a little bit unnecessary"
		subtext="This is the subtext"
		interactive={true}
		regular={true}
	/>
	<Cards 
		image="https://picsum.photos/500/350"
		header="Card 7"
		subheader="Tall Card (2x1)"
		text="This is the main card body text. A little bit long, a little bit unnecessary"
		subtext="This is the subtext"
		interactive={true}
		tall={true}
	/>
	<Cards 
		image="https://picsum.photos/500"
		header="Card 8"
		subheader="Large Card (2x2)"
		text="This is the main card body text. A little bit long, a little bit unnecessary"
		subtext="This is the subtext"
		interactive={true}
		large={true}
	/>
	<Cards 
		image="https://picsum.photos/350/500"
		header="Card 9"
		subheader="Subheader 9"
		text="This is the main card body text. A little bit long, a little bit unnecessary"
		subtext="This is the subtext"
		interactive={true}
		regular={true}
	/>
	<Cards 
		image="https://picsum.photos/350/500"
		header="Card 10"
		subheader="Subheader 10"
		text="This is the main card body text. A little bit long, a little bit unnecessary"
		subtext="This is the subtext"
		interactive={true}
		regular={true}
	/>
</Cardbox>
</div>
)



/* ==================== Output ==================== */
const ShowcasePage = () => (
	<Layout>
		{/* <Carousel /> */}
		<Showcase />
	</Layout>
)

export default ShowcasePage