let currentIndex = 0;
const track = document.getElementById('sliderTrack');

function updateSlider() {
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;
    
    const currentWidth = slides[0].clientWidth; 
    const offset = -currentIndex * currentWidth;
    track.style.transform = `translateX(${offset}px)`;
}

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    
    currentIndex += direction;

    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    updateSlider();
    resetTimer();
}

let autoSlide = setInterval(() => moveSlide(1), 4000);

function resetTimer() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => moveSlide(1), 4000);
}

window.addEventListener('resize', updateSlider);
window.onload = updateSlider;