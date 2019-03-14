import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ReusableCarousel from './reusable-carousel';

class Carousel extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: null,
  };

  constructor() {
    super();

    const selectorID = Math.random()
      .toString(36)
      .substring(6);

    this.state = {
      selector: `carousel-${selectorID}`,
    };
  }

  componentDidMount = () => {
    this.carousel =
      document &&
      new ReusableCarousel({
        selector: `.${this.state.selector}`,
        ...this.props.config,
      });
  };

  componentWillUnmount = () => {
    this.carousel.destroyInstance();
  };

  prev = () => {
    this.carousel.prev();
  };

  next = () => {
    this.carousel.next();
  };

  render() {
    const { children, className, width, prev, next } = this.props;

    return (
      <CarouselOuterWrapper className={`carousel-outer ${className}`}>
        {typeof document !== 'undefined' && (
          <>
            {/* To use Prev functionality, you would pass an arrow function (render prop) to a `prev` prop. (<- On the `Carousel` component you have imported in another file.)
            
            That arrow function will take a prev param and get passed to a click handler. Like so...

            (prev) => <button onClick={prev}>Prev</button>
          */}

            {prev && prev(this.prev)}

            <CarouselWrapper className={`${this.state.selector} carousel-inner ${className}`} width={width}>
              {children}
            </CarouselWrapper>

            {/* To use Next functionality, you would pass an arrow function (render prop) to a `next` prop. (<- On the `Carousel` component you have imported in another file.) 
            
            That arrow function will take a next param and get passed to a click handler. Like so...

            (next) => <button onClick={next}>Next</button>
          */}

            {next && next(this.next)}
          </>
        )}
      </CarouselOuterWrapper>
    );
  }
}

const CarouselOuterWrapper = styled.div`
  position: relative;
`;

const CarouselWrapper = styled.div`
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
`;

export default Carousel;
