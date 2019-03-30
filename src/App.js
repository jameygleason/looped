import React from 'react';
import RescaleCarouselReact from './RescaleCarouselReact';

const config = {
  transitionDuration: 450,
  easing: 'ease-out',
  perPage: {
    // Falls back to the default of 1 below 750px
    w750: 3,
    w1000: 4,
    w1200: 5,
    w1400: 6,
  },
  gap: 5,
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
  loop: true,
  animate: true,
  intervalDuration: 4250,
  rtl: false,
  onInit: () => {},
  onChange: () => {},
  destroy: () => {},
};

const App = () => (
  <RescaleCarouselReact
    config={config}
    prev={prev => (
      <button type="button" onClick={prev}>
        <span role="img" aria-label="previous">
          ◀️
        </span>
      </button>
    )}
    next={next => (
      <button type="button" onClick={next}>
        <span role="img" aria-label="next">
          ▶️
        </span>
      </button>
    )}
  >
    <img src="https://source.unsplash.com/random/425x425" alt="" />
    <img src="https://source.unsplash.com/random/450x450?f=9" alt="" />
    <img src="https://source.unsplash.com/random/450x450" alt="" />
    <img src="https://source.unsplash.com/random/475x475?g=10" alt="" />
    <img src="https://source.unsplash.com/random/475x475" alt="" />
    <img src="https://source.unsplash.com/random/350x350?h=11" alt="" />
    <img src="https://source.unsplash.com/random/350x350" alt="" />
    <img src="https://source.unsplash.com/random/400x400?i=12" alt="" />
    <img src="https://source.unsplash.com/random/400x400" alt="" />
    <img src="https://source.unsplash.com/random/425x425?j=13" alt="" />
  </RescaleCarouselReact>
);

export default App;
