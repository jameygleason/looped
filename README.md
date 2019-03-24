# Rescale Carousel

A responsive carousel for JavaScript, with optional React component wrapper. See examples in the [github](https://github.com/jameygleason/rescale-carousel/tree/master/examples).

* The config settings are optional in the React Component. It automatically generates and applies a selector. It will fallback to the defaults if no config is passed.

[![rescale-carousel demo](docs/assets/demo.gif)](https://www.youtube.com/watch?v=vvPyo-rluss)

## Installation

`npm install rescale-carousel`

```html
<div class="carousel">
  <div>slide 1</div>
  <div>slide 2</div>
  <div>slide 3</div>
  <div>slide 4</div>
</div>
```

```js
import RescaleCarousel from 'rescale-carousel';

// Will initialize with default settings
new RescaleCarousel({
  selector: '.carousel'
});
```

### Default settings

```js
new RescaleCarousel({
  selector: '.carousel',
  transitionDuration: 420,
  easing: 'ease-out',
  perPage: 1,
  gap: 0,
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
});
```

### Responsive slide count

Pass an object to `perPage` and prefix window width with `w`. Since the default is 1, the properties are applied from narrowest window width to widest window width.

```js
new RescaleCarousel({
  ...
  perPage: {
    // Falls back to the default of 1 below 750px
    w750: 3,
    w1200: 5,
    w1400: 6,
  },
  },
  ...
});
```

## Available properties

Prop                 | Data Type  | Default   | Required  | Description
-------------------  | ---------- | --------- | -------   | -----------
`selector`           | String     | N/A       | `true`    | Enable selector
`transitionDuration` | Number     | `420`     | `false`   | The time (in ms) between when the slide chip starts it's transition, to when it finishes moving.
`easing`             | String     | `ease-out`| `false`   | The "ease" value on the transition property.
`perPage`           | Number or Object | `1`  | `false`   | The number of slides to be shown per page. See example for responsive carousel.
`gap`               | Number      | `0`    | `false`   | The space between slides.
`startIndex`        | Number      | `1`    | `false`   | The index of the starting index
`draggable`         | Boolean     | `true` | `false`   | Use dragging and touch swiping
`multipleDrag`      | Boolean     | `true` | `false`   | Allow dragging to move multiple slides.
`threshold`         | Number      | `20`   | `false`   | How far you have to swipe/drag (in px) to go to the next slide.
`loop`              | Boolean     | `true`   | `false` | Enable slides to loop.
`animate`           | Boolean     | `true`   | `false` | Auto-play slides on load.
`intervalDuration`  | number      | `4250`   | `false` | The amount of time between next slide call.
`rtl`               | Boolean     | `false`  | `false`   | Enables layout for languages written from right to left.
`onInit`             | Function   |          | `false`   | Runs immediately after initialization.
`onChange`           | Function   |          | `false`   | Runs after slide change.
`destroy`            | Function   |          | `false`   | Runs when carousel is unmounted.

## Browser support

```json
">0.2%",
"not dead",
"not ie <= 11",
"not op_mini all"
```

https://kangax.github.io/compat-table/es6/

https://caniuse.com/usage-table

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Credits

This carousel would not be possible without the fine work done on Siema.

* [pawelgrzybek/siema](https://github.com/pawelgrzybek/siema)

## NPM

https://www.npmjs.com/package/rescale-carousel

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.