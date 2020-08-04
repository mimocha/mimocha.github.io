import React from "react"

import Navbar from "../components/navbar"
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
		{/* Background */}
		<div className="background"></div>

		{/* Containers */}
		<Container className="navbar">
			<Navbar />
		</Container>
		
		<Container className="content">
			<NavHead />
			{props.children}
			<NavFoot />
		</Container>
	</main>
)

export default Layout