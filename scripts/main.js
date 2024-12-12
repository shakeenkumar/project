// Modal Toggle Functionality
const toggleModalButton = document.getElementById("toggleModal");
const modal = document.getElementById("modal");

toggleModalButton?.addEventListener("click", function () {
    if (modal.style.display === "none" || modal.style.display === "") {
        modal.style.display = "block";
        modal.style.transition = "opacity 1s";
        modal.style.opacity = 1;
    } else {
        modal.style.display = "none";
    }
});

// Theme Toggle Functionality (Light/Dark Mode)
const themeToggleButton = document.getElementById("themeToggle");
themeToggleButton?.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
});

// Smooth Scroll for Anchor Links
const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        window.scrollTo({
            top: target.offsetTop,
            behavior: "smooth"
        });
    });
});

// Real-time Username Validation for a Booking Form
const usernameInput = document.getElementById("username");
const usernameError = document.getElementById("usernameError");

usernameInput?.addEventListener("input", function () {
    if (usernameInput.value.length < 3) {
        usernameError.textContent = "Username must be at least 3 characters long.";
        usernameInput.style.borderColor = "red";
    } else {
        usernameError.textContent = "";
        usernameInput.style.borderColor = "green";
    }
});

// Handle Form Submission with Basic Validation
const form = document.getElementById("contactForm");
form?.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission for demo purposes
    const name = usernameInput.value;
    if (name.length < 3) {
        alert("Please enter a valid username.");
    } else {
        alert(`Form submitted successfully, welcome ${name}!`);
    }
});

// Expand/Collapse Section (for more interaction)
const expandButton = document.getElementById("expandBtn");
const expandSection = document.getElementById("expandSection");

expandButton?.addEventListener("click", function () {
    if (expandSection.style.display === "none" || expandSection.style.display === "") {
        expandSection.style.display = "block";
        expandButton.textContent = "Collapse Section";
    } else {
        expandSection.style.display = "none";
        expandButton.textContent = "Expand Section";
    }
});
