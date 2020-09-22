// React
import React from "react"
import { Link } from "gatsby"

// HTML / CSS
import styles from "../styles/buttons.module.scss"

// Check if internal / external ref
// Gatsby does not like using <Link> for external sites
// Use normal <a> tags instead
function Button (props) {
	// Check if icon is provided
	let icon;
	if (props.icon != null) {
		icon = <i className={props.icon}></i>;
	} else {
		icon = null;
	}

	// Render base button
	let button = 
	<button className={styles.button + " btn " + props.size}>
		{icon}
		{props.children}
	</button>;

	// Check if link is internal
	let element;
	if (props.type === "internal") {
		element = 
			<Link to={props.link}>
				{button}
			</Link>;
	} else {
		element = 
			<a href={props.link} target={props.target} rel={props.rel}>
				{button}
			</a>;
	}

	return (element);
} 

export default Button