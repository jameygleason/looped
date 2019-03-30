import React from 'react';

import RescaleCarouselReact from 'rescale-carousel/react';

// Optional CONFIG start
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
};
// Optional CONFIG end

const App = () => (
  <>
    <h1>Rescale Carousel React</h1>
    <RescaleCarouselReact
      // Optional CONFIG start
      config={config}
      // Optional CONFIG end

      // Optional NEXT/PREV buttons start
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
      // Optional NEXT/PREV buttons end
    >
      <img src="https://source.unsplash.com/random/350x350" alt="" />
      <img src="https://source.unsplash.com/random/375x375" alt="" />
      <img src="https://source.unsplash.com/random/400x400" alt="" />
      <img src="https://source.unsplash.com/random/425x425" alt="" />
      <img src="https://source.unsplash.com/random/450x450" alt="" />
      <img src="https://source.unsplash.com/random/475x475" alt="" />
      <img src="https://source.unsplash.com/random/500x500" alt="" />
      <img src="https://source.unsplash.com/random/525x525" alt="" />
      <img src="https://source.unsplash.com/random/550x550" alt="" />
    </RescaleCarouselReact>
  </>
);

export default App;
