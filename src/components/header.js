import React from "react"
import { Link } from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import "../styles/header.module.scss"

function NavItems (props) {
	let s = "nav-item";
	if (props.active === true) {
		s += " active";
	}

	return (
		<li className={s}>
			<Link to={props.link} className="nav-link">
				{props.children}
			</Link>
		</li>
	)
}

const Header = (props) => (
	<nav className="navbar navbar-expand-lg	navbar-dark bg-dark">
		<Link to="/" className="navbar-brand">
			Chawit Leosrisook
		</Link>

		<div className="collapse navbar-collapse">
			<ul className="navbar-nav mr-auto">
				<NavItems link="/" active={true}>
					Home
				</NavItems>

				<NavItems link="/about" active={false}>
					About
				</NavItems>

				<NavItems link="/blog" active={false}>
					Blog
				</NavItems>

				<NavItems link="/contact" active={false}>
					Contact
				</NavItems>

				<NavItems link="/404" active={false}>
					404
				</NavItems>
			</ul>
		</div>
	</nav>
)

export default Header