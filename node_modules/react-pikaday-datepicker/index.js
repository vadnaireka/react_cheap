'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pikaday = void 0;
if ('undefined' !== typeof window) {
    Pikaday = require('pikaday');
}

var ReactPikadayComponent = function (_React$Component) {
    _inherits(ReactPikadayComponent, _React$Component);

    function ReactPikadayComponent() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ReactPikadayComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ReactPikadayComponent.__proto__ || Object.getPrototypeOf(ReactPikadayComponent)).call.apply(_ref, [this].concat(args))), _this), _this.registerRef = function (el) {
            _this.pikadayEl = el;
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ReactPikadayComponent, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _getValueLink2 = this._getValueLink(this.props),
                value = _getValueLink2.value;

            this._setupPikaday();
            this._setDateIfChanged(value);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var newDate = this._getValueLink(nextProps).value;
            var lastDate = this._getValueLink(this.props).value;

            this._setMinDateIfChanged(nextProps.minDate, this.props.minDate);
            this._setMaxDateIfChanged(nextProps.maxDate, this.props.maxDate);
            this._setDateIfChanged(newDate, lastDate);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            // update if container is set
            if (!prevProps.container && this.props.container) {
                var newDate = this._getValueLink(this.props).value;
                var lastDate = this._getValueLink(prevProps).value;

                this.pikaday.destroy();
                this._setupPikaday();
                this._setDateIfChanged(newDate, lastDate);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.pikaday.destroy();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                id = _props.id,
                type = _props.type,
                className = _props.className,
                name = _props.name,
                tabIndex = _props.tabIndex,
                disabled = _props.disabled,
                placeholder = _props.placeholder,
                readOnly = _props.readOnly,
                style = _props.style;


            return _react2.default.createElement('input', {
                id: id,
                type: type,
                ref: this.registerRef,
                name: name,
                className: className,
                style: style,
                placeholder: placeholder,
                disabled: disabled,
                readOnly: readOnly,
                tabIndex: tabIndex
            });
        }
    }, {
        key: '_getValueLink',
        value: function _getValueLink(props) {
            return props.valueLink || {
                value: props.value,
                requestChange: props.onChange
            };
        }
    }, {
        key: '_setupPikaday',
        value: function _setupPikaday() {
            var el = this.pikadayEl;

            var _getValueLink3 = this._getValueLink(this.props),
                requestChange = _getValueLink3.requestChange;

            var _props2 = this.props,
                value = _props2.value,
                onChange = _props2.onChange,
                valueLink = _props2.valueLink,
                pikadayOptions = _objectWithoutProperties(_props2, ['value', 'onChange', 'valueLink']); // eslint-disable-line no-unused-vars


            var options = _extends({}, pikadayOptions, {
                field: el,
                onSelect: requestChange
            });

            this.pikaday = new Pikaday(options);
        }
    }, {
        key: '_setDateIfChanged',
        value: function _setDateIfChanged(newDate, prevDate) {
            var _this2 = this;

            this._setDate(newDate, prevDate, function (newTime) {
                if (isNaN(newTime)) {
                    // workaround for pikaday not clearing value when date set to false
                    var el = _this2.refs.pikaday;
                    el.value = '';
                }
                _this2.pikaday.setDate(newDate, true); // not trigger onSelect
            });
        }
    }, {
        key: '_setMinDateIfChanged',
        value: function _setMinDateIfChanged(newDate, prevDate) {
            var _this3 = this;

            this._setDate(newDate, prevDate, function () {
                _this3.pikaday.setMinDate(newDate);
            });
        }
    }, {
        key: '_setMaxDateIfChanged',
        value: function _setMaxDateIfChanged(newDate, prevDate) {
            var _this4 = this;

            this._setDate(newDate, prevDate, function () {
                _this4.pikaday.setMaxDate(newDate);
            });
        }
    }, {
        key: '_setDate',
        value: function _setDate(newDate, prevDate, setter) {
            var newTime = newDate ? newDate.getTime() : null;
            var prevTime = prevDate ? prevDate.getTime() : null;

            if (newTime !== prevTime) {
                setter(newTime);
            }
        }
    }]);

    return ReactPikadayComponent;
}(_react2.default.Component);

ReactPikadayComponent.propTypes = {
    id: _propTypes2.default.string,
    type: _propTypes2.default.string,
    value: _propTypes2.default.instanceOf(Date),
    onChange: _propTypes2.default.func,
    disabled: _propTypes2.default.bool,
    placeholder: _propTypes2.default.string,
    readOnly: _propTypes2.default.bool,
    name: _propTypes2.default.string,
    style: _propTypes2.default.object,
    tabIndex: _propTypes2.default.number,
    valueLink: _propTypes2.default.shape({
        value: _propTypes2.default.instanceOf(Date),
        requestChange: _propTypes2.default.func.isRequired
    })

    // see Pikaday options at https://github.com/dbushell/Pikaday#configuration
    // except `onSelect` and `field`
};
ReactPikadayComponent.defaultProps = {
    type: 'text'
};
exports.default = ReactPikadayComponent;
module.exports = exports['default'];
