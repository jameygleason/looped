'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

let _react = _interopRequireWildcard(require('react'));

let _propTypes = _interopRequireDefault(require('prop-types'));

let _styledComponents = _interopRequireDefault(require('styled-components'));

let _rescaleCarousel = _interopRequireDefault(require('./rescale-carousel'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; }  var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj;  }

function _templateObject2() {
  let data = _taggedTemplateLiteral(['\n  width: ', ';\n  height: ', ';\n']);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  let data = _taggedTemplateLiteral(['\n  position: relative;\n']);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
  );
}

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); }  return left instanceof right;  }

function _typeof(obj) {
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }
  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!_instanceof(instance, Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call;
  }
  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

let Carousel =
  /*#__PURE__ */
  (function(_Component) {
    _inherits(Carousel, _Component);

    function Carousel() {
      let _this;

      _classCallCheck(this, Carousel);

      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(Carousel).call(this)
      );

      _defineProperty(
        _assertThisInitialized(_this),
        'componentDidMount',
        function() {
          _this.carousel =
            document &&
            new _rescaleCarousel.default({
              selector: '.'.concat(_this.state.selector),
              ..._this.props.config,
            });
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        'componentWillUnmount',
        function() {
          _this.carousel.destroyInstance();
        }
      );

      _defineProperty(_assertThisInitialized(_this), 'prev', function() {
        _this.carousel.prev();
      });

      _defineProperty(_assertThisInitialized(_this), 'next', function() {
        _this.carousel.next();
      });

      var selectorID = Math.random()
        .toString(36)
        .substring(6);
      _this.state = {
        selector: 'carousel-'.concat(selectorID),
      };
      return _this;
    }

    _createClass(Carousel, [
      {
        key: 'render',
        value: function render() {
          let _this$props = this.props;
          var children = _this$props.children;
          var className = _this$props.className;
          var width = _this$props.width;
          var prev = _this$props.prev;
          var {next} = _this$props;
          return _react.default.createElement(
            CarouselOuterWrapper,
            {
              className: 'carousel-outer '.concat(className),
            },
            typeof document !== 'undefined' &&
              _react.default.createElement(
                _react.default.Fragment,
                null,
                prev && prev(this.prev),
                _react.default.createElement(
                  CarouselWrapper,
                  {
                    className: ''
                      .concat(this.state.selector, ' carousel-inner ')
                      .concat(className),
        width
                  },
                  children
                ),
                next && next(this.next)
              )
          );
        },
      },
    ]);

    return Carousel;
  })(_react.Component);

_defineProperty(Carousel, 'propTypes', {
  className: _propTypes.default.string,
});

_defineProperty(Carousel, 'defaultProps', {
  className: null,
});

var CarouselOuterWrapper = _styledComponents.default.div(_templateObject());

var CarouselWrapper = _styledComponents.default.div(
  _templateObject2(),
  function(_ref) {
    let {width} = _ref;
    return width || 'auto';
  },
  function(_ref2) {
    let {height} = _ref2;
    return height || 'auto';
  }
);

let _default = Carousel;
exports.default = _default;
