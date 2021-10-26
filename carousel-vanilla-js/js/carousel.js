const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const nav = document.querySelector('.carousel__nav');
const dots = Array.from(nav.children);

const slideWidth = slides[0].getBoundingClientRect().width;
// console.log(slideWidth);

// arrange the slides next to one another
const setSlidePosition = (slide, index) => {
  slide.style.left = `${slideWidth*index}px`;
};
slides.forEach(setSlidePosition);

const moveToSlide = (currentSlide, targetSlide) => {
  track.style.transform = `translate(-${targetSlide.style.left})`;
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
};

const toggleArrows = (targetIndex) => {
  if(targetIndex === 0) {
    prevButton.classList.add('hidden');
    nextButton.classList.remove('hidden');
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove('hidden');
    nextButton.classList.add('hidden');
  } else {
    prevButton.classList.remove('hidden');
    nextButton.classList.remove('hidden');
  }
};

// When I click left, move slides to the left
prevButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = nav.querySelector('.current-slide');
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = dots.findIndex(dot => dot === prevDot);

  moveToSlide(currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
  toggleArrows(prevIndex);
});

// when I click right, move slides to the right
nextButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = nav.querySelector('.current-slide');
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = dots.findIndex(dot => dot === nextDot);
  
  moveToSlide(currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  toggleArrows(nextIndex);
});

// When I click the nav indicators, move to that slide
nav.addEventListener('click', e => {
  const targetDot = e.target.closest('button');
  if(!targetDot) return;

  const currentSlide = track.querySelector('.current-slide');
  const currentDot = nav.querySelector('.current-slide');
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  toggleArrows(targetIndex);
});