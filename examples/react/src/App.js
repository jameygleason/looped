import React from 'react';

import Carousel from './Carousel';

const config = {
  transitionDuration: 420,
  easing: 'ease-out',
  perPage: {
    w400: 1,
    w750: 3,
    w1200: 5,
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

const App = () => (
  <Carousel
    config={config}
    prev={prev => <button onClick={prev}>prev</button>}
    next={next => <button onClick={next}>next</button>}
  >
    <img src="https://source.unsplash.com/random" alt="" />
    <img src="https://source.unsplash.com/random" alt="" />
    <img src="https://source.unsplash.com/random" alt="" />
    <img src="https://source.unsplash.com/random" alt="" />
    <img src="https://source.unsplash.com/random" alt="" />
    <img src="https://source.unsplash.com/random" alt="" />
    <img src="https://source.unsplash.com/random" alt="" />
  </Carousel>
);

export default App;
