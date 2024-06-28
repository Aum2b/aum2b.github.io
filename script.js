document.addEventListener("DOMContentLoaded", () => {
    const headerText = document.getElementById('header-text');
    const mainContent = document.getElementById('main-content');
    const progressBar = document.querySelector('.progress-bar');
    const locationInfo = document.getElementById('location');
    const completionPercentage = document.getElementById('completion-percentage');
    const countdownElement = document.querySelector('.countdown');
    const socialIcons = document.querySelector('.social-icons');

    // Fonction pour ajouter la classe 'show' aux éléments après un délai
    function revealElements() {
        setTimeout(() => {
            headerText.classList.add('show');
        }, 200); // Démarre après 0.2s

        setTimeout(() => {
            mainContent.classList.add('show');
        }, 400); // Démarre après 0.4s

        setTimeout(() => {
            progressBar.classList.add('show');
        }, 600); // Démarre après 0.6s

        setTimeout(() => {
            locationInfo.classList.add('show');
        }, 800); // Démarre après 0.8s

        setTimeout(() => {
            completionPercentage.classList.add('show');
        }, 1000); // Démarre après 1s

        setTimeout(() => {
            countdownElement.classList.add('show');
        }, 1200); // Démarre après 1.2s

        setTimeout(() => {
            socialIcons.classList.add('show');
        }, 1400); // Démarre après 1.4s
    }

    // Appel de la fonction pour révéler les éléments
    revealElements();

    // Votre code existant pour l'animation de la barre de progression et le compte à rebours
    const progressBarInner = document.getElementById('progress-bar-inner');
    const animationDuration = 3000; // Durée en millisecondes (3 secondes)

    // Set the duration of the progress bar animation in CSS
    progressBarInner.style.setProperty('--progress-bar-duration', `${animationDuration}ms`);

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

    // Animate progress bar to 50% over the duration defined
    animateProgressBar(50, animationDuration);

    // Function to update the countdown timer
    function updateCountdown(endDate) {
        const now = new Date().getTime();
        const distance = endDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.textContent = `site web accessible dans les ${days} jours à venir ${hours}:${minutes}:${seconds}`;

        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = "EXPIRED";
        }
    }

    // Set the end date for the countdown (30 days from now)
    const endDate = new Date().getTime() + (30 * 24 * 60 * 60 * 1000);

    // Update the countdown every second
    const countdownInterval = setInterval(() => {
        updateCountdown(endDate);
    }, 1000);
});
