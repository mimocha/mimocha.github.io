// React
import React from "react"

// HTML / CSS
import Layout from "../components/layout"
import styles from "../styles/contact.module.scss"

// Resource
import illust from "../images/contact/Online-rafiki.svg"

// Disabled link no longer works
const ContactLink = (props) => (
<a href={props.link}
	className={`${styles.listItem} ${props.class}`}
	target="_blank" rel="noopener noreferrer external">
		<i className={props.icon}></i>
		<p>{props.children}</p>
</a>
)

// TODO: Copy text to clipboard on click
const ContactList = () => (
<div className={styles.contactContainer}>
	<h1>Contact Me</h1>
	<hr></hr>
	<ul className={styles.listGroup}>
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
	<a href="https://stories.freepik.com/online" target="_blank" rel="noopener noreferrer external">
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
