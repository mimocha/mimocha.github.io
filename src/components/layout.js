// React
import React from "react"

// HTML / CSS
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/layout.scss"

const Layout = (props) => (
<main>
	<Header />

	<div className="content container-lg shadow-sm">
		{props.children}
	</div>

	<Footer />
</main>
)

export default Layout