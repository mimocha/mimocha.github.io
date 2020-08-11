import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

import NavHead from "../components/nav-head"
import NavFoot from "../components/nav-foot"
import "../styles/layout.scss"

const Container = (props) => (
	<div className={"outer " + props.className}> 
		<div className={"inner " + props.className}>
			{props.children}
		</div>
	</div>
)

const Layout = (props) => (
	<main>
		<Header />

		{/* Content */}
		<Container className="content">
			<NavHead isHome={props.isHome} />
			{props.children}
			<NavFoot isHome={props.isHome} />
		</Container>

		<Footer />
	</main>
)

export default Layout