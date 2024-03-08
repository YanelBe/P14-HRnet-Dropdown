"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Dropdown;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _fa = require("react-icons/fa");
require("./dropdown.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Composant de menu dropdown
 * @param {Object} props - Les propriétés passées au composant
 * @param {string[]} props.data - Les données à afficher dans le dropdown (requis)
 * @param {string} props.label - Le label
 * @param {string} props.placeholder - Le texte à afficher par défaut si rien n'est sélectionné
 * @param {function} props.onSelected - La fonction de rappel appelée lorsqu'un élément est sélectionné
 * @param {string} props.id - L'id unique du dropdown
 * @param {string} props.errorMessage - Le message d'erreur à afficher si besoin
 * @param {Object} props.containerStyle - Les styles CSS appliqués au conteneur du dropdown
 * @param {Object} props.toggleStyle - Les styles CSS appliqués au toggle de l'ouverture du dropdown
 * @param {Object} props.menuStyle - Les styles CSS appliqués dropdown
 * @param {Object} props.itemStyle - Les styles CSS appliqués aux éléments de la liste dropdown
 * @param {Object} props.highlightedStyle - Les styles CSS appliqués aux éléments en surbrillance
 * @returns {JSX.Element} Composant JSX retourné
 */
function Dropdown(_ref) {
  var data = _ref.data,
    label = _ref.label,
    placeholder = _ref.placeholder,
    onSelected = _ref.onSelected,
    id = _ref.id,
    errorMessage = _ref.errorMessage,
    containerStyle = _ref.containerStyle,
    toggleStyle = _ref.toggleStyle,
    menuStyle = _ref.menuStyle,
    itemStyle = _ref.itemStyle,
    highlightedStyle = _ref.highlightedStyle;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    selected = _useState4[0],
    setSelected = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    highlightedIndex = _useState6[0],
    setHighlightedIndex = _useState6[1];
  var _useState7 = (0, _react.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    searchString = _useState8[0],
    setSearchString = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isFocused = _useState10[0],
    setIsFocused = _useState10[1];
  var searchTimeoutRef = (0, _react.useRef)(null);
  var dropdownRef = (0, _react.useRef)(null);
  var toggleRef = (0, _react.useRef)(null);

  // Etat pour suivre si la dernière interaction vient du clavier ou de la souris
  var _useState11 = (0, _react.useState)("mouse"),
    _useState12 = _slicedToArray(_useState11, 2),
    lastInteraction = _useState12[0],
    setLastInteraction = _useState12[1];
  var toggleDropdown = function toggleDropdown() {
    return setIsOpen(function (prev) {
      return !prev;
    });
  };

  // On définit une fonction pour gérer lorsqu'un élément est sélectionné dans le dropdown
  var handleSelection = function handleSelection(item, event) {
    if (event) event.stopPropagation();
    setSelected(item);
    setIsOpen(false);
    onSelected === null || onSelected === void 0 || onSelected(item);
  };

  // Fonction pour réinitialiser la chaîne de recherche au clavier
  var resetSearchString = function resetSearchString() {
    return setSearchString("");
  };

  // Fonction pour mettre à jour la chaîne de recherche au clavier
  var updateSearchString = function updateSearchString(str) {
    setSearchString(function (prev) {
      return prev + str;
    });
    clearTimeout(searchTimeoutRef.current);
    searchTimeoutRef.current = setTimeout(function () {
      resetSearchString();
    }, 1000);
  };

  // On définit une fonction avec un switch pour gérer les événements liés à l'appui sur les touches du clavier
  var handleKeyDown = function handleKeyDown(event) {
    setLastInteraction("keyboard"); // Lorsqu'on appuie sur le clavier, on définit que la dernière interaction vient du clavier
    if (["Enter", "ArrowDown", "ArrowUp"].includes(event.key) && !isOpen) {
      setIsOpen(true);
      if (highlightedIndex === null) {
        setHighlightedIndex(0);
      }
      event.preventDefault();
    } else {
      switch (event.key) {
        case "Tab":
          // On ferme le dropdown lorsqu'on appuie sur tab pour parcourir le reste du formulaire
          setIsOpen(false);
          break;
        case "PageUp":
          // Sert à aller tout en haut de la liste dropdown
          if (isOpen) {
            setHighlightedIndex(0);
            event.preventDefault();
          }
          break;
        case "PageDown":
          // Sert à aller tout en bas de la liste dropdown
          if (isOpen) {
            setHighlightedIndex(data.length - 1);
            event.preventDefault();
          }
          break;
        case "Enter":
          // Permet d'ouvrir le dropdown et de le refermer après la sélection du choix qui est en surbrillance
          if (isOpen && highlightedIndex !== null) {
            handleSelection(data[highlightedIndex]);
            event.preventDefault();
          }
          break;
        case "Escape":
          // On ferme le dropdown lors de l'appui sur échap
          setIsOpen(false);
          break;
        case "ArrowDown": // Les flèches du haut et du bas permettent de parcourir la liste et de mettre un choix en surbrillance
        case "ArrowUp":
          event.preventDefault();
          if (isOpen) {
            var newIndex = event.key === "ArrowDown" ? (highlightedIndex + 1) % data.length : highlightedIndex > 0 ? highlightedIndex - 1 : data.length - 1;
            setHighlightedIndex(newIndex);
          }
          break;
        default:
          // On autorise la recherche au clavier
          if (/^[a-zA-Z ]$/.test(event.key)) {
            updateSearchString(event.key.toLowerCase());
            var _newIndex = data.findIndex(function (item) {
              return item.toLowerCase().startsWith(searchString + event.key.toLowerCase());
            });
            if (_newIndex !== -1) {
              setHighlightedIndex(_newIndex);
            }
            event.preventDefault();
          }
          break;
      }
    }
  };

  // Fonction pour ajuster la surbrillance en fonction du survol de la souris
  // Uniquement si la dernière interaction n'est pas au clavier
  var handleMouseEnter = function handleMouseEnter(index) {
    if (lastInteraction !== "keyboard") {
      setHighlightedIndex(index);
    }
  };

  // Fonction pour rétablir la surbrillance par la souris après utilisation du clavier  
  // On réinitialise lastInteraction lors du mouvement de la souris  
  var handleMouseMove = function handleMouseMove() {
    if (lastInteraction === "keyboard") {
      setLastInteraction("mouse");
    }
  };

  // On gère les évènements pour le blur et pour le focus
  var handleFocus = function handleFocus() {
    return setIsFocused(true);
  };
  var handleBlur = function handleBlur() {
    return setIsFocused(false);
  };

  // On ajoute un effet pour gérer le clic en dehors du dropdown afin de le fermer
  (0, _react.useEffect)(function () {
    var handleClickOutside = function handleClickOutside(event) {
      if (toggleRef.current && !toggleRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return function () {
      return document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // On ajoute un effet pour faire défiler le dropdown lorsqu'un élément est mis en surbrillance plus bas/plus haut dans la liste
  (0, _react.useEffect)(function () {
    if (isOpen && highlightedIndex !== null) {
      var _dropdownRef$current$;
      (_dropdownRef$current$ = dropdownRef.current.querySelectorAll(".dropdown-menu li")[highlightedIndex]) === null || _dropdownRef$current$ === void 0 || _dropdownRef$current$.scrollIntoView({
        block: "nearest"
      });
    }
  }, [highlightedIndex, isOpen]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-group",
    ref: dropdownRef,
    onMouseMove: handleMouseMove,
    style: containerStyle,
    onFocus: handleFocus,
    onBlur: handleBlur
  }, label && /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: id,
    className: "form-label"
  }, label), /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdown ".concat(isOpen ? "open" : "", " ").concat(isFocused ? "focused" : ""),
    id: id,
    onKeyDown: handleKeyDown,
    tabIndex: "0",
    ref: toggleRef,
    onClick: toggleDropdown
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdown-toggle",
    tabIndex: "-1",
    style: toggleStyle
  }, selected || placeholder, isOpen ? /*#__PURE__*/_react["default"].createElement(_fa.FaCaretUp, null) : /*#__PURE__*/_react["default"].createElement(_fa.FaCaretDown, null)), isOpen && /*#__PURE__*/_react["default"].createElement("ul", {
    className: "dropdown-menu",
    style: menuStyle
  }, data.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: item,
      onClick: function onClick(event) {
        return handleSelection(item, event);
      },
      className: highlightedIndex === index ? "highlighted" : "",
      onMouseEnter: function onMouseEnter() {
        return handleMouseEnter(index);
      },
      style: highlightedIndex === index ? _objectSpread(_objectSpread({}, itemStyle), highlightedStyle) : itemStyle
    }, item);
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "error ".concat(errorMessage ? "error-visible" : "")
  }, errorMessage || ""));
}
Dropdown.propTypes = {
  data: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired,
  label: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  onSelected: _propTypes["default"].func,
  id: _propTypes["default"].string,
  errorMessage: _propTypes["default"].string,
  containerStyle: _propTypes["default"].object,
  toggleStyle: _propTypes["default"].object,
  menuStyle: _propTypes["default"].object,
  itemStyle: _propTypes["default"].object,
  highlightedStyle: _propTypes["default"].object
};

// On définit un style par défaut aux props de style
Dropdown.defaultProps = {
  containerStyle: {},
  toggleStyle: {},
  menuStyle: {},
  itemStyle: {},
  highlightedStyle: {}
};