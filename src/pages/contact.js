import React from "react"

import Layout from "../components/layout"

const ContactPage = () => (
<Layout>
	<div className="mt-5 mx-3">
		<h2>Contact Me</h2>
		<hr></hr>
		<ul className="list-group">
			<li className="list-group-item">Email Primary</li>
			<li className="list-group-item">Email Secondary</li>
			<li className="list-group-item">Phone</li>
			<li className="list-group-item">Address</li>
		</ul>
	</div>
</Layout>
)

export default ContactPage
