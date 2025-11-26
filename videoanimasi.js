document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const videoCards = document.querySelectorAll('.video-card');

    // Set initial active button to "Semua" (all)
    const allButton = document.querySelector('.filter-button[data-category="all"]');
    if (allButton) {
        allButton.classList.add('active');
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const category = this.getAttribute('data-category');

            videoCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (category === 'all' || cardCategory === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
