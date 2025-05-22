const terminalDiv = document.getElementById('terminal');
const outputDiv = document.getElementById('command-output');
const commandInput = document.getElementById('command-input');
const commandPrompt = document.getElementById('command-prompt');

const commandPalette = getCommandPalette(outputDiv);

function displayOutput(text, className = 'normal') {
    const line = document.createElement('div');
    line.className = className;
    line.innerHTML = text;
    outputDiv.appendChild(line);
}

function displayCommandEcho(commandLineText) {
    const echoContainer = document.createElement('div');
    echoContainer.className = 'echo';

    const promptPart = document.createElement('span');
    promptPart.className = 'prompt';
    promptPart.innerHTML = commandPrompt.innerHTML;
    echoContainer.appendChild(promptPart);

    const commandPart = document.createElement('span');
    commandPart.className = 'text';
    commandPart.textContent = commandLineText;
    echoContainer.appendChild(commandPart);

    outputDiv.appendChild(echoContainer);
}

function processCommand(commandLine) {
    const parts = commandLine.trim().split(' ');
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    displayCommandEcho(commandLine);

    if (command in commandPalette) {
        const output = commandPalette[command](args);
        if (output) { // Some commands like 'clear' might not return output
            displayOutput(output);
        }
    } else if (command === '') {
        // No command entered, do nothing or display prompt again if needed
    }
    else {
        displayOutput(`Command not found: ${command}. Type 'help' for a list of commands.`, 'error');
    }

    // Snap to the bottom of the output
    commandInput.scrollIntoView();
}

document.addEventListener('DOMContentLoaded', () => {
    displayOutput(commandPalette.banner());
    displayOutput(commandPalette.welcome());

    commandInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent default form submission
            processCommand(commandInput.value);
            commandInput.value = ''; // Clear input
        }
        // TODO: Add up-down command history navigation
    });

    // Handle clicks on terminal
    terminalDiv.addEventListener('click', (event) => {
        const target = event.target;

        // Click anywhere in the terminal div to focus the command input
        if (target !== commandInput) {
            commandInput.focus();
        }

        // Check if the clicked element is a link with a data-command attribute
        if (target.tagName === 'A' && target.dataset.command) {
            event.preventDefault(); // Prevent default link navigation
            const commandToRun = target.dataset.command;
            processCommand(commandToRun);
            commandInput.focus(); // Keep focus on the input
        }
    });
});