'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = _interopDefault(require('styled-components'));

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var StyledButton = styled.button.withConfig({
  displayName: "Buttonstyled__StyledButton",
  componentId: "h875ml-0"
})(["color:green;background-color:blue;font-size:48px;"]);
var IdButton = styled(StyledButton).withConfig({
  displayName: "Buttonstyled__IdButton",
  componentId: "h875ml-1"
})(["color:red;font-size:12px;"]);
var StyledList = styled.ul.withConfig({
  displayName: "Buttonstyled__StyledList",
  componentId: "h875ml-2"
})(["color:green;"]);

var Button =
/*#__PURE__*/
function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, _getPrototypeOf(Button).apply(this, arguments));
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var context = this.props.context;
      return React__default.createElement("div", null, context === "id" ? React__default.createElement(IdButton, null, "Id Button") : React__default.createElement(StyledButton, {
        context: context
      }, "Hallo"));
    }
  }]);

  return Button;
}(React.Component);

var Header = styled.h1.withConfig({
  displayName: "InputField__Header",
  componentId: "pnhvi5-0"
})(["color:orange;"]);

var InputField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InputField, _React$Component);

  function InputField() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, InputField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InputField)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      message: "Hello World!"
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "changeMessage", function (e) {
      _this.setState({
        message: e.target.value
      });
    });

    return _this;
  }

  _createClass(InputField, [{
    key: "render",
    value: function render() {
      var stateValue = this.state.message;
      return React__default.createElement("div", null, React__default.createElement(Header, null, this.state.message), React__default.createElement("input", {
        value: stateValue,
        onChange: this.changeMessage
      }));
    }
  }]);

  return InputField;
}(React__default.Component);

var components = [Button, InputField];

module.exports = components;
