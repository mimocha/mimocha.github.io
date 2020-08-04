import React from "react"
import { Link } from "gatsby"

import navbarStyles from "../styles/navbar.module.scss"
import profile from "../images/profile.jpg"

const About = () => (
	<div className={navbarStyles.container}>
		<div className={navbarStyles.item}>
			<img src={profile} alt="My Face" className={navbarStyles.profile} />
		</div>
		
		<div className={navbarStyles.item}>
			<h1>Chawit Leosrisook</h1>
		</div>
		
		<div className={navbarStyles.item}>
			<p>About me goes here?</p>
		</div>
	</div>
)

const Navigations = () => (
	<>
		<h1>Navigations</h1>
		<ul>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/about">About</Link></li>
			<li><Link to="/blog">Blog</Link></li>
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
		<About />
		<Navigations />
	</>
)

export default Navbar