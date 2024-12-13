// script.js

// Function to change the background color dynamically based on user input
function changeBackgroundColor() {
    const colorInput = document.getElementById("color-picker").value;
    document.body.style.backgroundColor = colorInput;
    localStorage.setItem('backgroundColor', colorInput); // Save color to localStorage
}

// Function to show a personalized message on the webpage
function showPersonalizedMessage() {
    const username = localStorage.getItem('username');
    const messageElement = document.getElementById("personalized-message");

    if (username) {
        messageElement.textContent = `Welcome back, ${username}! Thanks for visiting our Environmental Sustainability Hub.`;
    } else {
        messageElement.textContent = `Welcome to the Environmental Sustainability Hub! Please log in.`;
    }
}

// Function to store user inputted name in localStorage
function storeUsername() {
    const usernameInput = document.getElementById("username-input").value;
    localStorage.setItem('username', usernameInput);
    showPersonalizedMessage(); // Update the personalized message
}

// Function to reset all settings
function resetSettings() {
    localStorage.removeItem('username');
    localStorage.removeItem('backgroundColor');
    document.body.style.backgroundColor = ''; // Reset to default
    showPersonalizedMessage(); // Update message to default
}

// Event listener for the color picker
document.getElementById("color-picker").addEventListener("input", changeBackgroundColor);

// Event listener for the form submission
document.getElementById("username-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing the page
    storeUsername();
});

// Event listener for the reset button
document.getElementById("reset-btn").addEventListener("click", resetSettings);

// Event listener for page load to restore settings from localStorage
window.addEventListener("load", function() {
    const savedColor = localStorage.getItem('backgroundColor');
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    }

    showPersonalizedMessage(); // Update personalized message on page load
});

// Example array manipulation: Store and display eco-friendly products in an array
const products = [
    { name: "Eco-Friendly Shampoo", price: 12.99, description: "A biodegradable, eco-friendly shampoo." },
    { name: "Reusable Water Bottle", price: 19.99, description: "A reusable water bottle to reduce single-use plastic." },
    { name: "Solar-Powered Lantern", price: 29.99, description: "A solar-powered lantern to light your outdoor adventures." }
];

// Function to display products dynamically
function displayProducts() {
    const productContainer = document.getElementById("product-list");
    productContainer.innerHTML = ''; // Clear any existing content

    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>Price: $${product.price.toFixed(2)}</strong></p>
        `;
        productContainer.appendChild(productElement);
    });
}

// Call function to display products on page load
window.addEventListener("load", displayProducts);

