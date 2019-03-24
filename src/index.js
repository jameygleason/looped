import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './rescale-carousel';
import App from './App';

// Will initialize with default settings
const caro = new Carousel({
  selector: '.carousel',
  perPage: 3,
});

ReactDOM.render(<App />, document.getElementById('root'));

export default [caro, App];
