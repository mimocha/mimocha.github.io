import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
<Layout>
	<div className="jumbotron">
		<h1 className="display-4 text-monospace">Hello World!</h1>
		<p className="lead text-monospace">I'm Chawit. I am an AI developer, and I code for fun!</p>
		<hr className="my-4"></hr>
		<Link to="/about" className="btn btn-warning btn-lg shadow-sm">
			About me
		</Link>
	</div>

	<div>
		<h1>Showcase Selections</h1>
	</div>
</Layout>
)

export default IndexPage
