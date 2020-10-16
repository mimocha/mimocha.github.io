// React
import React from "react"

// HTML / CSS
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/layout.scss"

const Layout = (props) => (
<main>
	<Header brand={props.brand} />
	<div className="content">
		{props.children}
	</div>
	<Footer />
</main>
)

export default Layout