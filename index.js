// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Select the truck-images div
    const truckImages = document.querySelector('.truck-images');
    
    // Set the initial opacity to 0
    truckImages.style.opacity = 0;
    
    // Set the duration of the fade-in effect in milliseconds
    const duration = 3000; // 6 seconds
    const interval = 10; // Interval for each step (in ms)
    const increment = interval / duration; // Amount to increase opacity each step
    
    // Incrementally increase opacity
    let opacity = 0;
    const fadeIn = setInterval(() => {
        opacity += increment; // Increase opacity
        if (opacity >= 1) {
            opacity = 1; // Cap opacity at 1
            clearInterval(fadeIn); // Stop the interval
        }
        truckImages.style.opacity = opacity; // Apply new opacity value
    }, interval);
});