// React
import React from "react"
import { Link } from "gatsby"

// HTML / CSS
import styles from "../styles/cards.module.scss"

/* =========================== Card Components =========================== */
const CardImage = (props) => (
	props.image != null ?
		<div className={styles.cardImage}
		style={{backgroundImage: `url(${props.image})`}}/>
		: null
)

const CardHeader = (props) => (
	props.header != null ?
		<div>
		<h2 className={styles.cardHeader}>
			{props.header}
		</h2>
		</div>
		: null
)

const CardSubheader = (props) => (
	props.subheader != null ?
		<div>
		<h4 className={styles.cardSubheader}>
			{props.subheader}
		</h4>
		</div>
		: null
)

// Ruler drawn only if main header is used
const HorzRule = (props) => (
	props.draw === true ?
		<div><hr></hr></div>
		: null
)

const CardText = (props) => (
	props.text != null ?
		<div>
		<p className={styles.cardText}>
			{props.text}
		</p>
		</div>
		: null
)

// Spacer used to stretch footer to foot of card
// Don't draw if no footer used
const Spacer = (props) => (
	props.draw === true ?
		<span></span>
		: null
)

const CardFooter = (props) => (
	props.footer != null ?
		<div>
		<p className={styles.cardFooter}>
			{props.footer}
		</p>
		</div>
		: null
)

// Wrap inner card contents in link, if one is provided
const LinkWrap = (props) => {
	if (props.link != null) {
		return (
			<Link to={props.link} className={styles.cardLink}>
				{props.children}
			</Link>
		)
	} else {
		return(
			props.children
		)
	}
}



/* ============================== Output ============================== */

// Use inline styling + ES6 string literal for conditional classes
const Cards = (props) => (
<div className={`
	${styles.card}
	${props.interactive ? styles.interactive : ""}
	${props.regular ? styles.regular : ""}
	${props.wide ? styles.wide : ""}
	${props.tall ? styles.tall : ""}
	${props.large ? styles.large : ""}
	`}>

	<LinkWrap link={props.link}>
		<CardImage image={props.image} />
		<div className={styles.cardBody}>
			<CardHeader header={props.header} />
			<CardSubheader subheader={props.subheader} />
			<HorzRule draw={props.header != null} />
			<CardText text={props.text} />
			{/* Any other custom props */}
			{props.children}
			<Spacer draw={props.footer != null} />
			<CardFooter footer={props.footer} />
		</div>
	</LinkWrap>
</div>
)

export default Cards