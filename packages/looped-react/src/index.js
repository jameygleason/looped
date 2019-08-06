import React from 'react';
import ReactDOM from 'react-dom';
import LoopedCarousel from './looped-carousel';
import App from './App';

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
const caro =
  carousel &&
  new LoopedCarousel({
    selector,
    ...config,
  });

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', function() {
  caro.prev();
});

next.addEventListener('click', function() {
  caro.next();
});

ReactDOM.render(<App />, document.getElementById('root'));

export default [caro, App];
