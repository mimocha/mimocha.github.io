// React
import React, { Children } from "react"

// HTML / CSS
import Layout from "../components/layout.js"
import styles from "../styles/about.module.scss"
import Button from "../components/buttons.js"
import Cards from "../components/cards.js"
import Cardbox from "../components/cardbox.js"

// Resource
import profileImg from "../images/profile.jpg"
import sussexLogo from "../images/sussex-mark.png"
import nitLogo from "../images/nit-mark.png"



/* ========================= Hero Section ========================= */

const University = (props) => (
<a href={props.link} target="_blank" rel="noreferrer">
	<div className={styles.container}>
		<img src={props.logo} className={styles.logo} alt="University logo"/>
		<span className={styles.uniText}>
		<p className={styles.textLead}>{props.degree}</p>
		<p className={styles.textSub}>
			{props.school}
			<i className="fas fa-external-link-alt"></i>
		</p>
		</span>
	</div>
</a>
)

const Hero = () => (
<div className={styles.jumbotron}>
	<div className={styles.profileBox}>
		<img src={profileImg} className={styles.profileImg} 
		alt="Chawit Leosrisook"/>
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



/* ========================= About Section ========================= */

const ContentBox = (props) => (
	<div className={styles.contentContainer}>
		<h1>{props.header}</h1>
		<hr></hr>
		{props.children}
	</div>
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
		<Button 
			link="https://drive.google.com/uc?export=download&id=15iVuo3b5zq37SHGRLBdYwaasMrzzcPHH"
			icon="fas fa-file-pdf">
			Resume
		</Button>
		<Button link="/contact" type="internal"
			icon="fas fa-envelope">
			Contact
		</Button>
		<span className={styles.filler}></span>
	</div>
</ContentBox>
)



/* ========================= Skills Section ========================= */

function SkillList (props) {
	// Render list entries
	const count = Children.count(props.children);
	const items = [];
	let i;
	for (i=0; i<count; i++) {
		items.push(
			<li className={styles.skillListEntry} key={i}>
				{props.children[i]}
			</li>
		);
	}

	return (
		<span>
			<ul className={styles.skillList}>
				{items}
			</ul>
		</span>
	);
}

const Skills = () => (
<ContentBox header="I've had experience with...">
	<Cardbox>
		<Cards header="Programming Languages">
			<SkillList>
				{["C / C++",
				"Java",
				"MATLAB",
				"Python",
				"System Verilog HDL"]}
			</SkillList>
		</Cards>

		<Cards header="Frameworks & Toolkits">
			<SkillList>
				{["Matplotlib",
				"Numpy",
				"NLTK",
				"OpenCV",
				"Pandas",
				"Scipy"]}
			</SkillList>
		</Cards>

		<Cards header="Miscellaneous">
			<SkillList>
				{["git",
				"LaTeX",
				"markdown",
				"makefile",
				"PLC Ladder Logic"]}
			</SkillList>
		</Cards>

		<Cards header="Front-end Programming">
			<SkillList>
				{["HTML",
				"CSS / SCSS",
				"JavaScript",
				"ReactJS / JSX",
				"GatsbyJS",
				"GraphQL"]}
			</SkillList>
		</Cards>

		<Cards header="Languages">
			<SkillList>
				<span>
					Thai <span className={styles.skillSubtext}>
						(native)</span>
				</span>
				<span>
					English <span className={styles.skillSubtext}>
						(bilingual-native)
					</span>
				</span>
				<span>
					Japanese <span className={styles.skillSubtext}>
						(fluent)
					</span>
				</span>
			</SkillList>
		</Cards>
	</Cardbox>
</ContentBox>
)

const Taught = () => (
<ContentBox header="I've studied...">
	<Cardbox>
		<Cards header="Artificial Intelligence">
			<SkillList>
				{["Convolutional Neural Networks",
				"Deep Learning",
				"Evolutionary Algorithms",
				"Free Energy Principle",
				"Global Optimization",
				"Natural Language Processing",
				"Reinforcement Learning",
				"Swarm Intelligence"]}
			</SkillList>
		</Cards>

		<Cards header="Data Sciences">
			<SkillList>
				{["Classification",
				"Cluster Analysis",
				"Independent Components Analysis",
				"Linear Regression",
				"Principle Components Analysis",
				"Radial Basis Function",
				"Support Vector Machine"
				]}
			</SkillList>
		</Cards>

		<Cards header="Engineering">
			<SkillList>
				{["Embedded Systems",
				"FPGA",
				"Image Processing",
				"Industrial Automation",
				"Robotics"]}
			</SkillList>
		</Cards>

		<Cards header="Qualifications">
			<SkillList>
				<span>
					JLPT <span className={styles.skillSubtext}>
						Japanese Language Proficiency Test (N1)
					</span>
				</span>
				<span>
					Kogyo-Eiken <span className={styles.skillSubtext}>
						Technical Japanese-English Translation (Pre-2)
					</span>
				</span>
				<span>
					IELTS <span className={styles.skillSubtext}>
						International English Language Testing System (Band 8.5)
					</span>
				</span>
				<span>
					TOEIC <span className={styles.skillSubtext}>
						Test of English for International Candidate (990)
					</span>
				</span>
			</SkillList>
		</Cards>
	</Cardbox>
</ContentBox>
)



/* ========================= Output  ========================= */

const AboutPage = () => (
<Layout>
	<Hero />
	<Summary />
	<Taught />
	<Skills />
</Layout>
)

export default AboutPage
