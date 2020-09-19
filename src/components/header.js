import React from "react"
import { Link } from "gatsby"

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import styles from "../styles/header.module.scss"

function NavItems (props) {
	// Sets style to active if linking to the current page
	let s = "nav-item";
	if (props.link === window.location.pathname) {
		s += " active";
	}

	return (
		<li className={s}>
			<Link to={props.link} className={styles.navLink + " nav-link"}>
				{props.children}
			</Link>
		</li>
	)
}

// Brand div
// Uses CSS to do hover text change effect
// URL split into three parts for fancy timed delay effect -- Might get bored and removed later.
const Brand = () => (
	<div className={styles.brandContainer + " collapse navbar-collapse"}>
		<Link to="/" className="navbar-brand">
			<span className={styles.name + " text-monospace"}>
				Chawit Leosrisook
			</span>
			<span className={styles.a + " text-monospace"}>
				mimocha.
			</span>
			<span className={styles.b + " text-monospace"}>
				github.
			</span>
			<span className={styles.c + " text-monospace"}>
				io
			</span>
		</Link>
	</div>
)

// Header Navbar
const Header = () => (
	<nav className="navbar navbar-expand-md	navbar-dark bg-dark">
		<Brand />

		{/* Navbar navigation items */}
		<div className={styles.navbarContainer}>
			<ul className={styles.navbarNav + " navbar-nav"}>
				<NavItems link="/">
					Home
				</NavItems>

				<NavItems link="/showcase">
					Showcase
				</NavItems>

				<NavItems link="/about">
					About
				</NavItems>

				<NavItems link="/contact">
					Contact
				</NavItems>

				{/* TODO: Temporary Link */}
				<NavItems link="/404">
					404
				</NavItems>
			</ul>
		</div>
	</nav>
)

export default Header