import React from "react"

import Layout from "../components/layout"

import navbarStyles from "../styles/navbar.module.scss"
import profileImg from "../images/profile.jpg"

const About = () => (
	<div className={navbarStyles.container}>
		<div className={navbarStyles.item}>
			<img src={profileImg} alt="My Face" className={navbarStyles.profile} />
		</div>
		
		<div className={navbarStyles.item}>
			<h1>Chawit Leosrisook</h1>
		</div>
		
		<div className={navbarStyles.item}>
			<p>About me goes here?</p>
		</div>
	</div>
)

const Summary = () => (
	<p>
		Expected first class Master's degree student in artificial intelligence with background in robotics engineering; experienced in a broad range of engineering topics including embedded systems, machine learning, and industrial automation. Proficient coder and fast learner, with skills in data visualization and self-trained in a variety of software engineering practices. Bilingual-native speaker of Thai and English, and fluent in Japanese; with brief part-time work experience as a technical Japanese-Thai interpreter for business delegations in Japan.
	</p>
)

const Skills = () => (
	<>
	<h2>My Skills</h2>

	<h3>Artificial Intelligence - Machine Learning Topics</h3>
	<ul>
		<li>Natural Language Processing</li>
		<li>Image Processing & Computer Vision</li>
		<li>Deep Learning & Neural Networks</li>
		<li>Reinforcement Learning</li>
		<li>Global Optimization & Stochastic Optimization Algorithms</li>
	</ul>

	<h3>Programming</h3>
	<ul>
		<li>MATLAB</li>
		<li>Python</li>
		<li>C / C++</li>
		<li>Java</li>
		<li>System Verilog HDL</li>
	</ul>

	<h3>Front-End</h3>
	<ul>
		<li>HTML, CSS, JavaScript</li>
		<li>Sass / Scss</li>
		<li>JSX</li>
		<li>Typescript</li>
		<li>Webassembly</li>
	</ul>

	<h3>Frameworks-Toolkits</h3>
	<ul>
		<li>Matplotlib, Numpy, Scipy, Pandas</li>
		<li>Pytorch, Tensoflow, Keras</li>
		<li>OpenCV</li>
		<li>GatsbyJS, React, GraphQL</li>
	</ul>

	<h3>Miscellany</h3>
	<ul>
		<li>git</li>
		<li>Makefile</li>
		<li>markdown, LaTeX</li>
		<li>PLC Ladder Logic programming</li>
	</ul>

	<h3>Human Language</h3>
	<ul>
		<li>Thai - Bilingual-native</li>
		<li>English - Bilingual-native</li>
		<li>Japanese - Fluent</li>
	</ul>
	</>
)

const AboutPage = () => (
	<Layout>
		<About />

		<Summary />
		
		<Skills />
	</Layout>
)

export default AboutPage
