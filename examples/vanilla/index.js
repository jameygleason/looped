import LoopedCarousel from 'looped-carousel';

const selector = '.carousel';
const carousel = document.querySelector(selector);
const config = {
  perPage: {
    // Falls back to the default of 1 below 750px
    w750: 3,
    w1000: 4,
    w1200: 5,
    w1400: 6,
  },
  gap: 5,
};

// Will initialize with default settings
const initCarousel =
  carousel &&
  new LoopedCarousel({
    selector,
    ...config,
  });

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', function() {
  initCarousel.prev();
});

next.addEventListener('click', function() {
  initCarousel.next();
});

initCarousel();
