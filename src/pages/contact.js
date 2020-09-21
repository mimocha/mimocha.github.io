// React
import React from "react"

// HTML / CSS
import Layout from "../components/layout"
import styles from "../styles/contact.module.scss"

// Resource
import illust from "../images/contact/Online-rafiki.svg"

const ContactLink = (props) => (
<a href={props.link}
	className={styles.listItem + " list-group-item list-group-item-action " + props.class}
	target="_blank" rel="external">
		<i className={props.icon}></i>
		<p>{props.children}</p>
</a>
)

// TODO: Copy text to clipboard on click
const ContactList = () => (
<div className={styles.contactContainer}>
	<h2>Contact Me</h2>
	<hr></hr>
	<ul className="list-group">
		<ContactLink
			link="mailto:leosrisook.c@gmail.com"
			icon="fas fa-envelope">
			Leosrisook.c@gmail.com
		</ContactLink>
		<ContactLink
			link="https://www.linkedin.com/in/chawit-leosrisook-272a96197/"
			icon="fab fa-linkedin">
			Chawit Leosrisook
		</ContactLink>
		<ContactLink
			link="https://github.com/mimocha/"
			icon="fab fa-github">
			mimocha
		</ContactLink>
		<ContactLink
			class="disabled"
			icon="fas fa-home">
			University of Sussex, Sussex House, Brighton, United Kingdom, BN1 9RH
		</ContactLink>
	</ul>
</div>
)

const Illust = () => (
<div className={styles.illustContainer}>
	<img src={illust} alt="Illustration by Freepik Stories" />
	<a href="https://stories.freepik.com/online" target="_blank" rel="noreferrer">
	Illustration by Freepik Stories
	</a>
</div>
)

const ContactPage = () => (
<Layout>
<div className={styles.container}>
	<ContactList />
	<Illust />
</div>
</Layout>
)

export default ContactPage
