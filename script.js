const container = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-item');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;

function updateCarousel() {
  const width = slides[0].clientWidth;
  container.style.transform = `translateX(-${currentIndex * width}px)`;
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});


window.addEventListener('resize', updateCarousel);
