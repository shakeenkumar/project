// This JavaScript file includes dynamic interactions for the website.

// Event listener for when the page is loaded
document.addEventListener('DOMContentLoaded', function () {
    loadLikesFromStorage();  // Load saved like counts on page load

    // Add event listeners to all like buttons
    const likeButtons = document.querySelectorAll('.like-btn');
    likeButtons.forEach(button => {
        button.addEventListener('click', handleLikeClick);
    });
});

// Function to handle the like button click
function handleLikeClick(event) {
    const button = event.target;
    const tipId = button.dataset.tip;
    const likeCountSpan = button.nextElementSibling;

    // Get the current like count from the span and increment it
    let likeCount = parseInt(likeCountSpan.textContent.split(' ')[0]);
    likeCount++;

    // Update the like count on the page
    likeCountSpan.textContent = `${likeCount} Likes`;

    // Save the updated like count in localStorage
    saveLikeCount(tipId, likeCount);
}

// Function to save the like count to localStorage
function saveLikeCount(tipId, likeCount) {
    const likeCounts = JSON.parse(localStorage.getItem('likeCounts')) || {};
    likeCounts[tipId] = likeCount;
    localStorage.setItem('likeCounts', JSON.stringify(likeCounts));
}

// Function to load like counts from localStorage
function loadLikesFromStorage() {
    const likeCounts = JSON.parse(localStorage.getItem('likeCounts')) || {};

    // Update each like count on the page based on localStorage values
    for (let tipId in likeCounts) {
        const likeCount = likeCounts[tipId];
        const tipElement = document.getElementById(`tip${tipId}`);
        if (tipElement) {
            const likeCountSpan = tipElement.querySelector('.like-count');
            likeCountSpan.textContent = `${likeCount} Likes`;
        }
    }
}
