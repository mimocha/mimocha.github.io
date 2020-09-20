// React
import React from "react"
import { Link } from "gatsby"

// HTML / CSS
import Layout from "../components/layout"
import styles from "../styles/about.module.scss"
import '@fortawesome/fontawesome-free/css/all.css';

// Resource
import profileImg from "../images/profile.jpg"
import sussexLogo from "../images/sussex-mark.png"
import nitLogo from "../images/nit-mark.png"



/* ========================= Hero Section ========================= */

const University = (props) => (
<a href={props.link} className="text-decoration-none" target="_blank" rel="noreferrer">
	<div className={"container " + styles.container}>
		<img src={props.logo} className={styles.logo} alt="University logo"/>
		<span className={styles.uniText}>
		<p className="lead text-dark">{props.degree}</p>
		<p className="text-muted">{props.school}</p>
		</span>
	</div>
</a>
)

const Hero = () => (
<div className={styles.jumbotron + " jumbotron mb-5"}>
	<div className={styles.profileBox}>
		<img src={profileImg} className={styles.profileImg} alt="Chawit Leosrisook"/>
	</div>

	<div className={styles.summaryBox}>
		<div className={styles.name}>
			<h1>Chawit Leosrisook</h1>
			<hr></hr>
		</div>

		<University 
			link="https://www.sussex.ac.uk"
			logo={sussexLogo}
			degree="MSc Artificial Intelligence and Adaptive Systems"
			school="University of Sussex"
		/>
		&nbsp;
		<University 
			link="https://www.nit.ac.jp"
			logo={nitLogo}
			degree="BEng Robotics Engineering"
			school="Nippon Institute of Technology"
		/>
	</div>
</div>
)



/* ========================= Content Section ========================= */

const ContentBox = (props) => (
	<div className="p-3 mx-2 text-justify">
		<h4>{props.header}</h4>
		<hr></hr>
		{props.children}
	</div>
)

const Button = (props) => (
<Link to={props.link} target={props.target} rel={props.rel}>
	<button className={styles.button + " btn"}>
		<i className={props.icon}></i>
		{props.children}
	</button>
</Link>
)

const Summary = () => (
<ContentBox header="About Me">
	<p>
	I am a Thai graduate student at the University of Sussex, studying artificial intelligence! My background is in robotics engineering from Nippon Institute of Technology in Japan.
	Because of that, I am a bilingual-native speaker of Thai and English, while also being fluent in Japanese. Utilizing that, I had brief work experience as a freelance technical Thai-Japanese interpreter in Japan.
	</p>
	<p>
	I am taught on various AI topics including machine learning and natural language processing, as well as engineering topics, such as embedded systems, image processing and industrial automations.
	I enjoy everything coding related, and am a big fan of data visualization! You can find examples of my work on this website, as well as on my Github page.
	My aspiration is to become an active member in the AI research community.
	</p>

	<div className={styles.buttonContainer}>
		<Button link="https://www.github.com/mimocha" 
			target="_blank" rel="canonical"
			icon="fab fa-github">
			Github
		</Button>
		<Button 
			link="https://drive.google.com/uc?export=download&id=15iVuo3b5zq37SHGRLBdYwaasMrzzcPHH" icon="fas fa-file-pdf">
			Resume
		</Button>
		<Button link="/contact" icon="fas fa-envelope">
			Contact
		</Button>
		<span className={styles.filler}></span>
	</div>
</ContentBox>
)

const Skills = () => (
<ContentBox header="My Skills">
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
</ContentBox>
)



/* ========================= Output  ========================= */

const AboutPage = () => (
<Layout>
	<Hero />
	<Summary />
	<Skills />
</Layout>
)

export default AboutPage
