document.addEventListener('DOMContentLoaded', () => {
    const outputDiv = document.getElementById('command-output');
    const commandInput = document.getElementById('command-input');
    const promptSpan = document.getElementById('prompt');
    const terminalDiv = document.getElementById('terminal');

    const linkEmail = `<a href="mailto:chawit.leosrisook@outlook.com" class="terminal-link">chawit.leosrisook@outlook.com</a>`;
    const linkGithub = `<a href="https://github.com/mimocha" class="terminal-link" target="_blank" rel="noopener noreferrer">[github/mimocha]</a>`;
    const linkLinkedin = `<a href="https://linkedin.com/in/chawitleosrisook" class="terminal-link" target="_blank" rel="noopener noreferrer">[linkedin/chawitleosrisook]</a>`;

    // Command palette
    const commands = {
        banner: () => {
            return `
 ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
 ░  ░░░░  ░░        ░░  ░░░░  ░░░      ░░░░      ░░░  ░░░░  ░░░      ░░
 ▒   ▒▒   ▒▒▒▒▒  ▒▒▒▒▒   ▒▒   ▒▒  ▒▒▒▒  ▒▒  ▒▒▒▒  ▒▒  ▒▒▒▒  ▒▒  ▒▒▒▒  ▒
 ▓        ▓▓▓▓▓  ▓▓▓▓▓        ▓▓  ▓▓▓▓  ▓▓  ▓▓▓▓▓▓▓▓        ▓▓  ▓▓▓▓  ▓
 █  █  █  █████  █████  █  █  ██  ████  ██  ████  ██  ████  ██        █
 █  ████  ██        ██  ████  ███      ████      ███  ████  ██  ████  █
 ██████████████████████████████████████████████████████████████████████

<b>Welcome to my github pages portfolio!</b>
This is a terminal interface where you can learn more about me.
Type <b>'help'</b> to see available commands
Or click these links here for quick access:
<a href="#" class="terminal-link" data-command="whoami">[whoami]</a> <a href="#" class="terminal-link" data-command="contact">[contact]</a>
`;
        },
        help: () => {
            return `Available terminal commands:
  banner    - Display the welcome banner
  whoami    - Display information about me
  contact   - Show all my contact information
  email     - Display my email address
  github    - Display my GitHub profile link
  linkedin  - Display my LinkedIn profile link
  clear     - Clear the terminal screen
  help      - Display this help message
  echo      - Display a line of text (e.g., echo hello world)`;
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
        },
        contact: () => {
            return `You can reach out to me at:
${linkEmail}
${linkGithub}
${linkLinkedin}`;
        },
        email: () => {
            return linkEmail;
        },
        github: () => {
            return linkGithub;
        },
        linkedin: () => {
            return linkLinkedin;
        },
        clear: () => {
            outputDiv.innerHTML = '';
            return '';
        },
        echo: (args) => {
            return args.join(' ');
        },
        hello: () => {
            return `Hello! :)`;
        }
    };

    function displayOutput(text, className = 'normal') {
        const line = document.createElement('div');
        line.className = className;
        line.innerHTML = text;
        outputDiv.appendChild(line);
    }

    function displayCommandEcho(commandLineText) {
        const lineContainer = document.createElement('div');
        lineContainer.className = 'echoed-command-line'; // Container for the whole echoed line

        const promptPart = document.createElement('span');
        promptPart.className = 'echoed-prompt';
        promptPart.textContent = promptSpan.textContent; // Uses the current prompt text
        lineContainer.appendChild(promptPart);

        const commandPart = document.createElement('span');
        commandPart.className = 'echoed-command-text';
        commandPart.textContent = commandLineText; // The actual command typed by the user
        lineContainer.appendChild(commandPart);

        outputDiv.appendChild(lineContainer);
    }

    function processCommand(commandLine) {
        const parts = commandLine.trim().split(' ');
        const command = parts[0].toLowerCase();
        const args = parts.slice(1);

        displayCommandEcho(commandLine);

        if (command in commands) {
            const output = commands[command](args);
            if (output) { // Some commands like 'clear' might not return output
                displayOutput(output);
            }
        } else if (command === '') {
            // No command entered, do nothing or display prompt again if needed
        }
        else {
            displayOutput(`Command not found: ${command}. Type 'help' for a list of commands.`, 'error');
        }

        // Scroll to the bottom of the output
        commandInput.scrollIntoView({ behavior: 'smooth' });
    }

    commandInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent default form submission
            const commandLine = commandInput.value;
            processCommand(commandLine);
            commandInput.value = ''; // Clear input
        }
    });

    // Initial banner display
    displayOutput(commands.banner());

    // Focus on input when terminal is clicked (if not on input itself)
    terminalDiv.addEventListener('click', (event) => {
        if (event.target !== commandInput) {
            commandInput.focus();
        }
    });

    // Handle clicks on terminal links
    outputDiv.addEventListener('click', (event) => {
        const target = event.target;
        // Check if the clicked element is a link with a data-command attribute
        if (target.tagName === 'A' && target.classList.contains('terminal-link') && target.dataset.command) {
            event.preventDefault(); // Prevent default link navigation
            const commandToRun = target.dataset.command;
            processCommand(commandToRun);
            commandInput.focus(); // Keep focus on the input
        }
    });
});