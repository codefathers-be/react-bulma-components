"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _item = _interopRequireDefault(require("./components/item"));

var _divider = _interopRequireDefault(require("./components/divider"));

var _button = _interopRequireDefault(require("../button"));

var _element = _interopRequireDefault(require("../element"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Dropdown = function Dropdown(_ref) {
  var className = _ref.className,
      children = _ref.children,
      value = _ref.value,
      color = _ref.color,
      align = _ref.align,
      right = _ref.right,
      up = _ref.up,
      hoverable = _ref.hoverable,
      label = _ref.label,
      onChange = _ref.onChange,
      closeOnSelect = _ref.closeOnSelect,
      icon = _ref.icon,
      domRef = _ref.domRef,
      disabled = _ref.disabled,
      menuId = _ref.menuId,
      props = _objectWithoutProperties(_ref, ["className", "children", "value", "color", "align", "right", "up", "hoverable", "label", "onChange", "closeOnSelect", "icon", "domRef", "disabled", "menuId"]);

  var ref = (0, _react.useRef)(domRef);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var close = function close(evt) {
    // IDK yet how to test using the ref in enzime
    // istanbul ignore if
    if (hoverable || evt && ref && ref.current && ref.current.contains(evt.target)) {
      return;
    }

    if (ref.current) {
      setIsOpen(false);
    }
  };

  var onSelect = function onSelect(selectedValue) {
    return function () {
      if (onChange) {
        onChange(selectedValue);
      }

      if (closeOnSelect) {
        close();
      }
    };
  };

  (0, _react.useEffect)(function () {
    window.addEventListener('click', close);
    return function () {
      window.removeEventListener('click', close);
    };
  }, []);
  var current = label;

  var childrenArray = _react["default"].Children.map(children, function (child, i) {
    if (child.type === _item["default"] && (i === 0 && !label || child.props.value === value)) {
      current = child.props.children;
    }

    return /*#__PURE__*/_react["default"].cloneElement(child, child.type === _item["default"] ? {
      active: child.props.value === value,
      onClick: onSelect(child.props.value)
    } : {});
  });

  return /*#__PURE__*/_react["default"].createElement(_element["default"], _extends({}, props, {
    domRef: ref,
    className: (0, _classnames["default"])('dropdown', className, {
      'is-active': isOpen,
      'is-up': up,
      'is-right': right || align === 'right',
      'is-hoverable': hoverable
    })
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdown-trigger",
    role: "presentation",
    onClick: function onClick() {
      if (disabled) {
        return;
      }

      setIsOpen(function (open) {
        return !open;
      });
    }
  }, /*#__PURE__*/_react["default"].createElement(_button["default"], {
    disabled: disabled,
    color: color,
    "aria-haspopup": true,
    "aria-controls": menuId
  }, /*#__PURE__*/_react["default"].createElement("span", null, current), icon)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdown-menu",
    id: menuId,
    role: "menu"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdown-content"
  }, childrenArray)));
};

Dropdown.Item = _item["default"];
Dropdown.Divider = _divider["default"];
Dropdown.defaultProps = {
  closeOnSelect: true,
  menuId: 'dropdown-menu'
};
var _default = Dropdown;
exports["default"] = _default;
//# sourceMappingURL=dropdown.js.map