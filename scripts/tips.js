// JavaScript file: dynamic.js

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode); // Save state to localStorage
    updateDarkModeText(isDarkMode);
}

// Function to update dark mode toggle text
function updateDarkModeText(isDarkMode) {
    const darkModeButton = document.getElementById('darkModeButton');
    darkModeButton.textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
}

// Function to display tips dynamically
function displayTips(tips) {
    const tipsContainer = document.getElementById('tips-container');
    tipsContainer.innerHTML = ''; // Clear existing content

    tips.forEach((tip, index) => {
        const tipElement = document.createElement('div');
        tipElement.classList.add('tip');
        tipElement.innerHTML = `
            <h3>Tip ${index + 1}</h3>
            <p>${tip}</p>
        `;
        tipsContainer.appendChild(tipElement);
    });
}

// Event listener for the form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent page reload
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const newMessage = { name, email, message };
    saveMessage(newMessage);
    displayMessages();
}

// Save message to localStorage
function saveMessage(message) {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push(message);
    localStorage.setItem('messages', JSON.stringify(messages));
}

// Display saved messages dynamically
function displayMessages() {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    const messagesContainer = document.getElementById('messages-container');
    messagesContainer.innerHTML = ''; // Clear existing content

    if (messages.length === 0) {
        messagesContainer.innerHTML = '<p>No messages to display.</p>';
    } else {
        messages.forEach((msg, index) => {
            const msgElement = document.createElement('div');
            msgElement.classList.add('message');
            msgElement.innerHTML = `
                <h4>Message ${index + 1} from ${msg.name}</h4>
                <p>Email: ${msg.email}</p>
                <p>${msg.message}</p>
            `;
            messagesContainer.appendChild(msgElement);
        });
    }
}

// Set up event listeners and initialize
function initialize() {
    // Dark mode toggle
    document.getElementById('darkModeButton').addEventListener('click', toggleDarkMode);

    // Form submission
    document.getElementById('contact').addEventListener('submit', handleFormSubmit);

    // Load tips dynamically
    const tips = [
        'Use reusable water bottles and bags.',
        'Switch to energy-efficient lighting.',
        'Choose public transportation over driving.',
    ];
    displayTips(tips);

    // Restore dark mode from localStorage
    const isDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
    updateDarkModeText(isDarkMode);

    // Display saved messages
    displayMessages();
}

// Initialize the script when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initialize);
