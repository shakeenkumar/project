document.addEventListener("DOMContentLoaded", function () {
    // Array to store sustainability tips
    const tips = [
        {
            title: "Tip 1: Reduce Plastic Waste",
            description: "Minimize single-use plastics by opting for reusable bags, bottles, and containers."
        },
        {
            title: "Tip 2: Save Energy",
            description: "Switch to LED bulbs, turn off lights when not in use, and unplug electronics when they're not needed."
        },
        {
            title: "Tip 3: Choose Sustainable Transportation",
            description: "Reduce your carbon footprint by walking, biking, or using public transportation."
        }
    ];

    // Display tips dynamically in the tips section
    const tipsSection = document.querySelector(".home-grid");
    tips.forEach(tip => {
        const tipCard = document.createElement("section");
        tipCard.classList.add("tip-card");

        const tipTitle = document.createElement("h2");
        tipTitle.textContent = tip.title;

        const tipDesc = document.createElement("p");
        tipDesc.textContent = tip.description;

        tipCard.appendChild(tipTitle);
        tipCard.appendChild(tipDesc);
        tipsSection.appendChild(tipCard);
    });

    // Form validation example
    const form = document.querySelector("form");  // Make sure the form exists
    const usernameInput = document.querySelector("#username");  // Example of form input validation
    const errorMsg = document.querySelector("#error-msg");  // Element to show error message

    // Function to validate username input
    function validateForm(event) {
        event.preventDefault();
        const username = usernameInput.value.trim();

        if (username === "") {
            errorMsg.textContent = "Username cannot be empty!";
            errorMsg.style.color = "red";
        } else {
            errorMsg.textContent = "";
            // Save username to localStorage for future use
            localStorage.setItem("username", username);
            alert(`Welcome, ${username}!`);
        }
    }

    // Attach form validation function
    if (form) {
        form.addEventListener("submit", validateForm);
    }

    // Greeting user with stored username if available
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
        alert(`Welcome back, ${storedUsername}!`);
    }

    // Lazy loading using IntersectionObserver
    const lazyImages = document.querySelectorAll("img.lazy");

    const observerOptions = {
        root: null,  // Use the viewport as the root
        rootMargin: "0px",  // Trigger loading when images are in the viewport
        threshold: 0.1  // Trigger when 10% of the image is visible
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const image = entry.target;
                image.src = image.dataset.src; // Load the actual image
                image.classList.remove("lazy");
                observer.unobserve(image); // Stop observing after loading
            }
        });
    }, observerOptions);

    // Observe each lazy image
    lazyImages.forEach(image => {
        imageObserver.observe(image);
    });
});
