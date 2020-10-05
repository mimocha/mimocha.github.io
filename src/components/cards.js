// React
import React from "react"

// HTML / CSS
import styles from "../styles/cards.module.scss"

class Card extends React.Component {
	Header () {
		return (
			<div className={styles.cardHeader}>
				<h4 className={styles.text}>{this.props.header}</h4>
			</div>
		);
	}

	Body () {
		return (
			<div className={styles.cardBody}>
				{this.props.children}
			</div>	
		);
	}

	render () {
		return (
			<div className={styles.card}>
				{this.Header()}
				{this.Body()}
			</div>
		);
	}
}

export default Card