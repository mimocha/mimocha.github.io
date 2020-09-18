import React from "react"
import { Link } from "gatsby"


const Navigations = () => (
	<>
		<h1>Navigations</h1>
		<ul>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/showcase">Showcase</Link></li>
			<li><Link to="/about">About</Link></li>
			<li><Link to="/contact">Contact</Link></li>
			<li><Link to="/404">404</Link></li>
		</ul>
		<ul>
			<li><a href="https://www.github.com/mimocha" target="blank">Github Profile</a></li>
			<li><a href="https://stackoverflow.com/users/5675094/mimocha" target="blank">Stackoverflow Profile</a></li>
		</ul>
	</>
)

const Navbar = () => (
	<>
		<Navigations />
	</>
)

export default Navbar