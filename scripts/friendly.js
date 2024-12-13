document.addEventListener('DOMContentLoaded', () => {
    // Highlight the active nav link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.style.color = 'green';
            link.style.fontWeight = 'bold';
        }
    });

    // Display dynamic greeting
    const greetingElement = document.createElement('p');
    const hour = new Date().getHours();
    if (hour < 12) {
        greetingElement.textContent = 'Good Morning! Welcome to our hub.';
    } else if (hour < 18) {
        greetingElement.textContent = 'Good Afternoon! Explore eco-friendly solutions.';
    } else {
        greetingElement.textContent = 'Good Evening! Ready to contribute to sustainability?';
    }
    document.querySelector('#hero-msg').appendChild(greetingElement);

    // Lazy load images
    const lazyImages = document.querySelectorAll('img');
    lazyImages.forEach(img => {
        img.loading = 'lazy';
    });

    // "Book Now" button click event
    document.querySelector('.book').addEventListener('click', () => {
        console.log('Book Now button clicked!');
    });
});
