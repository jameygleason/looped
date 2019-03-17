import React from 'react';

import Carousel from 'rescale-carousel/react';

// Optional CONFIG start
const config = {
  transitionDuration: 420,
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
  <Carousel
    // Optional CONFIG start
    config={config}
    // Optional CONFIG end

    // Optional NEXT/PREV buttons start
    prev={prev => <button onClick={prev}>prev</button>}
    next={next => <button onClick={next}>next</button>}
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
  </Carousel>
);

export default App;
