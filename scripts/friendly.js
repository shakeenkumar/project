document.addEventListener('DOMContentLoaded', () => {
    // Function to highlight the active navigation link
    function highlightActiveLink() {
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            if (link.href === window.location.href) {
                link.style.color = 'green';
                link.style.fontWeight = 'bold';
            }
        });
    }

    // Function to display dynamic greeting based on the time of day
    function displayGreeting() {
        const greetingElement = document.createElement('p');
        const hour = new Date().getHours();
        let greetingText = '';
        
        if (hour < 12) {
            greetingText = 'Good Morning! Welcome to our hub.';
        } else if (hour < 18) {
            greetingText = 'Good Afternoon! Explore eco-friendly solutions.';
        } else {
            greetingText = 'Good Evening! Ready to contribute to sustainability?';
        }
        
        greetingElement.textContent = greetingText;
        document.querySelector('#hero-msg').appendChild(greetingElement);
    }

    // Function to lazy load images
    function lazyLoadImages() {
        const lazyImages = document.querySelectorAll('img');
        lazyImages.forEach(img => {
            img.loading = 'lazy';
        });
    }

    // Function to handle "Book Now" button click event and store a booking in localStorage
    function handleBookingClick() {
        const bookingInfo = {
            bookingDate: new Date().toLocaleString(),
            customerName: prompt('Enter your name for booking:'),
        };
        
        if (bookingInfo.customerName) {
            localStorage.setItem('latestBooking', JSON.stringify(bookingInfo));
            console.log(`Booking created: ${bookingInfo.customerName} on ${bookingInfo.bookingDate}`);
            alert(`Thank you, ${bookingInfo.customerName}. Your booking is confirmed!`);
        } else {
            alert('Booking canceled. Please enter your name.');
        }
    }

    // Function to retrieve and display the latest booking from localStorage
    function displayLatestBooking() {
        const booking = JSON.parse(localStorage.getItem('latestBooking'));
        if (booking) {
            const bookingMessage = `Latest Booking: ${booking.customerName} on ${booking.bookingDate}`;
            const bookingElement = document.createElement('p');
            bookingElement.textContent = bookingMessage;
            document.querySelector('#latest-booking').appendChild(bookingElement);
        }
    }

    // Function to update a list of eco-friendly tips using an array
    function updateEcoTips() {
        const ecoTips = [
            "Switch to reusable shopping bags.",
            "Use energy-efficient light bulbs.",
            "Plant a tree to improve air quality.",
            "Compost your food waste to reduce landfill impact.",
            "Conserve water by fixing leaks and using water-saving appliances."
        ];

        const tipsList = document.querySelector('#eco-tips-list');
        ecoTips.forEach(tip => {
            const listItem = document.createElement('li');
            listItem.textContent = tip;
            tipsList.appendChild(listItem);
        });
    }

    // Event listeners for interactivity
    document.querySelector('.book').addEventListener('click', handleBookingClick);

    // Initialize all dynamic features
    highlightActiveLink();
    displayGreeting();
    lazyLoadImages();
    displayLatestBooking();
    updateEcoTips();
});
