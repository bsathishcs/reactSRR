'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _routes = require("../routes");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * A counter button: tap the button to increase the count.
 */
var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter() {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this));

    _this.state = {
      count: 0
    };
    return _this;
  }

  _createClass(Counter, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', null, _react2.default.createElement('button', {
        onClick: function onClick() {
          _this2.setState({ count: _this2.state.count + 1 });
        }
      }, 'Count: ', this.state.count), _react2.default.createElement(_routes.Link, { route: 'LoginForm' }, 'Go to hello-world category'));
    }
  }]);

  return Counter;
}(_react2.default.Component);

exports.default = Counter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xccGFnZXNcXENvdW50ZXIuanMiXSwibmFtZXMiOlsiQ291bnRlciIsInN0YXRlIiwiY291bnQiLCJzZXRTdGF0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHTSxBO3FCQUNKOztxQkFBYzswQkFBQTs7NEdBRVo7O1VBQUEsQUFBSzthQUZPLEFBRVosQUFBYSxBQUNKO0FBREksQUFDWDtXQUVIOzs7Ozs2QkFFUTttQkFDUDs7YUFDRSxnQkFBQSxjQUFBLE9BQ0Esc0JBQUEsY0FBQTtpQkFDVyxtQkFBTSxBQUNiO2lCQUFBLEFBQUssU0FBUyxFQUFFLE9BQU8sT0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFsQyxBQUFjLEFBQTRCLEFBQzNDO0FBSEg7QUFDRSxTQUlRLGdCQUFBLEFBQUssTUFOZixBQUNBLEFBS3FCLEFBRzNCLHdCQUFBLHNCQUFBLFFBQU0sT0FBTixBQUFZLGVBVlIsQUFDRSxBQVNOLEFBS0c7Ozs7O0VBeEJtQixnQkFBTSxBOztrQkEwQmIsQSIsImZpbGUiOiJDb3VudGVyLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L0RldmxvcG1lbnQvcHJvamVjdC9yZWFjdC10ZXN0LWFwcCJ9