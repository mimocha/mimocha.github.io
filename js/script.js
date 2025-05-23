const bodyDiv = document.querySelector('body');
const terminalDiv = document.getElementById('terminal');
const outputDiv = document.getElementById('command-output');
const commandInput = document.getElementById('command-input');
const commandPrompt = document.getElementById('command-prompt');
const commandPalette = getCommandPalette(outputDiv);
const MAX_HISTORY_SIZE = 100;

function displayOutput(text, outputStatus = 'normal') {
    const line = document.createElement('div');
    line.className = outputStatus;
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

    // Output command result
    if (command in commandPalette) {
        let output = commandPalette[command](args);
        if (output) {displayOutput(output);}
    } else if (command.length > 0) {
        displayOutput(
            `Command not found: ${command}. Type 'help' for a list of commands.`,
            outputStatus = `error`);
    }

    // Store command in history
    if (command.length !== '') {
        _ = commandHistory.unshift(commandLine);
        // Remove the oldest command if over the max history size
        if (commandHistory.length > MAX_HISTORY_SIZE) {
            _ = commandHistory.pop();
        }
        console.log(commandHistory);
        localStorage.setItem('commandHistory', JSON.stringify(commandHistory));
    }

    // Snap to the bottom of the output
    commandInput.scrollIntoView();
}

document.addEventListener('DOMContentLoaded', () => {
    // Load locally stored command history
    const storedHistory = localStorage.getItem('commandHistory')
    if (storedHistory) {
        commandHistory = JSON.parse(storedHistory);
    } else {
        commandHistory = [];
    }
    // Initialize command history index -- negative one represents current input
    historyIndex = -1;
    // Variable to store the current command being typed
    pendingCommand = '';

    displayOutput(commandPalette.banner());
    displayOutput(commandPalette.welcome());
});

// Handles special key inputs (e.g., Enter, ArrowUp, ArrowDown)
// Uses 'keydown' to have cursor move as expected
commandInput.addEventListener('keydown', (event) => {
    // Handle Enter key for command submission
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent default form submission
        processCommand(commandInput.value);
        commandInput.value = ''; // Clear input
        pendingCommand = ''; // Reset current command
    }
    
    // Handle ArrowUp and ArrowDown keys for command history navigation
    else if ((event.key === 'ArrowUp') || (event.key === 'ArrowDown')) {
        event.preventDefault(); // Prevent default scrolling

        // Scroll up to earlier command, scroll down to more recent command
        if ((event.key === 'ArrowUp') && (historyIndex < commandHistory.length - 1)) {
            historyIndex++;
        } else if ((event.key === 'ArrowDown') && (historyIndex > -1)) {
            historyIndex--;
        }

        // Negative one represents current input
        if (historyIndex == -1) {
            commandInput.value = pendingCommand;
        } else {
            commandInput.value = commandHistory[historyIndex];
        }
    }
});

// Handles all other "standard" key inputs (e.g., letters, numbers, symbols)
// Uses 'keyup' to wait for charater to be registered first, otherwise the most recent character will be missing
commandInput.addEventListener('keyup', (event) => {
    if (event.key.length === 1) {
        pendingCommand = commandInput.value;
        historyIndex = -1; // Reset history index when typing a new command
    }
});

// Handle clicks on terminal
terminalDiv.addEventListener('click', (event) => {
    // Click anywhere in the terminal div to focus the command input
    if (event.target !== commandInput) {
        commandInput.focus();
    }

    // Check if the clicked element is a link with a data-command attribute
    if (event.target.tagName === 'A' && event.target.dataset.command) {
        event.preventDefault(); // Prevent default link navigation
        const commandToRun = event.target.dataset.command;
        processCommand(commandToRun);
        commandInput.focus(); // Keep focus on the input
    }
});