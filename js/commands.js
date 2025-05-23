const banner = `<a href="#" data-command="banner">banner</a>`
const clear = `<a href="#" data-command="clear">clear</a>`
const contact = `<a href="#" data-command="contact">contact</a>`
const dark = `<a href="#" data-command="dark">dark</a>`
const echo = `<a href="#" data-command="echo">echo</a>`
const email = `<a href="#" data-command="email">email</a>`
const github = `<a href="#" data-command="github">github</a>`
const help = `<a href="#" data-command="help">help</a>`
const linkedin = `<a href="#" data-command="linkedin">linkedin</a>`
const light = `<a href="#" data-command="light">light</a>`
const welcome = `<a href="#" data-command="welcome">welcome</a>`
const whoami = `<a href="#" data-command="whoami">whoami</a>`

const emailAddress = `chawit.leosrisook@outlook.com`;
const emailCopyLink = `<a href="#" onclick="copyEmail()">${emailAddress}</a>`;
const githubLink = `<a href="https://github.com/mimocha" target="_blank" rel="noopener noreferrer">github/mimocha</a>`;
const linkedinLink = `<a href="https://linkedin.com/in/chawitleosrisook" target="_blank" rel="noopener noreferrer">linkedin/chawitleosrisook</a>`;

function getCommandPalette(outputDiv) {
    return {
        banner: () => {
            return`<div class="yellow">
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░██░░░░██░░████████░░██░░░░██░░░██████░░░░██████░░░██░░░░██░░░██████░░
░███░░███░░░░░██░░░░░███░░███░░██░░░░██░░██░░░░██░░██░░░░██░░██░░░░██░
░████████░░░░░██░░░░░████████░░██░░░░██░░██░░░░░░░░████████░░██░░░░██░
░██░██░██░░░░░██░░░░░██░██░██░░██░░░░██░░██░░░░██░░██░░░░██░░████████░
░██░░░░██░░████████░░██░░░░██░░░██████░░░░██████░░░██░░░░██░░██░░░░██░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
</div>`;
        },
        clear: () => {
            outputDiv.innerHTML = '';
            return '';
        },
        contact: () => {
            return `You can reach out to me at:
Click to copy: ${emailCopyLink}
${githubLink}
${linkedinLink}`;
        },
        dark: () => {
            bodyDiv.className = 'dark';
            return `Dark mode selected!`;
        },
        echo: (args) => {
            return args.join(' ');
        },
        email: () => {
            return `Click to copy: ${emailCopyLink}`;
        },
        github: () => {
            return githubLink;
        },
        help: () => {
            return `Available terminal commands:
    ${banner}    - Display the welcome banner
    ${clear}     - Clear the terminal screen
    ${contact}   - Show all my contact information
    ${dark}      - Switch to dark mode
    ${echo}      - Display a line of text (e.g., echo hello world)
    ${email}     - Display my email address
    ${github}    - Display my GitHub profile link
    ${help}      - Display this help message
    ${linkedin}  - Display my LinkedIn profile link
    ${light}     - Switch to light mode
    ${welcome}   - Display the welcome message again
    ${whoami}    - Display information about me`;
        },
        hello: () => {
            return `Hello! :)`;
        },
        linkedin: () => {
            return linkedinLink;
        },
        light: () => {
            bodyDiv.className = 'light';
            return `Light mode selected!`;
        },
        welcome: () => {
            return `<b>Welcome to my github pages portfolio!</b>
This is a terminal interface where you can learn more about me.
Type <b>'help'</b> to see available commands
Or click these links here for quick access:
${help} ${whoami} ${email} ${github} ${linkedin}`;
        },
        whoami: () => {
            return `<b>Name: Chawit Leosrisook</b>

<b>Description:</b>
Professional data scientist, Computer Vision & NLP expert.
AI specialist with a passion in global optimization and artificial life.
Also hobbyist programmer and AI researcher.

<b>Work Experience:</b>
- AI Project Manager & Consultant at YMT Holding Group (Thailand)
- Data Scientist, Fraud Detection Specialist at Shift Technologies (Singapore)
- AI Specialist, Founding Member of AI & Innovations Hub at Prudential Life Assurance (Thailand)
- Data Scientist, Computer Vision & NLP Specialist at Feedback180 (Thailand)

<b>Skills:</b>
- Practical data science applications, data visualization and story telling (Python, PowerBi)
- Data wrangling and data engineering (Python, SQL, Apache Spark, Databricks)
- Cloud platform usage, deployment and management (GCP, Azure)
- Image processing and computer vision pipelines (OpenCV, MATLAB)
- Various programming languages and paradigms (Python, C#, embed C/C++, MATLAB)

<b>Education:</b>
- MSc Artificial Intelligence graduate from the University of Sussex (United Kingdom)
- BEng Robotics Engineering graduate from Nippon Institute of Technology (Japan)`;
        }
    };
}

function copyEmail() {
    navigator.clipboard.writeText(emailAddress);
    displayOutput(`Email address copied to clipboard!`)
}