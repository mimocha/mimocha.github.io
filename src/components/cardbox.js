// React
import React from "react"

// HTML / CSS
import styles from "../styles/cardbox.module.scss"

const Cardbox = (props) => (
	<div className={styles.cardbox}>
		{props.children}
	</div>	
)

export default Cardbox