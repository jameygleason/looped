import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RescaleCarousel from './rescale-carousel';

export default class RescaleCarouselReact extends Component {
  static propTypes = {
    className: PropTypes.string,
    config: PropTypes.shape({
      selector: PropTypes.string,
      transitionDuration: PropTypes.number,
      easing: PropTypes.string,
      perPage: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
      gap: PropTypes.number,
      startIndex: PropTypes.number,
      draggable: PropTypes.bool,
      multipleDrag: PropTypes.bool,
      threshold: PropTypes.number,
      loop: PropTypes.bool,
      animate: PropTypes.bool,
      intervalDuration: PropTypes.number,
      rtl: PropTypes.bool,
      onInit: PropTypes.func,
      onChange: PropTypes.func,
      destroy: PropTypes.func,
    }),
    children: PropTypes.node,
    prev: PropTypes.func,
    next: PropTypes.func,
  };

  static defaultProps = {
    className: null,
    prev: null,
    next: null,
  };

  constructor() {
    super();

    const selectorID = Math.random()
      .toString(36)
      .substring(6);

    this.selector = `carousel-${selectorID}`;
  }

  componentDidMount = () => {
    this.carousel =
      window &&
      document &&
      this.selector &&
      new RescaleCarousel({
        selector: `.${this.selector}`,
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
    const { children, className, prev, next } = this.props;

    return (
      <div className={`carousel-outer ${className}`}>
        {/* To use Prev functionality, you would pass an arrow function (render prop) to a `prev` prop. (<- On the `Carousel` component you have imported in another file.)
            
            That arrow function will take a prev param and get passed to a click handler. Like so...
            (prev) => <button onClick={prev}>Prev</button>
          */}

        {prev && prev(this.prev)}

        <div className={`${this.selector} carousel-inner ${className}`}>
          {children}
        </div>

        {/* To use Next functionality, you would pass an arrow function (render prop) to a `next` prop. (<- On the `Carousel` component you have imported in another file.) 
            
            That arrow function will take a next param and get passed to a click handler. Like so...
            (next) => <button onClick={next}>Next</button>
          */}

        {next && next(this.next)}
      </div>
    );
  }
}
