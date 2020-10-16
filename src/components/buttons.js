// React
import React from "react"

//External
import AniLink from "gatsby-plugin-transition-link/AniLink"

// HTML / CSS
import styles from "../styles/buttons.module.scss"


const ButtonBase = (props) => (
	<button className={styles.button}>
		{props.icon != null ?
			<i className={props.icon}></i>
			: null}
		{props.children}
	</button>
)

function Button (props) {
	// Render base button
	let button = <ButtonBase icon={props.icon}>{props.children}</ButtonBase>;
	
	// Check if internal / external ref
	// Gatsby does not like using <Link> for external sites
	// Use normal <a> tags instead
	if (props.type === "internal") {
		return (
			<AniLink fade duration={0.5}
				to={props.link}>
				{button}
			</AniLink>
		) 
	} else {
		return (
			<a href={props.link} target={props.target} rel={props.rel}>
				{button}
			</a>
		)
	}
} 

export default Button