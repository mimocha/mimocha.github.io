// React
import React from "react"
import { Link } from "gatsby"

// HTML / CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import styles from "../styles/header.module.scss"
import '@fortawesome/fontawesome-free/css/all.css';

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

// Functions to split text into spans with individual characters
// Used for fading effects
const Letter = (props) => (
	<span>{props.children}</span>
)
function TextSplit (props) {
	let i;
	let rows = [];
	for (i=0; i<17; i++) {
		rows.push(<Letter>{props.text[i]}</Letter>);
	}
	return rows;
}

// Brand div
// Uses CSS to do hover text change effect
const Brand = () => (
	<div className={styles.brandContainer + " collapse navbar-collapse"}>
		<Link to="/" className="navbar-brand">
			<span className={styles.name} title="Chawit Leosrisook">
				<i className="fas fa-user-circle pr-2"></i>
				<TextSplit text="Chawit Leosrisook" />
			</span>
			<span className={styles.url} title="mimocha.github.io">
				<i className="fab fa-github pr-2"></i>
				<TextSplit text="mimocha.github.io" />
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