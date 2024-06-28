// script.js
document.addEventListener("DOMContentLoaded", () => {
    const progressBarInner = document.getElementById('progress-bar-inner');
    const completionPercentage = document.getElementById('completion-percentage');

    // Function to animate the progress bar and update the percentage
    function animateProgressBar(targetPercentage, duration) {
        let startTime = null;

        function updateProgressBar(timestamp) {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1); // Ensure progress does not exceed 1

            // Calculate the current width and percentage
            const currentWidth = progress * targetPercentage;
            progressBarInner.style.width = currentWidth + '%';
            completionPercentage.textContent = Math.floor(currentWidth) + '%';

            // Continue the animation until the target percentage is reached
            if (progress < 1) {
                requestAnimationFrame(updateProgressBar);
            }
        }

        // Start the animation
        requestAnimationFrame(updateProgressBar);
    }

    // Animate progress bar to 50% over 3 seconds
    animateProgressBar(50, 3000);
});
