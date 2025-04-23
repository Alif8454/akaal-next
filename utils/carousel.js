const heroSection = document.querySelector('.hero-section');
const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementById('nextSlide');
const prevBtn = document.getElementById('prevSlide');

let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });

  // Ganti background section jika index = 1 (slide ke-2)
  if (index === 1) {
    heroSection.classList.add('bg-slide-2');
  } else {
    heroSection.classList.remove('bg-slide-2');
  }
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

// Tampilkan slide awal
showSlide(currentIndex);

export function initCarousel() {

}
