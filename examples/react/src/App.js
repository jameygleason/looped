import React from 'react';
import styled from 'styled-components';
import Carousel from 'looped-react';

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
  <Wrapper>
    <h1>Looped Carousel React</h1>
    <Carousel
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
    </Carousel>
  </Wrapper>
);

const Wrapper = styled.div`
  .carousel-outer {
    width: 96vw;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .carousel-inner {
    width: 90vw;
    margin: 0 auto;
  }

  h1 {
    text-align: center;
    margin-bottom: 72px;
  }

  img {
    margin: 0 auto;
    display: block;
    max-height: 350px;
    height: 100%;
    max-width: 350px;
    width: 100%;
  }

  button {
    all: unset;
  }

  button span {
    font-size: 35px;
  }
`;

export default App;
