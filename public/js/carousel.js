const carouselInner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;

function updateCarousel() {
    const translateX = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${translateX}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
});