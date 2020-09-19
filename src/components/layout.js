// React
import React from "react"

// HTML / CSS
import Header from "../components/header"
import Footer from "../components/footer"
import NavFoot from "../components/nav-foot"
import "../styles/layout.scss"

const Layout = (props) => (
<main>
	<Header />

	<div className="content container-lg shadow-sm"> 
		{/* Wrap main content into a single div */}
		<div>
			{props.children}
		</div>
		<NavFoot />
	</div>

	<Footer />
</main>
)

export default Layout