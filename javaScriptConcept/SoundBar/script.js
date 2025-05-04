document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    const stopButton = document.querySelector('.stop');
    let currentAudio = null;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Stop any currently playing audio
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0; // Reset to start
            }

            // Create a new audio object and play the selected sound
            const soundFile = button.getAttribute('data-sound');
            currentAudio = new Audio(soundFile);
            currentAudio.play();
        });
    });

    stopButton.addEventListener('click', () => {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0; // Reset to start
        }
    });
});