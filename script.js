document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let currentIndex = 0;

    function showSlide(index) {
        const slidesContainer = document.querySelector('.slides');
        slidesContainer.style.transform = `translateX(${-index * 100}%)`;
    }

    function autoSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    let slideInterval = setInterval(autoSlide, 4000);

    const filterButtons = document.querySelectorAll('.filter');
    const images = document.querySelectorAll('.main div');

    filterButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const filter = this.getAttribute('data-filter');

            images.forEach(image => {
                if (filter === 'all') {
                    image.classList.remove('hidden');
                } else {
                    if (image.getAttribute('data-category') === filter) {
                        image.classList.remove('hidden');
                    } else {
                        image.classList.add('hidden');
                    }
                }
            });
        });
    });
});
