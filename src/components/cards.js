// React
import React from "react"

// HTML / CSS
import styles from "../styles/cards.module.scss"

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

// Spacer used to stretch subtext to foot of card
// Don't draw if no subtext used
const Spacer = (props) => (
	props.draw === true ?
		<span></span>
		: null
)

const CardSubtext = (props) => (
	props.subtext != null ?
		<div>
		<p className={styles.cardSubtext}>
			{props.subtext}
		</p>
		</div>
		: null
)

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
	
	<CardImage image={props.image} />

	<div className={styles.cardBody}>
		<CardHeader header={props.header} />
		<CardSubheader subheader={props.subheader} />
		<HorzRule draw={props.header != null} />

		<CardText text={props.text} />

		{/* Any other custom props */}
		{props.children}
		
		<Spacer draw={props.subtext != null} />
		<CardSubtext subtext={props.subtext} />
	</div>
</div>
)

export default Cards