// React
import React from "react"
import { Link } from "gatsby"

// External
import '@fortawesome/fontawesome-free/css/all.min.css';

// HTML / CSS
import headerStyles from "../styles/header.module.scss"



/* ========================= Brand Text ========================= */
// Uses CSS to do hover text change effect

// Functions to split text into spans with individual characters
// Used for fading effects
const Letter = (props, key) => (
	<span key={key}>
		{props.children}
	</span>
)

// Returns array of span tags, each with a single char inside
function TextSplit (props) {
	let i;
	let array = [];
	// 17 characters, excluding fontawesome icon
	for (i=0; i<props.text.length; i++) {
		array.push(
			<Letter key={i.toString()}>
				{props.text[i]}
			</Letter>
		);
	}
	return array;
}

// Link is parent of div, to provide cursor pointer on hover
const Brand = () => (
	<Link to="/">
		<div className={headerStyles.brandContainer}>
			<span className={headerStyles.name} title="Chawit Leosrisook">
				<i className="fas fa-user-circle"></i>
				<TextSplit text="Chawit Leosrisook" />
			</span>
			<span className={headerStyles.url} title="mimocha.github.io">
				<i className="fab fa-github"></i>
				<TextSplit text="mimocha.github.io" />
			</span>
		</div>
	</Link>
)



/* ========================= Nav-items ========================= */
const NavLinks = (props) => (
	<li>
		<Link to={props.link} className={headerStyles.navbarLink} activeClassName={headerStyles.activeLink}>
			{props.children}
		</Link>
	</li>
)

const NavMenu = () => (
	<div className={headerStyles.navbarMenu}>
		<ul className={headerStyles.navbarItem}>
			<NavLinks link="/">
				Home
			</NavLinks>

			<NavLinks link="/showcase">
				Showcase
			</NavLinks>

			<NavLinks link="/about">
				About
			</NavLinks>

			<NavLinks link="/contact">
				Contact
			</NavLinks>

			{/* Temp */}
			{/* <NavLinks link="/404">
				404
			</NavLinks> */}
		</ul>
	</div>
)



/* ========================= Output ========================= */
const Header = () => (
	<nav className={headerStyles.navbar}>
		<Brand />
		<NavMenu />
	</nav>
)

export default Header