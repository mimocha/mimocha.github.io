// React
import React from "react"

// HTML / CSS
import Layout from "../components/layout"
import styles from "../styles/404.module.scss"

// Resource
import illust from "../images/404/404-rafiki.svg"


const Alert = () => (
	<div className={styles.alertContainer}>
		<h1>404</h1>
		<hr></hr>
	</div>
)

const Illust = () => (
	<div className={styles.illustContainer}>
		<img src={illust} alt="Illustration by Freepik Stories" />
		<a href="https://stories.freepik.com/online" 
			target="_blank" rel="noreferrer">
		Illustration by Freepik Stories
		</a>
	</div>
)

const NotFoundPage = () => (
<Layout>
	<div className={styles.container}>
		<Alert />
		<Illust />
	</div>
</Layout>
)

export default NotFoundPage
