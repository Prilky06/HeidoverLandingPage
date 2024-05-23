// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Wait for the entire page to load
    window.onload = function() {
        var loadingScreen = document.getElementById('loading-screen');
        var content = document.getElementById('content');

        // Hide the loading screen
        loadingScreen.style.opacity = '0';
        setTimeout(function() {
            loadingScreen.style.display = 'none';
            // Show the main content
            content.style.display = 'block';
            content.style.opacity = '1';
        }, 500); // Wait for the fade-out transition to complete
    };
});
