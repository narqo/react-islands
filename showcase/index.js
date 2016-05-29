webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _getPrototypeOf = __webpack_require__(3);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(5);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(9);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(7);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(6);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(40);
	
	var _Button = __webpack_require__(47);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Link = __webpack_require__(194);
	
	var _Link2 = _interopRequireDefault(_Link);
	
	var _CheckboxGroup = __webpack_require__(192);
	
	var _CheckboxGroup2 = _interopRequireDefault(_CheckboxGroup);
	
	var _Checkbox = __webpack_require__(191);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	var _TextInput = __webpack_require__(205);
	
	var _TextInput2 = _interopRequireDefault(_TextInput);
	
	var _TextArea = __webpack_require__(204);
	
	var _TextArea2 = _interopRequireDefault(_TextArea);
	
	var _Select = __webpack_require__(202);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _Menu = __webpack_require__(107);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _Group = __webpack_require__(74);
	
	var _Group2 = _interopRequireDefault(_Group);
	
	var _Item = __webpack_require__(75);
	
	var _Item2 = _interopRequireDefault(_Item);
	
	var _Modal = __webpack_require__(196);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _ProgressBar = __webpack_require__(199);
	
	var _ProgressBar2 = _interopRequireDefault(_ProgressBar);
	
	var _RadioGroup = __webpack_require__(201);
	
	var _RadioGroup2 = _interopRequireDefault(_RadioGroup);
	
	var _Radio = __webpack_require__(200);
	
	var _Radio2 = _interopRequireDefault(_Radio);
	
	var _Spinner = __webpack_require__(203);
	
	var _Spinner2 = _interopRequireDefault(_Spinner);
	
	var _Layout = __webpack_require__(145);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Showcase = function (_Component) {
	    (0, _inherits3.default)(Showcase, _Component);
	
	    function Showcase() {
	        (0, _classCallCheck3.default)(this, Showcase);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Showcase).call(this));
	
	        _this.state = {
	            checkboxGroupValue: ['n', 'p'],
	            radioGroupValue: 'n',
	            radioGroupButtonValue: 'any',
	            selectValue: [],
	            selectMoodValue: ['20'],
	            modalVisible: false,
	            progressActive: false
	        };
	        return _this;
	    }
	
	    (0, _createClass3.default)(Showcase, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            return _react2.default.createElement(
	                _Layout.Layout,
	                null,
	                _react2.default.createElement(
	                    _Layout.LayoutCell,
	                    { title: 'Button' },
	                    _react2.default.createElement(
	                        _Button2.default,
	                        { theme: 'islands', size: 's' },
	                        'size S'
	                    )
	                ),
	                _react2.default.createElement(
	                    _Layout.LayoutCell,
	                    { title: 'CheckboxGroup' },
	                    _react2.default.createElement(
	                        _CheckboxGroup2.default,
	                        {
	                            theme: 'islands',
	                            size: 'l',
	                            value: this.state.checkboxGroupValue,
	                            onChange: function onChange(value) {
	                                return _this2.setState({ checkboxGroupValue: value });
	                            }
	                        },
	                        _react2.default.createElement(
	                            _Checkbox2.default,
	                            { value: 's' },
	                            'Small'
	                        ),
	                        _react2.default.createElement('br', null),
	                        _react2.default.createElement(
	                            _Checkbox2.default,
	                            { value: 'n' },
	                            'Normal'
	                        ),
	                        _react2.default.createElement('br', null),
	                        _react2.default.createElement(
	                            _Checkbox2.default,
	                            { value: 'b', disabled: true },
	                            'Big'
	                        ),
	                        _react2.default.createElement('br', null),
	                        _react2.default.createElement(
	                            _Checkbox2.default,
	                            { value: 'p', disabled: true },
	                            'Pretty'
	                        ),
	                        _react2.default.createElement('br', null)
	                    )
	                ),
	                _react2.default.createElement(
	                    _Layout.LayoutCell,
	                    { title: 'TextInput' },
	                    _react2.default.createElement(_TextInput2.default, { theme: 'islands', size: 'l', placeholder: 'Type a question', hasClear: true })
	                ),
	                _react2.default.createElement(
	                    _Layout.LayoutCell,
	                    { title: 'Menu' },
	                    _react2.default.createElement(
	                        _Menu2.default,
	                        { className: 'menu-showcase', theme: 'islands', size: 'l', mode: 'radio', value: ['30'] },
	                        _react2.default.createElement(
	                            _Item2.default,
	                            { value: '10' },
	                            'Show on site'
	                        ),
	                        _react2.default.createElement(
	                            _Item2.default,
	                            { value: '20' },
	                            'Cached version'
	                        ),
	                        _react2.default.createElement(
	                            _Item2.default,
	                            { value: '30' },
	                            'Search in your pocket'
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    _Layout.LayoutCell,
	                    { title: 'Select (mode check)' },
	                    _react2.default.createElement(
	                        _Select2.default,
	                        {
	                            theme: 'islands',
	                            size: 'l',
	                            mode: 'check',
	                            placeholder: 'Language',
	                            value: this.state.selectValue,
	                            onChange: function onChange(value) {
	                                return _this2.setState({ selectValue: value });
	                            }
	                        },
	                        _react2.default.createElement(
	                            _Item2.default,
	                            { checkedText: 'ru', value: '10' },
	                            'Русский'
	                        ),
	                        _react2.default.createElement(
	                            _Item2.default,
	                            { checkedText: 'en', value: '20' },
	                            'English'
	                        ),
	                        _react2.default.createElement(
	                            _Item2.default,
	                            { checkedText: 'pt', value: '30' },
	                            'Português'
	                        ),
	                        _react2.default.createElement(
	                            _Item2.default,
	                            { checkedText: 'jp', value: '40' },
	                            '中國'
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    _Layout.LayoutCell,
	                    { title: 'Button (view action)' },
	                    _react2.default.createElement(
	                        _Button2.default,
	                        { theme: 'islands', size: 'm', view: 'action' },
	                        'Just DO it!'
	                    )
	                ),
	                _react2.default.createElement(
	                    _Layout.LayoutCell,
	                    { title: 'RadioGroup' },
	                    _react2.default.createElement(
	                        _RadioGroup2.default,
	                        {
	                            theme: 'islands',
	                            size: 'l',
	                            value: this.state.radioGroupValue,
	                            onChange: function onChange(value) {
	                                return _this2.setState({ radioGroupValue: value });
	                            }
	                        },
	                        _react2.default.createElement(
	                            _Radio2.default,
	                            { value: 's' },
	                            'Radio is off'
	                        ),
	                        _react2.default.createElement('br', null),
	                        _react2.default.createElement(
	                            _Radio2.default,
	                            { value: 'n' },
	                            'Radio is on'
	                        ),
	                        _react2.default.createElement('br', null),
	                        _react2.default.createElement(
	                            _Radio2.default,
	                            { value: 'b', disabled: true },
	                            'No, you can\'t'
	                        ),
	                        _react2.default.createElement('br', null),
	                        _react2.default.createElement(
	                            _Radio2.default,
	                            { value: 'p', disabled: true },
	                            'You have no choice'
	                        ),
	                        _react2.default.createElement('br', null)
	                    )
	                ),
	                _react2.default.createElement(
	                    _Layout.LayoutCell,
	                    { title: 'RadioGroup (type button)' },
	                    _react2.default.createElement(
	                        _RadioGroup2.default,
	                        {
	                            theme: 'islands',
	                            size: 'l',
	                            type: 'button',
	                            value: this.state.radioGroupButtonValue,
	                            onChange: function onChange(value) {
	                                return _this2.setState({ radioGroupButtonValue: value });
	                            }
	                        },
	                        _react2.default.createElement(
	                            _Radio2.default,
	                            { value: 'bw' },
	                            'Black & White'
	                        ),
	                        _react2.default.createElement(
	                            _Radio2.default,
	                            { value: 'colour' },
	                            'Coloured'
	                        ),
	                        _react2.default.createElement(
	                            _Radio2.default,
	                            { value: 'any' },
	                            'Any colour'
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    _Layout.LayoutCell,
	                    { title: 'Select (mode radio-check)' },
	                    _react2.default.createElement(
	                        _Select2.default,
	                        {
	                            theme: 'islands',
	                            size: 'l',
	                            mode: 'radio-check',
	                            placeholder: 'How are you today?',
	                            value: this.state.selectMoodValue,
	                            onChange: function onChange(value) {
	                                return _this2.setState({ selectMoodValue: value });
	                            }
	                        },
	                        _react2.default.createElement(
	                            _Item2.default,
	                            { value: '10' },
	                            'Bad'
	                        ),
	                        _react2.default.createElement(
	                            _Item2.default,
	                            { value: '20' },
	                            'Normal'
	                        ),
	                        _react2.default.createElement(
	                            _Item2.default,
	                            { value: '30' },
	                            'Great'
	                        ),
	                        _react2.default.createElement(
	                            _Group2.default,
	                            null,
	                            _react2.default.createElement(
	                                _Item2.default,
	                                { value: '40' },
	                                'Lawful Evil'
	                            ),
	                            _react2.default.createElement(
	                                _Item2.default,
	                                { value: '50' },
	                                'True Neutral'
	                            ),
	                            _react2.default.createElement(
	                                _Item2.default,
	                                { value: '60' },
	                                'Chaotic Good!'
	                            )
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    _Layout.LayoutCell,
	                    { title: 'TextArea' },
	                    _react2.default.createElement(_TextArea2.default, { theme: 'islands', size: 'l', placeholder: 'Write a review...' })
	                ),
	                _react2.default.createElement(
	                    _Layout.LayoutCell,
	                    { title: 'Modal' },
	                    _react2.default.createElement(
	                        _Link2.default,
	                        {
	                            theme: 'islands',
	                            size: 'l',
	                            onClick: function onClick() {
	                                return _this2.setState({ modalVisible: true });
	                            }
	                        },
	                        'Open your mind'
	                    ),
	                    _react2.default.createElement(
	                        _Modal2.default,
	                        {
	                            className: 'modal-showcase',
	                            theme: 'islands',
	                            visible: this.state.modalVisible,
	                            onRequestHide: function onRequestHide() {
	                                return _this2.setState({ modalVisible: false });
	                            }
	                        },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'text' },
	                            'Your mind was opened!'
	                        ),
	                        '(Click outside the box to close)'
	                    )
	                ),
	                _react2.default.createElement(
	                    _Layout.LayoutCell,
	                    { title: 'Spinner' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'spinner-container' },
	                        _react2.default.createElement(_Spinner2.default, { theme: 'islands', size: 'xs' }),
	                        _react2.default.createElement(_Spinner2.default, { theme: 'islands', size: 's' }),
	                        _react2.default.createElement(_Spinner2.default, { theme: 'islands', size: 'm' }),
	                        _react2.default.createElement(_Spinner2.default, { theme: 'islands', size: 'l' }),
	                        _react2.default.createElement(_Spinner2.default, { theme: 'islands', size: 'xl' })
	                    )
	                ),
	                _react2.default.createElement(
	                    _Layout.LayoutCell,
	                    { title: 'ProgressBar' },
	                    _react2.default.createElement(ProgressBarExample, null)
	                )
	            );
	        }
	    }]);
	    return Showcase;
	}(_react.Component);
	
	var ProgressBarExample = function (_Component2) {
	    (0, _inherits3.default)(ProgressBarExample, _Component2);
	
	    function ProgressBarExample() {
	        (0, _classCallCheck3.default)(this, ProgressBarExample);
	
	        var _this3 = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ProgressBarExample).call(this));
	
	        _this3.state = {
	            progressActive: false,
	            progressValue: 30
	        };
	        return _this3;
	    }
	
	    (0, _createClass3.default)(ProgressBarExample, [{
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(_, _ref) {
	            var progressActive = _ref.progressActive;
	
	            if (this.state.progressActive !== progressActive) {
	                this.startProgress();
	            }
	        }
	    }, {
	        key: 'startProgress',
	        value: function startProgress() {
	            var _this4 = this;
	
	            if (!this.state.progressActive) {
	                return;
	            }
	
	            var newValue = this.state.progressValue + 1;
	            if (newValue > 100) {
	                newValue = 0;
	            }
	            this.setState({ progressValue: newValue });
	
	            requestAnimationFrame(function () {
	                return _this4.startProgress();
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this5 = this;
	
	            var progressActive = this.state.progressActive;
	
	
	            return _react2.default.createElement(
	                'div',
	                { className: 'progressbar-container' },
	                _react2.default.createElement(
	                    _Button2.default,
	                    {
	                        className: 'switch-button',
	                        theme: 'islands',
	                        size: 's',
	                        checked: progressActive,
	                        onClick: function onClick() {
	                            return _this5.setState({ progressActive: !progressActive });
	                        }
	                    },
	                    'Start'
	                ),
	                _react2.default.createElement(_ProgressBar2.default, { theme: 'islands', value: this.state.progressValue })
	            );
	        }
	    }]);
	    return ProgressBarExample;
	}(_react.Component);
	
	(0, _reactDom.render)(_react2.default.createElement(Showcase), document.getElementById('appshell'));

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(157), __esModule: true };

/***/ },
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _setPrototypeOf = __webpack_require__(150);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(147);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _typeof2 = __webpack_require__(58);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }
	
	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof2 = __webpack_require__(58);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(148);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 10 */,
/* 11 */,
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(3);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(5);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(7);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(6);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Component = function (_React$Component) {
	    (0, _inherits3.default)(Component, _React$Component);
	
	    function Component() {
	        (0, _classCallCheck3.default)(this, Component);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Component).apply(this, arguments));
	    }
	
	    return Component;
	}(_react2.default.Component);
	
	Component.wrap = function (children, wrapper) {
	    var wrapped = [];
	
	    var chunk = null;
	    _react2.default.Children.forEach(children, function (child, i) {
	        if (Component.is(child, Component)) {
	            if (chunk) {
	                wrapped.push(wrapper(chunk));
	                chunk = null;
	            }
	            if (child.key) {
	                wrapped.push(child);
	            } else {
	                // FIXME(narqo@): had to add `key` in the runtime, after https://github.com/narqo/react-islands/pull/46
	                wrapped.push(_react2.default.cloneElement(child, { key: 'wrappedChild' + i }));
	            }
	        } else if (chunk) {
	            chunk.push(child);
	        } else {
	            chunk = [child];
	        }
	    });
	    if (chunk) {
	        wrapped.push(wrapper(chunk));
	    }
	
	    return wrapped;
	};
	
	Component.textValue = function (component) {
	    var text = '';
	    _react2.default.Children.forEach(component.props.children, function (child) {
	        if (typeof child === 'string') {
	            text += child;
	        }
	    });
	    return text;
	};
	
	Component.is = function (obj, ctor) {
	    return _react2.default.isValidElement(obj) && (obj.type === ctor || obj.type.prototype instanceof ctor);
	};
	
	exports.default = Component;
	module.exports = exports['default'];

/***/ },
/* 13 */,
/* 14 */,
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _assign = __webpack_require__(146);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};

/***/ },
/* 16 */,
/* 17 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(100)
	  , defined = __webpack_require__(59);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(31)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(21)
	  , core      = __webpack_require__(17)
	  , ctx       = __webpack_require__(97)
	  , hide      = __webpack_require__(32)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 28 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(37)
	  , IE8_DOM_DEFINE = __webpack_require__(99)
	  , toPrimitive    = __webpack_require__(71)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(26) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 30 */,
/* 31 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(29)
	  , createDesc = __webpack_require__(45);
	module.exports = __webpack_require__(26) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(68)('wks')
	  , uid        = __webpack_require__(46)
	  , Symbol     = __webpack_require__(21).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(3);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(5);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(9);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(7);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(6);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _warning = __webpack_require__(206);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _Component2 = __webpack_require__(12);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var didWarnFocusChangedFocused = false;
	
	var Control = function (_Component) {
	    (0, _inherits3.default)(Control, _Component);
	
	    function Control(props) {
	        (0, _classCallCheck3.default)(this, Control);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Control).call(this, props));
	
	        _this.state = {
	            focused: !props.disabled && props.focused
	        };
	
	        _this._mousePressed = false;
	
	        _this.onMouseDown = _this.onMouseDown.bind(_this);
	        _this.onMouseUp = _this.onMouseUp.bind(_this);
	        _this.onMouseEnter = _this.onMouseEnter.bind(_this);
	        _this.onMouseLeave = _this.onMouseLeave.bind(_this);
	        _this.onFocus = _this.onFocus.bind(_this);
	        _this.onBlur = _this.onBlur.bind(_this);
	        return _this;
	    }
	
	    (0, _createClass3.default)(Control, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (this.props.focused !== undefined && this.props.onFocusChange === undefined && !didWarnFocusChangedFocused) {
	                false ? (0, _warning2.default)(false, 'A Control has `focused` prop, but doesn\'t have `onFocusChange` listener. ' + 'This may lead to unwanted behaviour, when component kept being focused after ' + 're-rendering of the top component.') : void 0;
	                didWarnFocusChangedFocused = true;
	            }
	            if (this.state.focused) {
	                this.componentWillGainFocus();
	            }
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (nextProps.disabled === true) {
	                this.setState({ focused: false });
	            } else if (nextProps.focused !== this.state.focused && nextProps.focused === true) {
	                this.setState({ focused: nextProps.focused });
	            }
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            if (this.state.focused) {
	                this.componentWillGainFocus();
	            }
	        }
	    }, {
	        key: 'componentWillGainFocus',
	        value: function componentWillGainFocus() {
	            if (this.refs.control) {
	                this.refs.control.focus();
	            }
	        }
	    }, {
	        key: 'getControlHandlers',
	        value: function getControlHandlers() {
	            return {
	                onMouseDown: this.onMouseDown,
	                onMouseUp: this.onMouseUp,
	                onFocus: this.onFocus,
	                onBlur: this.onBlur,
	                onMouseEnter: this.onMouseEnter,
	                onMouseLeave: this.onMouseLeave
	            };
	        }
	    }, {
	        key: 'dispatchFocusChange',
	        value: function dispatchFocusChange(focused) {
	            if (typeof this.props.onFocusChange === 'function') {
	                this.props.onFocusChange(focused);
	            }
	        }
	    }, {
	        key: 'dispatchHoverChange',
	        value: function dispatchHoverChange(hovered) {
	            if (typeof this.props.onHoverChange === 'function') {
	                this.props.onHoverChange(hovered);
	            }
	        }
	    }, {
	        key: 'onMouseEnter',
	        value: function onMouseEnter() {
	            if (!this.props.disabled) {
	                this.setState({ hovered: true });
	                this.dispatchHoverChange(true);
	            }
	        }
	    }, {
	        key: 'onMouseLeave',
	        value: function onMouseLeave() {
	            this.setState({ hovered: false });
	            this.dispatchHoverChange(false);
	        }
	    }, {
	        key: 'onMouseDown',
	        value: function onMouseDown() {
	            this._mousePressed = true;
	        }
	    }, {
	        key: 'onMouseUp',
	        value: function onMouseUp() {
	            this._mousePressed = false;
	        }
	    }, {
	        key: 'onFocus',
	        value: function onFocus() {
	            if (!this.props.disabled) {
	                var focused = void 0;
	                // if focus wasn't set by mouse set focused state to "hard"
	                if (!this._mousePressed) {
	                    focused = 'hard';
	                } else {
	                    focused = true;
	                }
	                this.setState({ focused: focused });
	                this.dispatchFocusChange(focused);
	            }
	        }
	    }, {
	        key: 'onBlur',
	        value: function onBlur() {
	            this.setState({ focused: false });
	            this.dispatchFocusChange(false);
	        }
	    }]);
	    return Control;
	}(_Component3.default);
	
	exports.default = Control;
	module.exports = exports['default'];

/***/ },
/* 35 */,
/* 36 */,
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(38);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(104)
	  , enumBugKeys = __webpack_require__(60);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends2 = __webpack_require__(15);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(3);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(5);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(9);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(7);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _get2 = __webpack_require__(95);
	
	var _get3 = _interopRequireDefault(_get2);
	
	var _inherits2 = __webpack_require__(6);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Component = __webpack_require__(12);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Control2 = __webpack_require__(34);
	
	var _Control3 = _interopRequireDefault(_Control2);
	
	var _pressable = __webpack_require__(109);
	
	var _pressable2 = _interopRequireDefault(_pressable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Button = function (_Control) {
	    (0, _inherits3.default)(Button, _Control);
	
	    function Button() {
	        var _Object$getPrototypeO;
	
	        (0, _classCallCheck3.default)(this, Button);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(Button)).call.apply(_Object$getPrototypeO, [this].concat(args)));
	
	        _this._wrappedChildren = null;
	        return _this;
	    }
	
	    /** @override */
	
	
	    (0, _createClass3.default)(Button, [{
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps, nextState) {
	            if ((0, _get3.default)((0, _getPrototypeOf2.default)(Button.prototype), 'componentWillUpdate', this)) {
	                (0, _get3.default)((0, _getPrototypeOf2.default)(Button.prototype), 'componentWillUpdate', this).call(this, nextProps, nextState);
	            }
	
	            if (this.props.children !== nextProps.children) {
	                this._wrappedChildren = null;
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            if (!this._wrappedChildren) {
	                this._wrappedChildren = _Component2.default.wrap(this.props.children, function (child) {
	                    return(
	                        // NOTE: this `key` is to harmonize the one we have in `Component.wrap()`
	                        _react2.default.createElement(
	                            'span',
	                            { key: 'wrappedText', className: 'button__text' },
	                            child
	                        )
	                    );
	                });
	            }
	
	            if (this.props.type === 'link') {
	                var url = this.props.disabled ? null : this.props.url;
	
	                return _react2.default.createElement(
	                    'a',
	                    (0, _extends3.default)({ className: this.className() }, this.getControlHandlers(), { ref: 'control', role: 'link', href: url }),
	                    this._wrappedChildren
	                );
	            } else {
	                return _react2.default.createElement(
	                    'button',
	                    (0, _extends3.default)({
	                        className: this.className()
	                    }, this.getControlHandlers(), {
	                        ref: 'control',
	                        type: this.props.type,
	                        name: this.props.name,
	                        disabled: this.props.disabled
	                    }),
	                    this._wrappedChildren
	                );
	            }
	        }
	    }, {
	        key: 'className',
	        value: function className() {
	            var className = 'button';
	
	            var theme = this.props.theme || this.context.theme;
	            if (theme) {
	                className += ' button_theme_' + theme;
	            }
	            if (this.props.size) {
	                className += ' button_size_' + this.props.size;
	            }
	            if (this.props.type) {
	                className += ' button_type_' + this.props.type;
	            }
	            if (this.props.view) {
	                className += ' button_view_' + this.props.view;
	            }
	            if (this.props.disabled) {
	                className += ' button_disabled';
	            }
	            if (this.state.hovered) {
	                className += ' button_hovered';
	            }
	            if (this.state.pressed) {
	                className += ' button_pressed';
	            }
	            if (this.state.focused === 'hard') {
	                className += ' button_focused button_focused-hard';
	            } else if (this.state.focused) {
	                className += ' button_focused';
	            }
	            if (this.props.checked) {
	                className += ' button_checked';
	            }
	
	            if (this.props.className) {
	                className += ' ' + this.props.className;
	            }
	
	            return className;
	        }
	    }]);
	    return Button;
	}(_Control3.default);
	
	Button.propTypes = {
	    theme: _react2.default.PropTypes.string,
	    size: _react2.default.PropTypes.oneOf(['s', 'm', 'l', 'xl']),
	    type: _react2.default.PropTypes.string,
	    onClick: _react2.default.PropTypes.func
	};
	
	Button.contextTypes = {
	    theme: _react2.default.PropTypes.string
	};
	
	exports.default = (0, _pressable2.default)(Button);
	module.exports = exports['default'];

/***/ },
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(152);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(151);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 59 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 60 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(37)
	  , dPs         = __webpack_require__(172)
	  , enumBugKeys = __webpack_require__(60)
	  , IE_PROTO    = __webpack_require__(67)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(98)('iframe')
	    , i      = enumBugKeys.length
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(165).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(44)
	  , createDesc     = __webpack_require__(45)
	  , toIObject      = __webpack_require__(22)
	  , toPrimitive    = __webpack_require__(71)
	  , has            = __webpack_require__(28)
	  , IE8_DOM_DEFINE = __webpack_require__(99)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(26) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 65 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(29).f
	  , has = __webpack_require__(28)
	  , TAG = __webpack_require__(33)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(68)('keys')
	  , uid    = __webpack_require__(46);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(21)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 69 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(59);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(38);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(21)
	  , core           = __webpack_require__(17)
	  , LIBRARY        = __webpack_require__(62)
	  , wksExt         = __webpack_require__(73)
	  , defineProperty = __webpack_require__(29).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(33);

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(3);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(5);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(7);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(6);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Component2 = __webpack_require__(12);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Group = function (_Component) {
	    (0, _inherits3.default)(Group, _Component);
	
	    function Group() {
	        (0, _classCallCheck3.default)(this, Group);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Group).apply(this, arguments));
	    }
	
	    return Group;
	}(_Component3.default);
	
	exports.default = Group;
	module.exports = exports['default'];

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(3);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(5);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(7);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(6);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Component2 = __webpack_require__(12);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Item = function (_Component) {
	    (0, _inherits3.default)(Item, _Component);
	
	    function Item() {
	        (0, _classCallCheck3.default)(this, Item);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Item).apply(this, arguments));
	    }
	
	    return Item;
	}(_Component3.default);
	
	exports.default = Item;
	module.exports = exports['default'];

/***/ },
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _getPrototypeOf = __webpack_require__(3);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _getOwnPropertyDescriptor = __webpack_require__(149);
	
	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;
	  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);
	
	  if (desc === undefined) {
	    var parent = (0, _getPrototypeOf2.default)(object);
	
	    if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;
	
	    if (getter === undefined) {
	      return undefined;
	    }
	
	    return getter.call(receiver);
	  }
	};

/***/ },
/* 96 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(161);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(38)
	  , document = __webpack_require__(21).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(26) && !__webpack_require__(31)(function(){
	  return Object.defineProperty(__webpack_require__(98)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(96);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(62)
	  , $export        = __webpack_require__(27)
	  , redefine       = __webpack_require__(106)
	  , hide           = __webpack_require__(32)
	  , has            = __webpack_require__(28)
	  , Iterators      = __webpack_require__(61)
	  , $iterCreate    = __webpack_require__(167)
	  , setToStringTag = __webpack_require__(66)
	  , getPrototypeOf = __webpack_require__(103)
	  , ITERATOR       = __webpack_require__(33)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(104)
	  , hiddenKeys = __webpack_require__(60).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(28)
	  , toObject    = __webpack_require__(70)
	  , IE_PROTO    = __webpack_require__(67)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(28)
	  , toIObject    = __webpack_require__(22)
	  , arrayIndexOf = __webpack_require__(163)(false)
	  , IE_PROTO     = __webpack_require__(67)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(27)
	  , core    = __webpack_require__(17)
	  , fails   = __webpack_require__(31);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(32);

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends2 = __webpack_require__(15);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(3);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(5);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(9);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(7);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(6);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(40);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _Component2 = __webpack_require__(12);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _Item = __webpack_require__(75);
	
	var _Item2 = _interopRequireDefault(_Item);
	
	var _Group = __webpack_require__(74);
	
	var _Group2 = _interopRequireDefault(_Group);
	
	var _MenuItem = __webpack_require__(195);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function appendItemToCache(item, cache) {
	    if (_Component3.default.is(item, _Item2.default)) {
	        cache.push(item);
	    }
	}
	
	var Menu = function (_Component) {
	    (0, _inherits3.default)(Menu, _Component);
	
	    function Menu(props) {
	        (0, _classCallCheck3.default)(this, Menu);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Menu).call(this, props));
	
	        _this.state = (0, _extends3.default)({}, _this.state, {
	            value: _this._validateValue(_this.props.value),
	            hoveredIndex: null
	        });
	
	        _this._cachedChildren = null;
	        _this._hoveredItemIndex = null;
	        _this._shouldScrollToItem = false;
	
	        _this.onMouseUp = _this.onMouseUp.bind(_this);
	        _this.onMouseDown = _this.onMouseDown.bind(_this);
	        _this.onFocus = _this.onFocus.bind(_this);
	        _this.onBlur = _this.onBlur.bind(_this);
	        _this.onKeyDown = _this.onKeyDown.bind(_this);
	        _this.onItemClick = _this.onItemClick.bind(_this);
	        _this.onItemHover = _this.onItemHover.bind(_this);
	        return _this;
	    }
	
	    (0, _createClass3.default)(Menu, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            //  Если мы как-то поменяли value (внутри _validValue),
	            //  то нужно сообщить про это наверх.
	            if (this.props.value !== this.state.value) {
	                this.props.onChange(this.state.value, this.props);
	            }
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (this.props.focused) {
	                this.componentWillGainFocus();
	            }
	            this._scrollToMenuItem();
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (nextProps.children !== this.props.children) {
	                this._cachedChildren = null;
	            }
	
	            if (nextProps.value !== this.props.value) {
	                this.setState({ value: this._validateValue(nextProps.value) });
	            }
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps) {
	            if (prevProps.focused && !this.props.focused) {
	                this.componentWillLostFocus();
	            } else if (!prevProps.focused && this.props.focused) {
	                this.componentWillGainFocus();
	            }
	
	            if (this._shouldScrollToItem) {
	                this._shouldScrollToItem = false;
	                this._scrollToMenuItem();
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this._cachedChildren = null;
	        }
	    }, {
	        key: 'componentWillGainFocus',
	        value: function componentWillGainFocus() {
	            if (this.refs.control) {
	                this.refs.control.focus();
	            }
	        }
	    }, {
	        key: 'componentWillLostFocus',
	        value: function componentWillLostFocus() {
	            if (this.refs.control) {
	                this.refs.control.blur();
	            }
	        }
	    }, {
	        key: '_getChildren',
	        value: function _getChildren() {
	            var _this2 = this;
	
	            if (!this._cachedChildren) {
	                this._cachedChildren = [];
	
	                _react2.default.Children.forEach(this.props.children, function (child) {
	                    if (_Component3.default.is(child, _Group2.default)) {
	                        _react2.default.Children.forEach(child.props.children, function (item) {
	                            return appendItemToCache(item, _this2._cachedChildren);
	                        });
	                    } else {
	                        appendItemToCache(child, _this2._cachedChildren);
	                    }
	                });
	            }
	
	            return this._cachedChildren;
	        }
	    }, {
	        key: '_getFirstEnabledChild',
	        value: function _getFirstEnabledChild() {
	            if (this.props.disabled) return null;
	
	            var children = this._getChildren();
	
	            for (var i = 0; i < children.length; i++) {
	                var item = children[i];
	                if (!item.props.disabled) {
	                    return item;
	                }
	            }
	
	            return null;
	        }
	    }, {
	        key: '_getFirstEnabledChildIndex',
	        value: function _getFirstEnabledChildIndex() {
	            return this._getChildren().indexOf(this._getFirstEnabledChild());
	        }
	    }, {
	        key: '_validateValue',
	        value: function _validateValue(value) {
	            var newValue = void 0;
	
	            if (value == null) {
	                newValue = [];
	            } else if (Array.isArray(value)) {
	                newValue = value;
	            } else {
	                newValue = [value];
	            }
	
	            var filteredValue = this._getChildren().reduce(function (res, item) {
	                var itemValue = item.props.value;
	
	                if (newValue.indexOf(itemValue) !== -1) {
	                    res.push(itemValue);
	                }
	
	                return res;
	            }, []);
	
	            if (filteredValue.length !== newValue.length) {
	                newValue = filteredValue;
	            }
	
	            if (this.props.mode === 'radio') {
	                if (newValue.length === 0) {
	                    var firstChild = this._getFirstEnabledChild();
	
	                    newValue = firstChild === null ? [] : [firstChild.props.value];
	                } else {
	                    newValue = [newValue[0]];
	                }
	            } else if (this.props.mode === 'radio-check' && newValue.length > 1) {
	                newValue = [newValue[0]];
	            }
	
	            //  Раз уж начал упарываться, то остановиться уже сложно.
	            //  Теперь в newValue:
	            //
	            //    * Массив;
	            //    * В котором значения из переданного value (массива или просто значения);
	            //    * И которые при этом есть в values самого меню.
	            //    * При этом, если в value был массив, в котором были только валидные значения,
	            //      подходящие к данному mode, то вернется именно этот массив.
	            //      Что позволит сравнить исходное value с вот этим новым.
	            //
	            //  Но, увы, это сравнение все равно даст неверный результат,
	            //  если в value передать не массив или ничего не передать :(
	            //  Но так уже заморачиваться не хочется. Проще эксепшен кинуть на невалидный value.
	            //
	            return newValue;
	        }
	    }, {
	        key: '_scrollToMenuItem',
	        value: function _scrollToMenuItem() {
	            if (this.refs.control && this.refs.focusedMenuItem) {
	                var menuDOMNode = _reactDom2.default.findDOMNode(this.refs.control);
	                var focusedItemDOMNode = _reactDom2.default.findDOMNode(this.refs.focusedMenuItem);
	                var menuRect = menuDOMNode.getBoundingClientRect();
	                var focusedRect = focusedItemDOMNode.getBoundingClientRect();
	
	                if (focusedRect.bottom > menuRect.bottom || focusedRect.top < menuRect.top) {
	                    menuDOMNode.scrollTop = focusedItemDOMNode.offsetTop + focusedItemDOMNode.clientHeight - menuDOMNode.offsetTop - menuDOMNode.offsetHeight;
	                }
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var disabled = _props.disabled;
	            var maxHeight = _props.maxHeight;
	
	            var tabIndex = disabled ? -1 : this.props.tabIndex;
	            var menu = this._renderMenu();
	
	            var style = void 0;
	            if (maxHeight) {
	                style = {
	                    maxHeight: maxHeight
	                };
	            }
	
	            return _react2.default.createElement(
	                'div',
	                { ref: 'control', className: this.className(),
	                    style: style,
	                    tabIndex: tabIndex,
	                    onKeyDown: this.onKeyDown,
	                    onMouseDown: this.onMouseDown,
	                    onMouseUp: this.onMouseUp,
	                    onFocus: this.onFocus,
	                    onBlur: this.onBlur
	                },
	                menu
	            );
	        }
	    }, {
	        key: '_renderMenu',
	        value: function _renderMenu() {
	            var _this3 = this;
	
	            var index = 0;
	
	            return _react2.default.Children.map(this.props.children, function (child) {
	                if (_Component3.default.is(child, _Item2.default)) {
	                    return _this3._renderMenuItem(child.props, index++);
	                } else if (_Component3.default.is(child, _Group2.default)) {
	                    var groupedItems = _react2.default.Children.map(child.props.children, function (groupChild) {
	                        return _this3._renderMenuItem(groupChild.props, index++);
	                    });
	
	                    return _this3._renderMenuGroup(child.props, groupedItems);
	                } else {
	                    //  FIXME: Или тут бросать ошибку?
	                    return child;
	                }
	            });
	        }
	    }, {
	        key: '_renderMenuItem',
	        value: function _renderMenuItem(props, index) {
	            var _props2 = this.props;
	            var theme = _props2.theme;
	            var size = _props2.size;
	            var disabled = _props2.disabled;
	            var mode = _props2.mode;
	            var _state = this.state;
	            var value = _state.value;
	            var hoveredIndex = _state.hoveredIndex;
	
	            var checkable = Boolean(mode);
	            var hovered = index === hoveredIndex;
	            var key = 'menuitem' + (props.id || index);
	
	            return _react2.default.createElement(_MenuItem2.default, (0, _extends3.default)({
	                theme: theme,
	                size: size,
	                disabled: disabled,
	                hovered: hovered,
	                checked: checkable && value.indexOf(props.value) !== -1,
	                ref: hovered ? 'focusedMenuItem' : null,
	                key: key,
	                index: index
	            }, props, {
	                onClick: this.onItemClick,
	                onHover: this.onItemHover
	            }));
	        }
	    }, {
	        key: '_renderMenuGroup',
	        value: function _renderMenuGroup(props, children) {
	            var title = void 0;
	            if (props.title) {
	                title = _react2.default.createElement(
	                    'div',
	                    { className: 'menu__group-title' },
	                    props.title
	                );
	            }
	
	            return _react2.default.createElement(
	                'div',
	                { className: 'menu__group' },
	                title,
	                children
	            );
	        }
	    }, {
	        key: 'className',
	        value: function className() {
	            var className = 'menu';
	
	            var theme = this.props.theme || this.context.theme;
	            if (theme) {
	                className += ' menu_theme_' + theme;
	            }
	            if (this.props.size) {
	                className += ' menu_size_' + this.props.size;
	            }
	            if (this.props.mode) {
	                className += ' menu_mode_' + this.props.mode;
	            }
	            if (this.props.disabled) {
	                className += ' menu_disabled';
	            }
	            if (this.state.focused) {
	                className += ' menu_focused';
	            }
	
	            if (this.props.className) {
	                className += ' ' + this.props.className;
	            }
	
	            return className;
	        }
	    }, {
	        key: 'dispatchFocusChange',
	        value: function dispatchFocusChange(focused) {
	            this.props.onFocusChange(focused);
	        }
	    }, {
	        key: 'dispatchItemClick',
	        value: function dispatchItemClick(e, itemProps) {
	            var item = this._getChildren()[itemProps.index];
	            if (typeof item.props.onClick === 'function') {
	                item.props.onClick(e, item.props, this.props);
	            }
	            this.props.onItemClick(e, itemProps);
	        }
	    }, {
	        key: 'onItemHover',
	        value: function onItemHover(hovered, itemProps) {
	            this.setState({
	                hoveredIndex: hovered ? itemProps.index : null
	            });
	        }
	    }, {
	        key: 'onItemClick',
	        value: function onItemClick(e, itemProps) {
	            var index = itemProps.index;
	
	            this._hoveredItemIndex = index;
	            this.dispatchItemClick(e, itemProps);
	            this.onItemCheck(index);
	        }
	    }, {
	        key: 'onMouseDown',
	        value: function onMouseDown() {
	            this._mousePressed = true;
	        }
	    }, {
	        key: 'onMouseUp',
	        value: function onMouseUp() {
	            this._mousePressed = false;
	        }
	    }, {
	        key: 'onFocus',
	        value: function onFocus() {
	            if (this.props.disabled) {
	                return;
	            }
	
	            this.setState({ focused: true });
	
	            if (!this._mousePressed) {
	                var hoveredIndex = this._hoveredItemIndex;
	                if (hoveredIndex === null) {
	                    hoveredIndex = this._getFirstEnabledChildIndex();
	                }
	                if (hoveredIndex !== this.state.hoveredIndex) {
	                    this._hoveredItemIndex = hoveredIndex;
	                    this.setState({ hoveredIndex: hoveredIndex });
	                }
	            }
	
	            this.dispatchFocusChange(true);
	        }
	    }, {
	        key: 'onBlur',
	        value: function onBlur() {
	            this.setState({
	                focused: false,
	                hoveredIndex: null
	            });
	
	            this.dispatchFocusChange(false);
	        }
	    }, {
	        key: 'onKeyDown',
	        value: function onKeyDown(e) {
	            if (this.props.disabled || !this.state.focused) {
	                return;
	            }
	
	            if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
	                e.preventDefault();
	
	                var children = this._getChildren();
	                var len = children.length;
	                if (!len) {
	                    return;
	                }
	
	                var dir = e.key === 'ArrowDown' ? 1 : -1;
	                var nextIndex = this.state.hoveredIndex;
	                do {
	                    nextIndex = (nextIndex + len + dir) % len;
	                    if (nextIndex === this.state.hoveredIndex) {
	                        return;
	                    }
	                } while (children[nextIndex].props.disabled);
	
	                if (nextIndex !== null) {
	                    this._hoveredItemIndex = nextIndex;
	                    this._shouldScrollToItem = true;
	                    this.setState({ hoveredIndex: nextIndex });
	                }
	            } else if (e.key === ' ' || e.key === 'Enter') {
	                e.preventDefault();
	
	                if (this.state.hoveredIndex !== null) {
	                    this.onItemClick(e, { index: this.state.hoveredIndex });
	                }
	            }
	
	            if (this.props.onKeyDown) {
	                this.props.onKeyDown(e, this.props);
	            }
	        }
	    }, {
	        key: 'onItemCheck',
	        value: function onItemCheck(index) {
	            var mode = this.props.mode;
	
	            if (!mode) {
	                return;
	            }
	
	            var item = this._getChildren()[index];
	            var itemValue = item.props.value;
	            var menuValue = this.state.value;
	            var checked = menuValue.indexOf(itemValue) !== -1;
	
	            var newMenuValue = void 0;
	            if (mode === 'radio') {
	                if (checked) {
	                    return;
	                }
	
	                newMenuValue = [itemValue];
	            } else if (mode === 'radio-check') {
	                newMenuValue = checked ? [] : [itemValue];
	            } else {
	                newMenuValue = checked ? menuValue.filter(function (value) {
	                    return value !== itemValue;
	                }) : menuValue.concat(itemValue);
	            }
	
	            if (newMenuValue) {
	                this.setState({ value: newMenuValue });
	                this.props.onChange(newMenuValue, this.props);
	            }
	        }
	    }]);
	    return Menu;
	}(_Component3.default);
	
	Menu.contextTypes = {
	    theme: _react2.default.PropTypes.string
	};
	
	Menu.defaultProps = {
	    maxHeight: null,
	    tabIndex: 0,
	    onChange: function onChange() {},
	    onFocusChange: function onFocusChange() {},
	    onItemClick: function onItemClick() {}
	};
	
	exports.default = Menu;
	module.exports = exports['default'];

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(3);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(5);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(9);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(7);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(6);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Component2 = __webpack_require__(12);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _Portal = __webpack_require__(197);
	
	var _Portal2 = _interopRequireDefault(_Portal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ZINDEX_FACTOR = 1000;
	
	var visibleLayersZIndexes = {};
	var visibleLayersStack = [];
	
	var KEY_ESCAPE = 27;
	
	var REASON_CLICK_OUTSIDE = 'clickOutside';
	var REASON_ESC_KEY_PRESS = 'escapeKeyPress';
	
	var Overlay = function (_Component) {
	    (0, _inherits3.default)(Overlay, _Component);
	
	    function Overlay(props, context) {
	        (0, _classCallCheck3.default)(this, Overlay);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Overlay).call(this, props, context));
	
	        _this.zIndex = null;
	        _this.isClickOutsidePrevented = null;
	        _this.isVisible = _this.isVisible.bind(_this);
	        _this.preventClickOutside = _this.preventClickOutside.bind(_this);
	        _this.onLayerClick = _this.onLayerClick.bind(_this);
	        _this.onDocumentClick = _this.onDocumentClick.bind(_this);
	        _this.onDocumentKeyPress = _this.onDocumentKeyPress.bind(_this);
	        return _this;
	    }
	
	    (0, _createClass3.default)(Overlay, [{
	        key: 'getChildContext',
	        value: function getChildContext() {
	            return {
	                isParentLayerVisible: this.isVisible,
	                preventParentLayerClickOutside: this.preventClickOutside
	            };
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            if (this.props.visible) {
	                this.layerWillBecomeVisible();
	            }
	        }
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps) {
	            this.handleParentLayerHide();
	            // NOTE(narqo@): do this only when visible is going to be changed
	            if (this.props.visible !== nextProps.visible) {
	                if (nextProps.visible) {
	                    this.layerWillBecomeVisible();
	                } else {
	                    this.layerWillBecomeHidden();
	                }
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.requestHide(null, false);
	            this.layerWillBecomeHidden();
	        }
	    }, {
	        key: 'layerWillBecomeVisible',
	        value: function layerWillBecomeVisible() {
	            var _this2 = this;
	
	            visibleLayersStack.unshift(this);
	
	            this.captureZIndex();
	
	            document.addEventListener('keydown', this.onDocumentKeyPress);
	            // NOTE(narqo@): we have to use `nextTick` or nested layer will be closed immediately after being opened
	            process.nextTick(function () {
	                if (_this2.props.visible) {
	                    // FIXME(narqo@): `document.addEventListener(click)` doesn't work on iOS
	                    document.addEventListener('click', _this2.onDocumentClick);
	                }
	            });
	        }
	    }, {
	        key: 'layerWillBecomeHidden',
	        value: function layerWillBecomeHidden() {
	            visibleLayersStack.splice(visibleLayersStack.indexOf(this), 1);
	
	            this.isClickOutsidePrevented = null;
	
	            document.removeEventListener('keydown', this.onDocumentKeyPress);
	            document.removeEventListener('click', this.onDocumentClick);
	
	            this.releaseZIndex();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var children = _react2.default.cloneElement(_react2.default.Children.only(this.props.children), { onClick: this.onLayerClick });
	
	            return _react2.default.createElement(
	                _Portal2.default,
	                null,
	                children
	            );
	        }
	    }, {
	        key: 'isVisible',
	        value: function isVisible() {
	            return this.props.visible;
	        }
	    }, {
	        key: 'requestHide',
	        value: function requestHide(e, reason) {
	            if (this.props.visible) {
	                this.props.onRequestHide(e, reason);
	            }
	        }
	    }, {
	        key: 'handleClickOutside',
	        value: function handleClickOutside(e) {
	            this.requestHide(e, REASON_CLICK_OUTSIDE);
	        }
	    }, {
	        key: 'preventClickOutside',
	        value: function preventClickOutside() {
	            this.isClickOutsidePrevented = true;
	        }
	    }, {
	        key: 'handleParentLayerHide',
	        value: function handleParentLayerHide() {
	            var isParentLayerVisible = this.context.isParentLayerVisible;
	
	            if (this.props.visible && typeof isParentLayerVisible === 'function' && isParentLayerVisible() === false) {
	                this.requestHide(null, false);
	            }
	        }
	    }, {
	        key: 'onLayerClick',
	        value: function onLayerClick(e) {
	            if (this.props.visible) {
	                this.preventClickOutside();
	
	                var preventParentLayerClickOutside = this.context.preventParentLayerClickOutside;
	
	                if (typeof preventParentLayerClickOutside === 'function') {
	                    preventParentLayerClickOutside();
	                }
	            }
	            this.props.onClick(e);
	        }
	    }, {
	        key: 'onDocumentClick',
	        value: function onDocumentClick(e) {
	            if (this.isClickOutsidePrevented) {
	                this.isClickOutsidePrevented = null;
	            } else {
	                this.handleClickOutside(e);
	            }
	        }
	    }, {
	        key: 'onDocumentKeyPress',
	        value: function onDocumentKeyPress(e) {
	            if (e.keyCode === KEY_ESCAPE && visibleLayersStack[0] === this) {
	                // NOTE(narqo@): we call `preventDefault()` to prevent desktop Safari from exiting the full screen mode
	                e.preventDefault();
	                this.requestHide(e, REASON_ESC_KEY_PRESS);
	            }
	        }
	    }, {
	        key: 'captureZIndex',
	        value: function captureZIndex() {
	            var level = this.props.zIndexGroupLevel;
	
	            var zIndexes = visibleLayersZIndexes[level];
	            if (!zIndexes) {
	                zIndexes = [(level + 1) * ZINDEX_FACTOR];
	                visibleLayersZIndexes[level] = zIndexes;
	            }
	
	            var prevZIndex = this.zIndex;
	            this.zIndex = zIndexes[zIndexes.push(zIndexes[zIndexes.length - 1] + 1) - 1];
	            if (this.zIndex !== prevZIndex) {
	                this.props.onOrderChange(this.zIndex);
	            }
	        }
	    }, {
	        key: 'releaseZIndex',
	        value: function releaseZIndex() {
	            var zIndexes = visibleLayersZIndexes[this.props.zIndexGroupLevel];
	            zIndexes.splice(zIndexes.indexOf(this.zIndex), 1);
	        }
	    }]);
	    return Overlay;
	}(_Component3.default);
	
	Overlay.childContextTypes = Overlay.contextTypes = {
	    isParentLayerVisible: _react2.default.PropTypes.func,
	    preventParentLayerClickOutside: _react2.default.PropTypes.func
	};
	
	Overlay.propsTypes = {
	    visible: _react2.default.PropTypes.bool.isRequired,
	    onClick: _react2.default.PropTypes.func,
	    onRequestHide: _react2.default.PropTypes.func,
	    onOrderChange: _react2.default.PropTypes.func
	};
	
	Overlay.defaultProps = {
	    visible: false,
	    zIndexGroupLevel: 0,
	    onClick: function onClick() {},
	    onRequestHide: function onRequestHide() {},
	    onOrderChange: function onOrderChange() {}
	};
	
	exports.default = Overlay;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(144)))

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends2 = __webpack_require__(15);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(3);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(5);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(9);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(7);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _get2 = __webpack_require__(95);
	
	var _get3 = _interopRequireDefault(_get2);
	
	var _inherits2 = __webpack_require__(6);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var KEY_SPACE = ' ';
	var KEY_ENTER = 'Enter';
	
	var pressable = function pressable(BaseComponent) {
	    return function (_BaseComponent) {
	        (0, _inherits3.default)(_class, _BaseComponent);
	
	        function _class() {
	            var _Object$getPrototypeO;
	
	            (0, _classCallCheck3.default)(this, _class);
	
	            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                args[_key] = arguments[_key];
	            }
	
	            var _this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(_class)).call.apply(_Object$getPrototypeO, [this].concat(args)));
	
	            _this.state = (0, _extends3.default)({}, _this.state, {
	                pressed: false
	            });
	
	            _this.shouldPrevenDefaultClick = false;
	
	            _this.onMouseUp = _this.onMouseUp.bind(_this);
	            _this.onMouseDown = _this.onMouseDown.bind(_this);
	            _this.onKeyUp = _this.onKeyUp.bind(_this);
	            _this.onKeyDown = _this.onKeyDown.bind(_this);
	            _this.onClick = _this.onClick.bind(_this);
	            return _this;
	        }
	
	        /** @override */
	
	
	        (0, _createClass3.default)(_class, [{
	            key: 'componentWillReceiveProps',
	            value: function componentWillReceiveProps(props) {
	                if ((0, _get3.default)((0, _getPrototypeOf2.default)(_class.prototype), 'componentWillReceiveProps', this)) {
	                    (0, _get3.default)((0, _getPrototypeOf2.default)(_class.prototype), 'componentWillReceiveProps', this).call(this, props);
	                }
	                if (props.disabled === true) {
	                    this.setState({ pressed: false });
	                }
	            }
	        }, {
	            key: 'getControlHandlers',
	            value: function getControlHandlers() {
	                return (0, _extends3.default)({}, (0, _get3.default)((0, _getPrototypeOf2.default)(_class.prototype), 'getControlHandlers', this).call(this), {
	                    onClick: this.onClick,
	                    onMouseDown: this.onMouseDown,
	                    onMouseUp: this.onMouseUp,
	                    onKeyUp: this.onKeyUp,
	                    onKeyDown: this.onKeyDown,
	                    onKeyPress: this.props.onKeyPress
	                });
	            }
	        }, {
	            key: 'dispatchClick',
	            value: function dispatchClick(e) {
	                if (this.props.onClick) {
	                    this.shouldPrevenDefaultClick = false;
	
	                    var eventType = e.type;
	
	                    e.type = 'click';
	                    this.props.onClick(e, this.props);
	                    e.type = eventType;
	
	                    if (e.isDefaultPrevented()) {
	                        this.shouldPrevenDefaultClick = true;
	                    }
	                }
	            }
	
	            /** @override */
	
	        }, {
	            key: 'onMouseLeave',
	            value: function onMouseLeave() {
	                if ((0, _get3.default)((0, _getPrototypeOf2.default)(_class.prototype), 'onMouseLeave', this)) {
	                    (0, _get3.default)((0, _getPrototypeOf2.default)(_class.prototype), 'onMouseLeave', this).call(this);
	                }
	                this.setState({ pressed: false });
	            }
	
	            /** @override */
	
	        }, {
	            key: 'onMouseDown',
	            value: function onMouseDown(e) {
	                if ((0, _get3.default)((0, _getPrototypeOf2.default)(_class.prototype), 'onMouseDown', this)) {
	                    (0, _get3.default)((0, _getPrototypeOf2.default)(_class.prototype), 'onMouseDown', this).call(this, e);
	                }
	                if (!this.props.disabled && e.button === 0) {
	                    this.setState({ pressed: true });
	                }
	            }
	
	            /** @override */
	
	        }, {
	            key: 'onMouseUp',
	            value: function onMouseUp(e) {
	                if ((0, _get3.default)((0, _getPrototypeOf2.default)(_class.prototype), 'onMouseUp', this)) {
	                    (0, _get3.default)((0, _getPrototypeOf2.default)(_class.prototype), 'onMouseUp', this).call(this, e);
	                }
	                if (this.state.pressed) {
	                    this.setState({ pressed: false });
	                    this.dispatchClick(e);
	                }
	            }
	
	            /** @override */
	
	        }, {
	            key: 'onFocus',
	            value: function onFocus() {
	                if (!this.state.pressed && (0, _get3.default)((0, _getPrototypeOf2.default)(_class.prototype), 'onFocus', this)) {
	                    (0, _get3.default)((0, _getPrototypeOf2.default)(_class.prototype), 'onFocus', this).call(this);
	                }
	            }
	
	            /** @override */
	
	        }, {
	            key: 'onKeyDown',
	            value: function onKeyDown(e) {
	                if (this.props.disabled || !this.state.focused) {
	                    return;
	                }
	                if (e.key === KEY_SPACE || e.key === KEY_ENTER) {
	                    this.setState({ pressed: true });
	                }
	                if (this.props.onKeyDown) {
	                    this.props.onKeyDown(e, this.props);
	                }
	            }
	
	            /** @override */
	
	        }, {
	            key: 'onKeyUp',
	            value: function onKeyUp(e) {
	                if (!this.state.focused) {
	                    return;
	                }
	                if (this.state.pressed) {
	                    this.setState({ pressed: false });
	                    this.dispatchClick(e);
	                }
	                if (this.props.onKeyUp) {
	                    this.props.onKeyUp(e, this.props);
	                }
	            }
	
	            /** @override */
	
	        }, {
	            key: 'onClick',
	            value: function onClick(e) {
	                if (this.shouldPrevenDefaultClick) {
	                    e.preventDefault();
	                }
	                if ((0, _get3.default)((0, _getPrototypeOf2.default)(_class.prototype), 'onClick', this)) {
	                    (0, _get3.default)((0, _getPrototypeOf2.default)(_class.prototype), 'onClick', this).call(this, e);
	                }
	            }
	        }]);
	        return _class;
	    }(BaseComponent);
	};
	
	exports.default = pressable;
	module.exports = exports['default'];

/***/ },
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	(function () {
	  try {
	    cachedSetTimeout = setTimeout;
	  } catch (e) {
	    cachedSetTimeout = function () {
	      throw new Error('setTimeout is not defined');
	    }
	  }
	  try {
	    cachedClearTimeout = clearTimeout;
	  } catch (e) {
	    cachedClearTimeout = function () {
	      throw new Error('clearTimeout is not defined');
	    }
	  }
	} ())
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = cachedSetTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    cachedClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        cachedSetTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.LayoutCell = exports.Layout = undefined;
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Layout(_ref) {
	    var children = _ref.children;
	
	    return _react2.default.createElement(
	        "div",
	        { className: "layout" },
	        children
	    );
	}
	
	function LayoutCell(_ref2) {
	    var title = _ref2.title;
	    var children = _ref2.children;
	
	    return _react2.default.createElement(
	        "div",
	        { className: "layout__cell" },
	        _react2.default.createElement(
	            "header",
	            { className: "docs" },
	            title
	        ),
	        children
	    );
	}
	
	exports.Layout = Layout;
	exports.LayoutCell = LayoutCell;

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(153), __esModule: true };

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(154), __esModule: true };

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(155), __esModule: true };

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(156), __esModule: true };

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(158), __esModule: true };

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(159), __esModule: true };

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(160), __esModule: true };

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(179);
	module.exports = __webpack_require__(17).Object.assign;

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(180);
	var $Object = __webpack_require__(17).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(181);
	var $Object = __webpack_require__(17).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(182);
	var $Object = __webpack_require__(17).Object;
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $Object.getOwnPropertyDescriptor(it, key);
	};

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(183);
	module.exports = __webpack_require__(17).Object.getPrototypeOf;

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(184);
	module.exports = __webpack_require__(17).Object.setPrototypeOf;

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(187);
	__webpack_require__(185);
	__webpack_require__(188);
	__webpack_require__(189);
	module.exports = __webpack_require__(17).Symbol;

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(186);
	__webpack_require__(190);
	module.exports = __webpack_require__(73).f('iterator');

/***/ },
/* 161 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 162 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(22)
	  , toLength  = __webpack_require__(177)
	  , toIndex   = __webpack_require__(176);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(39)
	  , gOPS    = __webpack_require__(65)
	  , pIE     = __webpack_require__(44);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(21).document && document.documentElement;

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(96);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(63)
	  , descriptor     = __webpack_require__(45)
	  , setToStringTag = __webpack_require__(66)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(32)(IteratorPrototype, __webpack_require__(33)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 168 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(39)
	  , toIObject = __webpack_require__(22);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(46)('meta')
	  , isObject = __webpack_require__(38)
	  , has      = __webpack_require__(28)
	  , setDesc  = __webpack_require__(29).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(31)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(39)
	  , gOPS     = __webpack_require__(65)
	  , pIE      = __webpack_require__(44)
	  , toObject = __webpack_require__(70)
	  , IObject  = __webpack_require__(100)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(31)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(29)
	  , anObject = __webpack_require__(37)
	  , getKeys  = __webpack_require__(39);
	
	module.exports = __webpack_require__(26) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(22)
	  , gOPN      = __webpack_require__(102).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(38)
	  , anObject = __webpack_require__(37);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(97)(Function.call, __webpack_require__(64).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(69)
	  , defined   = __webpack_require__(59);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(69)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(69)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(162)
	  , step             = __webpack_require__(168)
	  , Iterators        = __webpack_require__(61)
	  , toIObject        = __webpack_require__(22);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(101)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(27);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(171)});

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(27)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(63)});

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(27);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(26), 'Object', {defineProperty: __webpack_require__(29).f});

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(22)
	  , $getOwnPropertyDescriptor = __webpack_require__(64).f;
	
	__webpack_require__(105)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(70)
	  , $getPrototypeOf = __webpack_require__(103);
	
	__webpack_require__(105)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(27);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(174).set});

/***/ },
/* 185 */
/***/ function(module, exports) {



/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(175)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(101)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(21)
	  , has            = __webpack_require__(28)
	  , DESCRIPTORS    = __webpack_require__(26)
	  , $export        = __webpack_require__(27)
	  , redefine       = __webpack_require__(106)
	  , META           = __webpack_require__(170).KEY
	  , $fails         = __webpack_require__(31)
	  , shared         = __webpack_require__(68)
	  , setToStringTag = __webpack_require__(66)
	  , uid            = __webpack_require__(46)
	  , wks            = __webpack_require__(33)
	  , wksExt         = __webpack_require__(73)
	  , wksDefine      = __webpack_require__(72)
	  , keyOf          = __webpack_require__(169)
	  , enumKeys       = __webpack_require__(164)
	  , isArray        = __webpack_require__(166)
	  , anObject       = __webpack_require__(37)
	  , toIObject      = __webpack_require__(22)
	  , toPrimitive    = __webpack_require__(71)
	  , createDesc     = __webpack_require__(45)
	  , _create        = __webpack_require__(63)
	  , gOPNExt        = __webpack_require__(173)
	  , $GOPD          = __webpack_require__(64)
	  , $DP            = __webpack_require__(29)
	  , $keys          = __webpack_require__(39)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(102).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(44).f  = $propertyIsEnumerable;
	  __webpack_require__(65).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(62)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(32)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(72)('asyncIterator');

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(72)('observable');

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(178);
	var global        = __webpack_require__(21)
	  , hide          = __webpack_require__(32)
	  , Iterators     = __webpack_require__(61)
	  , TO_STRING_TAG = __webpack_require__(33)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends2 = __webpack_require__(15);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(3);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(5);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(9);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(7);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(6);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Control2 = __webpack_require__(34);
	
	var _Control3 = _interopRequireDefault(_Control2);
	
	var _Button = __webpack_require__(47);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Checkbox = function (_Control) {
	    (0, _inherits3.default)(Checkbox, _Control);
	
	    function Checkbox(props) {
	        (0, _classCallCheck3.default)(this, Checkbox);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Checkbox).call(this, props));
	
	        _this.onControlChange = _this.onControlChange.bind(_this);
	        _this.onButtonClick = _this.onButtonClick.bind(_this);
	        _this.onButtonFocusChange = _this.onButtonFocusChange.bind(_this);
	        _this.onButtonHoverChange = _this.onButtonHoverChange.bind(_this);
	        return _this;
	    }
	
	    (0, _createClass3.default)(Checkbox, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var name = _props.name;
	            var theme = _props.theme;
	            var size = _props.size;
	            var type = _props.type;
	            var checked = _props.checked;
	            var disabled = _props.disabled;
	            var value = _props.value;
	            var focused = this.state.focused;
	
	
	            if (type === 'button') {
	                return _react2.default.createElement(
	                    'label',
	                    { className: this.className() },
	                    checked && _react2.default.createElement('input', { type: 'hidden', name: name, value: value, disabled: disabled }),
	                    _react2.default.createElement(
	                        _Button2.default,
	                        { theme: theme, size: size, type: type,
	                            disabled: disabled,
	                            checked: checked,
	                            focused: focused,
	                            onFocusChange: this.onButtonFocusChange,
	                            onHoverChange: this.onButtonHoverChange,
	                            onClick: this.onButtonClick
	                        },
	                        this.props.children
	                    )
	                );
	            } else {
	                return _react2.default.createElement(
	                    'label',
	                    (0, _extends3.default)({ className: this.className() }, this.getControlHandlers()),
	                    _react2.default.createElement(
	                        'span',
	                        { className: 'checkbox__box' },
	                        _react2.default.createElement('input', { ref: 'control', className: 'checkbox__control', type: 'checkbox', autoComplete: 'off',
	                            name: name,
	                            disabled: disabled,
	                            value: value,
	                            checked: checked,
	                            onChange: this.onControlChange
	                        })
	                    ),
	                    _react2.default.createElement(
	                        'span',
	                        { className: 'checkbox__text', role: 'presentation' },
	                        this.props.children
	                    )
	                );
	            }
	        }
	    }, {
	        key: 'className',
	        value: function className() {
	            var className = 'checkbox';
	
	            var theme = this.props.theme || this.context.theme;
	            if (theme) {
	                className += ' checkbox_theme_' + theme;
	            }
	            if (this.props.size) {
	                className += ' checkbox_size_' + this.props.size;
	            }
	            if (this.props.type) {
	                className += ' checkbox_type_' + this.props.type;
	            }
	            if (this.props.disabled) {
	                className += ' checkbox_disabled';
	            }
	            if (this.props.checked) {
	                className += ' checkbox_checked';
	            }
	            if (this.state.hovered) {
	                className += ' checkbox_hovered';
	            }
	            if (this.state.focused) {
	                className += ' checkbox_focused';
	            }
	
	            if (this.props.className) {
	                className += ' ' + this.props.className;
	            }
	
	            return className;
	        }
	    }, {
	        key: 'onControlChange',
	        value: function onControlChange() {
	            if (this.props.disabled) {
	                return;
	            }
	            var checked = !this.props.checked;
	            this.props.onCheck(checked, this.props);
	        }
	    }, {
	        key: 'onButtonFocusChange',
	        value: function onButtonFocusChange(focused) {
	            this.setState({ focused: focused });
	        }
	    }, {
	        key: 'onButtonHoverChange',
	        value: function onButtonHoverChange(hovered) {
	            this.setState({ hovered: hovered });
	        }
	    }, {
	        key: 'onButtonClick',
	        value: function onButtonClick(e) {
	            if (this.props.onClick) {
	                this.props.onClick(e, this.props);
	            }
	            if (!e.isDefaultPrevented()) {
	                this.onControlChange();
	            }
	        }
	    }]);
	    return Checkbox;
	}(_Control3.default);
	
	Checkbox.contextTypes = {
	    theme: _react2.default.PropTypes.string
	};
	
	Checkbox.propTypes = {
	    theme: _react2.default.PropTypes.string,
	    size: _react2.default.PropTypes.oneOf(['s', 'm', 'l', 'xl']),
	    type: _react2.default.PropTypes.string,
	    disabled: _react2.default.PropTypes.bool,
	    checked: _react2.default.PropTypes.bool,
	    value: _react2.default.PropTypes.any,
	    onClick: _react2.default.PropTypes.func,
	    onCheck: _react2.default.PropTypes.func
	};
	
	Checkbox.defaultProps = {
	    onCheck: function onCheck() {}
	};
	
	exports.default = Checkbox;
	module.exports = exports['default'];

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends2 = __webpack_require__(15);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(3);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(5);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(9);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(7);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(6);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Component2 = __webpack_require__(12);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CheckboxGroup = function (_Component) {
	    (0, _inherits3.default)(CheckboxGroup, _Component);
	
	    function CheckboxGroup(props) {
	        (0, _classCallCheck3.default)(this, CheckboxGroup);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(CheckboxGroup).call(this, props));
	
	        _this.onChildCheck = _this.onChildCheck.bind(_this);
	        return _this;
	    }
	
	    (0, _createClass3.default)(CheckboxGroup, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var _props = this.props;
	            var theme = _props.theme;
	            var size = _props.size;
	            var type = _props.type;
	            var name = _props.name;
	            var disabled = _props.disabled;
	            var value = _props.value;
	
	
	            var children = _react2.default.Children.map(this.props.children, function (child) {
	                var checked = value.indexOf(child.props.value) !== -1;
	                return _react2.default.cloneElement(child, (0, _extends3.default)({
	                    theme: theme,
	                    size: size,
	                    type: type,
	                    name: name,
	                    disabled: disabled
	                }, child.props, {
	                    checked: checked,
	                    onCheck: _this2.onChildCheck
	                }));
	            });
	
	            return _react2.default.createElement(
	                'span',
	                { className: this.className() },
	                children
	            );
	        }
	    }, {
	        key: 'className',
	        value: function className() {
	            var className = 'checkbox-group control-group';
	
	            var theme = this.props.theme || this.context.theme;
	            if (theme) {
	                className += ' checkbox-group_theme_' + theme;
	            }
	            if (this.props.size) {
	                className += ' checkbox-group_size_' + this.props.size;
	            }
	            if (this.props.type) {
	                className += ' checkbox-group_type_' + this.props.type;
	            }
	
	            if (this.props.className) {
	                className += ' ' + this.props.className;
	            }
	
	            return className;
	        }
	    }, {
	        key: 'onChildCheck',
	        value: function onChildCheck(checked, childProps) {
	            var value = this.props.value;
	
	            var childValue = childProps.value;
	            if (checked && value.indexOf(childValue) === -1) {
	                //  FIXME: Не нужно ли тут возвращать массив в том же порядке,
	                //  как эти значение в RadioGroup расположены?
	                //
	                var newValue = value.concat(childValue);
	                this.props.onChange(newValue, this.props);
	            } else if (!checked) {
	                var _newValue = value.filter(function (item) {
	                    return item !== childValue;
	                });
	                this.props.onChange(_newValue, this.props);
	            }
	        }
	    }]);
	    return CheckboxGroup;
	}(_Component3.default);
	
	CheckboxGroup.contextTypes = {
	    theme: _react2.default.PropTypes.string
	};
	
	CheckboxGroup.defaultProps = {
	    value: [],
	    onChange: function onChange() {}
	};
	
	exports.default = CheckboxGroup;
	module.exports = exports['default'];

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(3);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(5);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(9);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(7);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(6);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Component2 = __webpack_require__(12);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Icon = function (_Component) {
	    (0, _inherits3.default)(Icon, _Component);
	
	    function Icon() {
	        (0, _classCallCheck3.default)(this, Icon);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Icon).apply(this, arguments));
	    }
	
	    (0, _createClass3.default)(Icon, [{
	        key: 'render',
	        value: function render() {
	            if (this.props.url) {
	                return _react2.default.createElement('span', { className: this.className(), style: {
	                        backgroundImage: 'url(' + this.props.url + ')'
	                    } });
	            } else {
	                return _react2.default.createElement(
	                    'span',
	                    { className: this.className() },
	                    this.props.children
	                );
	            }
	        }
	    }, {
	        key: 'className',
	        value: function className() {
	            var className = 'icon';
	
	            if (this.props.className) {
	                className += ' ' + this.props.className;
	            }
	
	            return className;
	        }
	    }]);
	    return Icon;
	}(_Component3.default);
	
	exports.default = Icon;
	module.exports = exports['default'];

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends2 = __webpack_require__(15);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(3);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(5);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(9);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(7);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(6);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Control2 = __webpack_require__(34);
	
	var _Control3 = _interopRequireDefault(_Control2);
	
	var _pressable = __webpack_require__(109);
	
	var _pressable2 = _interopRequireDefault(_pressable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Link = function (_Control) {
	    (0, _inherits3.default)(Link, _Control);
	
	    function Link() {
	        (0, _classCallCheck3.default)(this, Link);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments));
	    }
	
	    (0, _createClass3.default)(Link, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var disabled = _props.disabled;
	            var title = _props.title;
	
	
	            if (this.props.url) {
	                var url = disabled ? null : this.props.url;
	
	                return _react2.default.createElement(
	                    'a',
	                    (0, _extends3.default)({ className: this.className() }, this.getControlHandlers(), { href: url, target: this.props.target, title: title }),
	                    this.props.children
	                );
	            } else {
	                var tabIndex = disabled ? -1 : 0;
	
	                return _react2.default.createElement(
	                    'span',
	                    (0, _extends3.default)({ className: this.className() }, this.getControlHandlers(), { role: 'button', tabIndex: tabIndex, title: title }),
	                    this.props.children
	                );
	            }
	        }
	    }, {
	        key: 'className',
	        value: function className() {
	            var className = 'link';
	
	            var theme = this.props.theme || this.context.theme;
	            if (theme) {
	                className += ' link_theme_' + theme;
	            }
	            if (this.props.type) {
	                className += ' link_type_' + this.props.type;
	            }
	            if (this.props.disabled) {
	                className += ' link_disabled';
	            }
	            if (this.props.focused) {
	                className += ' link_focused';
	            }
	            if (this.state.hovered) {
	                className += ' link_hovered';
	            }
	
	            if (this.props.className) {
	                className += ' ' + this.props.className;
	            }
	
	            return className;
	        }
	    }]);
	    return Link;
	}(_Control3.default);
	
	Link.propTypes = {
	    theme: _react2.default.PropTypes.string,
	    size: _react2.default.PropTypes.oneOf(['s', 'm', 'l', 'xl']),
	    className: _react2.default.PropTypes.string,
	    type: _react2.default.PropTypes.string,
	    disabled: _react2.default.PropTypes.bool,
	    focused: _react2.default.PropTypes.bool,
	    target: _react2.default.PropTypes.string,
	    title: _react2.default.PropTypes.string,
	    url: _react2.default.PropTypes.string,
	    onClick: _react2.default.PropTypes.func
	};
	
	Link.contextTypes = {
	    theme: _react2.default.PropTypes.string
	};
	
	exports.default = (0, _pressable2.default)(Link);
	module.exports = exports['default'];

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(3);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(5);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(9);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(7);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(6);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Component2 = __webpack_require__(12);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MenuItem = function (_Component) {
	    (0, _inherits3.default)(MenuItem, _Component);
	
	    function MenuItem(props) {
	        (0, _classCallCheck3.default)(this, MenuItem);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(MenuItem).call(this, props));
	
	        _this.onClick = _this.onClick.bind(_this);
	        _this.onMouseEnter = _this.onMouseEnter.bind(_this);
	        _this.onMouseLeave = _this.onMouseLeave.bind(_this);
	        return _this;
	    }
	
	    (0, _createClass3.default)(MenuItem, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                {
	                    className: this.className(),
	                    onClick: this.onClick,
	                    onMouseEnter: this.onMouseEnter,
	                    onMouseLeave: this.onMouseLeave
	                },
	                this.props.children
	            );
	        }
	    }, {
	        key: 'className',
	        value: function className() {
	            var className = 'menu-item';
	
	            var theme = this.props.theme || this.context.theme;
	            if (theme) {
	                className += ' menu-item_theme_' + theme;
	            }
	            if (this.props.size) {
	                className += ' menu-item_size_' + this.props.size;
	            }
	            if (this.props.disabled) {
	                className += ' menu-item_disabled';
	            }
	            if (this.props.hovered) {
	                className += ' menu-item_hovered';
	            }
	            if (this.props.checked) {
	                className += ' menu-item_checked';
	            }
	
	            if (this.props.className) {
	                className += ' ' + this.props.className;
	            }
	
	            return className;
	        }
	    }, {
	        key: 'onClick',
	        value: function onClick(e) {
	            if (this.props.disabled) {
	                return;
	            }
	
	            this.props.onClick(e, this.props);
	        }
	    }, {
	        key: 'onMouseEnter',
	        value: function onMouseEnter() {
	            if (this.props.disabled) {
	                return;
	            }
	
	            this.props.onHover(true, this.props);
	        }
	    }, {
	        key: 'onMouseLeave',
	        value: function onMouseLeave() {
	            if (this.props.disabled) {
	                return;
	            }
	
	            this.props.onHover(false, this.props);
	        }
	    }]);
	    return MenuItem;
	}(_Component3.default);
	
	MenuItem.contextTypes = {
	    theme: _react2.default.PropTypes.string
	};
	
	exports.default = MenuItem;
	module.exports = exports['default'];

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(3);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(5);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(9);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(7);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(6);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Component2 = __webpack_require__(12);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _Overlay = __webpack_require__(108);
	
	var _Overlay2 = _interopRequireDefault(_Overlay);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Modal = function (_Component) {
	    (0, _inherits3.default)(Modal, _Component);
	
	    function Modal(props) {
	        (0, _classCallCheck3.default)(this, Modal);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Modal).call(this, props));
	
	        _this.state = {
	            zIndex: 0
	        };
	        _this.shouldRenderToOverlay = false;
	        _this.onLayerClick = _this.onLayerClick.bind(_this);
	        _this.onLayerOrderChange = _this.onLayerOrderChange.bind(_this);
	        _this.onLayerRequestHide = _this.onLayerRequestHide.bind(_this);
	        return _this;
	    }
	
	    (0, _createClass3.default)(Modal, [{
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps) {
	            if (!this.shouldRenderToOverlay && nextProps.visible) {
	                this.shouldRenderToOverlay = true;
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var visible = this.props.visible;
	
	            var style = visible ? { zIndex: this.state.zIndex } : null;
	
	            var children = _react2.default.createElement(
	                'div',
	                { className: this.className(), role: 'dialog', 'aria-hidden': !visible, style: style },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'modal__table' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'modal__cell' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'modal__content', ref: 'content' },
	                            this.props.children
	                        )
	                    )
	                )
	            );
	
	            if (this.shouldRenderToOverlay) {
	                return _react2.default.createElement(
	                    _Overlay2.default,
	                    {
	                        visible: visible,
	                        zIndexGroupLevel: this.props.zIndexGroupLevel,
	                        onClick: this.onLayerClick,
	                        onRequestHide: this.onLayerRequestHide,
	                        onOrderChange: this.onLayerOrderChange
	                    },
	                    children
	                );
	            } else {
	                return children;
	            }
	        }
	    }, {
	        key: 'className',
	        value: function className() {
	            var className = 'popup modal';
	
	            var theme = this.props.theme || this.context.theme;
	            if (theme) {
	                className += ' modal_theme_' + theme;
	            }
	            if (this.props.size) {
	                className += ' modal_size_' + this.props.size;
	            }
	            if (this.props.visible) {
	                className += ' modal_visible';
	            }
	            if (this.shouldRenderToOverlay) {
	                className += ' modal_js_inited modal_has-animation';
	            }
	
	            if (this.props.className) {
	                className += ' ' + this.props.className;
	            }
	
	            return className;
	        }
	    }, {
	        key: 'requestHide',
	        value: function requestHide(e, reason) {
	            this.props.onRequestHide(e, reason);
	        }
	    }, {
	        key: 'onLayerClick',
	        value: function onLayerClick(e) {
	            if (!this.refs.content.contains(e.target)) {
	                this.requestHide(e, 'clickOutside');
	            }
	        }
	    }, {
	        key: 'onLayerOrderChange',
	        value: function onLayerOrderChange(zIndex) {
	            this.setState({ zIndex: zIndex });
	        }
	    }, {
	        key: 'onLayerRequestHide',
	        value: function onLayerRequestHide(e, reason) {
	            if (reason === 'escapeKeyPress') {
	                this.requestHide(e, reason);
	            }
	        }
	    }]);
	    return Modal;
	}(_Component3.default);
	
	Modal.propsTypes = {
	    theme: _react2.default.PropTypes.string,
	    size: _react2.default.PropTypes.string,
	    visible: _react2.default.PropTypes.bool.isRequired,
	    onRequestHide: _react2.default.PropTypes.func
	};
	
	Modal.defaultProps = {
	    visible: false,
	    zIndexGroupLevel: 20,
	    onRequestHide: function onRequestHide() {}
	};
	
	Modal.contextTypes = {
	    theme: _react2.default.PropTypes.string
	};
	
	exports.default = Modal;
	module.exports = exports['default'];

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(3);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(5);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(9);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(7);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(6);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(40);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Portal = function (_React$Component) {
	    (0, _inherits3.default)(Portal, _React$Component);
	
	    function Portal(props) {
	        (0, _classCallCheck3.default)(this, Portal);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Portal).call(this, props));
	
	        _this.portalNode = null;
	        _this.isAttachedToPortal = false;
	        return _this;
	    }
	
	    (0, _createClass3.default)(Portal, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.renderPortal();
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            this.renderPortal();
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.unmountPortal();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return null;
	        }
	    }, {
	        key: 'renderPortal',
	        value: function renderPortal() {
	            var child = _react2.default.Children.only(this.props.children);
	            if (child) {
	                this.mountPortal();
	                // NOTE: `ReactDOM.unstable_renderSubtreeIntoContainer` to store intermediate contexts
	                _reactDom2.default.unstable_renderSubtreeIntoContainer(this, child, this.portalNode);
	                this.isAttachedToPortal = true;
	            } else {
	                this.unmountPortal();
	            }
	        }
	    }, {
	        key: 'mountPortal',
	        value: function mountPortal() {
	            if (!this.portalNode) {
	                this.portalNode = document.createElement('div');
	                this.getPortalRootNode().appendChild(this.portalNode);
	            }
	        }
	    }, {
	        key: 'unmountPortal',
	        value: function unmountPortal() {
	            if (this.isAttachedToPortal) {
	                _reactDom2.default.unmountComponentAtNode(this.portalNode);
	                this.isAttachedToPortal = false;
	            }
	            if (this.portalNode) {
	                this.getPortalRootNode().removeChild(this.portalNode);
	                this.portalNode = null;
	            }
	        }
	    }, {
	        key: 'getPortalRootNode',
	        value: function getPortalRootNode() {
	            return document.body;
	        }
	    }]);
	    return Portal;
	}(_react2.default.Component);
	
	exports.default = Portal;
	module.exports = exports['default'];

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof2 = __webpack_require__(58);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _extends2 = __webpack_require__(15);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(3);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(5);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(9);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(7);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(6);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(40);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _Component2 = __webpack_require__(12);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _Overlay = __webpack_require__(108);
	
	var _Overlay2 = _interopRequireDefault(_Overlay);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// FIXME(narqo@): this is only valid for theme islands
	var MAIN_OFFSET = 5;
	var VIEWPORT_OFFSET = 10;
	var VIEWPORT_ACCURACY_FACTOR = 0.99;
	var DEFAULT_DIRECTIONS = ['bottom-left', 'bottom-center', 'bottom-right', 'top-left', 'top-center', 'top-right', 'right-top', 'right-center', 'right-bottom', 'left-top', 'left-center', 'left-bottom'];
	
	var Popup = function (_Component) {
	    (0, _inherits3.default)(Popup, _Component);
	
	    function Popup(props) {
	        (0, _classCallCheck3.default)(this, Popup);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Popup).call(this, props));
	
	        _this.state = {
	            direction: undefined,
	            left: undefined,
	            top: undefined,
	            zIndex: 0
	        };
	
	        _this.shouldRenderToOverlay = false;
	
	        _this.onLayerOrderChange = _this.onLayerOrderChange.bind(_this);
	        _this.onLayerRequestHide = _this.onLayerRequestHide.bind(_this);
	        _this.onViewportResize = _this.onViewportResize.bind(_this);
	        _this.onViewportScroll = _this.onViewportScroll.bind(_this);
	        return _this;
	    }
	
	    (0, _createClass3.default)(Popup, [{
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps) {
	            if (!this.shouldRenderToOverlay && nextProps.visible) {
	                this.shouldRenderToOverlay = true;
	            }
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps) {
	            if (this.shouldRenderToOverlay && this.props.visible !== prevProps.visible) {
	                this.reposition();
	                this.handleVisibleChange(this.props.visible);
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.handleVisibleChange(false);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            if (this.shouldRenderToOverlay) {
	                var style = {
	                    left: this.state.left,
	                    top: this.state.top,
	                    zIndex: this.state.zIndex
	                };
	
	                return _react2.default.createElement(
	                    _Overlay2.default,
	                    {
	                        visible: this.props.visible,
	                        onRequestHide: this.onLayerRequestHide,
	                        onOrderChange: this.onLayerOrderChange
	                    },
	                    _react2.default.createElement(
	                        'div',
	                        { ref: 'popup', className: this.className(), style: style },
	                        this.props.children
	                    )
	                );
	            } else {
	                return _react2.default.createElement(
	                    'div',
	                    { className: this.className() },
	                    this.props.children
	                );
	            }
	        }
	    }, {
	        key: 'className',
	        value: function className() {
	            var className = 'popup';
	
	            var theme = this.props.theme || this.context.theme;
	            if (theme) {
	                className += ' popup_theme_' + theme;
	            }
	            if (this.props.size) {
	                className += ' popup_size_' + this.props.size;
	            }
	            if (this.state.direction) {
	                className += ' popup_direction_' + this.state.direction;
	            }
	            if (this.props.visible) {
	                className += ' popup_visible';
	            }
	            if (this.shouldRenderToOverlay) {
	                // FIXME(@narqo): `popup_js_inited` must be set for CSS of bem-components
	                className += ' popup_js_inited';
	            }
	
	            if (this.props.className) {
	                className += ' ' + this.props.className;
	            }
	
	            return className;
	        }
	    }, {
	        key: 'handleVisibleChange',
	        value: function handleVisibleChange(visible) {
	            // NOTE(@narqo): subscribe to resize/scroll only if popup can be repositioned within `directions`
	            if (visible && this.props.directions.length > 1) {
	                window.addEventListener('resize', this.onViewportResize);
	                window.addEventListener('scroll', this.onViewportScroll);
	            } else {
	                window.removeEventListener('resize', this.onViewportResize);
	                window.removeEventListener('scroll', this.onViewportScroll);
	            }
	        }
	    }, {
	        key: 'onLayerRequestHide',
	        value: function onLayerRequestHide(e, reason) {
	            if (this.props.visible && this.props.onRequestHide) {
	                if (reason === 'clickOutside') {
	                    var anchor = this.getAnchor();
	                    if (anchor instanceof Element && anchor.contains(e.target)) {
	                        return;
	                    }
	                }
	                this.props.onRequestHide(e, reason);
	            }
	        }
	    }, {
	        key: 'onLayerOrderChange',
	        value: function onLayerOrderChange(zIndex) {
	            this.setState({ zIndex: zIndex });
	        }
	    }, {
	        key: 'onViewportResize',
	        value: function onViewportResize() {
	            this.reposition();
	        }
	    }, {
	        key: 'onViewportScroll',
	        value: function onViewportScroll() {
	            this.reposition();
	        }
	    }, {
	        key: 'reposition',
	        value: function reposition() {
	            if (this.props.visible) {
	                // TODO(@narqo): don't call DOMNode measurements in case nothing has changed
	                var layout = this.calcBestLayoutParams();
	
	                if (this.props.onLayout) {
	                    this.props.onLayout({ layout: layout }, this.props);
	                }
	
	                var direction = layout.direction;
	                var left = layout.left;
	                var top = layout.top;
	
	
	                this.setState({ direction: direction, left: left, top: top });
	            }
	        }
	    }, {
	        key: 'getPopup',
	        value: function getPopup() {
	            return _reactDom2.default.findDOMNode(this.refs.popup);
	        }
	    }, {
	        key: 'getAnchor',
	        value: function getAnchor() {
	            if (!this.props.anchor) {
	                return null;
	            }
	
	            var anchor = void 0;
	            if (typeof this.props.anchor === 'function') {
	                anchor = this.props.anchor();
	            } else {
	                anchor = this.props.anchor;
	            }
	
	            if (anchor instanceof _Component3.default) {
	                return _reactDom2.default.findDOMNode(anchor);
	            } else {
	                return anchor || null;
	            }
	        }
	    }, {
	        key: 'calcBestLayoutParams',
	        value: function calcBestLayoutParams() {
	            var viewport = this.calcViewportDimensions();
	            var popup = this.calcPopupDimensions();
	            var anchor = this.calcAnchorDimensions();
	
	            var i = 0,
	                bestViewportFactor = 0,
	                bestDirection = void 0,
	                bestPos = void 0,
	                direction = void 0;
	
	            while (direction = this.props.directions[i++]) {
	                // eslint-disable-line no-cond-assign
	                var position = this.calcPopupPosition(direction, anchor, popup);
	                var viewportFactor = this.calcViewportFactor(position, viewport, popup);
	
	                if (i === 1 || viewportFactor > bestViewportFactor || !bestViewportFactor && this.state.direction === direction) {
	                    bestDirection = direction;
	                    bestViewportFactor = viewportFactor;
	                    bestPos = position;
	                }
	                if (bestViewportFactor > VIEWPORT_ACCURACY_FACTOR) break;
	            }
	
	            return (0, _extends3.default)({
	                direction: bestDirection
	            }, bestPos);
	        }
	    }, {
	        key: 'calcAnchorDimensions',
	        value: function calcAnchorDimensions() {
	            var anchor = this.getAnchor();
	            var left = void 0,
	                top = void 0,
	                width = void 0,
	                height = void 0;
	
	            if (anchor instanceof Element) {
	                var anchorRect = anchor.getBoundingClientRect();
	                var viewportRect = document.documentElement.getBoundingClientRect();
	                left = anchorRect.left - viewportRect.left;
	                top = anchorRect.top - viewportRect.top;
	                width = anchorRect.width;
	                height = anchorRect.height;
	            } else if (anchor === null) {
	                left = top = height = width = 0;
	            } else if ((typeof anchor === 'undefined' ? 'undefined' : (0, _typeof3.default)(anchor)) === 'object') {
	                left = anchor.left;
	                top = anchor.top;
	                width = height = 0;
	            }
	
	            return {
	                left: left,
	                top: top,
	                width: width,
	                height: height
	            };
	        }
	    }, {
	        key: 'calcViewportDimensions',
	        value: function calcViewportDimensions() {
	            var top = window.pageYOffset;
	            var left = window.pageXOffset;
	            var height = window.innerHeight;
	            var width = window.innerWidth;
	
	            return {
	                top: top,
	                left: left,
	                bottom: top + height,
	                right: left + width
	            };
	        }
	    }, {
	        key: 'calcViewportFactor',
	        value: function calcViewportFactor(pos, viewport, popup) {
	            var viewportOffset = this.props.viewportOffset;
	
	            var intersectionLeft = Math.max(pos.left, viewport.left + viewportOffset);
	            var intersectionRight = Math.min(pos.left + popup.width, viewport.right - viewportOffset);
	            var intersectionTop = Math.max(pos.top, viewport.top + viewportOffset);
	            var intersectionBottom = Math.min(pos.top + popup.height, viewport.bottom - viewportOffset);
	
	            if (intersectionLeft < intersectionRight && intersectionTop < intersectionBottom) {
	                // has intersection
	                return (intersectionRight - intersectionLeft) * (intersectionBottom - intersectionTop) / popup.area;
	            } else {
	                return 0;
	            }
	        }
	    }, {
	        key: 'calcPopupDimensions',
	        value: function calcPopupDimensions() {
	            var popup = this.getPopup();
	            var width = 0,
	                height = 0;
	
	            if (popup) {
	                width = popup.offsetWidth;
	                height = popup.offsetHeight;
	            }
	
	            return {
	                width: width,
	                height: height,
	                area: width * height
	            };
	        }
	    }, {
	        key: 'calcPopupPosition',
	        value: function calcPopupPosition(direction, anchor, popup) {
	            var _props = this.props;
	            var mainOffset = _props.mainOffset;
	            var secondaryOffset = _props.secondaryOffset;
	
	            var top = void 0,
	                left = void 0;
	
	            if (checkMainDirection(direction, 'bottom')) {
	                top = anchor.top + anchor.height + mainOffset;
	            } else if (checkMainDirection(direction, 'top')) {
	                top = anchor.top - popup.height - mainOffset;
	            } else if (checkMainDirection(direction, 'left')) {
	                left = anchor.left - popup.width - mainOffset;
	            } else if (checkMainDirection(direction, 'right')) {
	                left = anchor.left + anchor.width + mainOffset;
	            }
	
	            if (checkSecondaryDirection(direction, 'right')) {
	                left = anchor.left + anchor.width - popup.width - secondaryOffset;
	            } else if (checkSecondaryDirection(direction, 'left')) {
	                left = anchor.left + secondaryOffset;
	            } else if (checkSecondaryDirection(direction, 'bottom')) {
	                top = anchor.top + anchor.height - popup.height - secondaryOffset;
	            } else if (checkSecondaryDirection(direction, 'top')) {
	                top = anchor.top + secondaryOffset;
	            } else if (checkSecondaryDirection(direction, 'center')) {
	                if (checkMainDirection(direction, 'top', 'bottom')) {
	                    left = anchor.left + anchor.width / 2 - popup.width / 2;
	                } else if (checkMainDirection(direction, 'left', 'right')) {
	                    top = anchor.top + anchor.height / 2 - popup.height / 2;
	                }
	            }
	
	            var bottom = top + popup.height;
	            var right = left + popup.width;
	
	            return { top: top, left: left, bottom: bottom, right: right };
	        }
	    }]);
	    return Popup;
	}(_Component3.default);
	
	function checkMainDirection(direction, mainDirection1, mainDirection2) {
	    return !direction.indexOf(mainDirection1) || mainDirection2 && !direction.indexOf(mainDirection2);
	}
	
	function checkSecondaryDirection(direction, secondaryDirection) {
	    return ~direction.indexOf('-' + secondaryDirection);
	}
	
	Popup.propsTypes = {
	    theme: _react2.default.PropTypes.string,
	    size: _react2.default.PropTypes.string,
	    visible: _react2.default.PropTypes.bool.isRequired,
	    anchor: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.shape({ left: _react2.default.PropTypes.number, top: _react2.default.PropTypes.number }), _react2.default.PropTypes.func]),
	    directions: _react2.default.PropTypes.oneOf(DEFAULT_DIRECTIONS),
	    mainOffset: _react2.default.PropTypes.number,
	    secondaryOffset: _react2.default.PropTypes.number,
	    onRequestHide: _react2.default.PropTypes.func,
	    onLayout: _react2.default.PropTypes.func
	};
	
	Popup.defaultProps = {
	    directions: DEFAULT_DIRECTIONS,
	    visible: false,
	    mainOffset: MAIN_OFFSET,
	    secondaryOffset: 0,
	    viewportOffset: VIEWPORT_OFFSET,
	    onRequestHide: function onRequestHide() {}
	};
	
	Popup.contextTypes = {
	    theme: _react2.default.PropTypes.string
	};
	
	exports.default = Popup;
	module.exports = exports['default'];

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(3);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(5);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(9);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(7);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(6);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Component2 = __webpack_require__(12);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ProgressBar = function (_Component) {
	    (0, _inherits3.default)(ProgressBar, _Component);
	
	    function ProgressBar() {
	        (0, _classCallCheck3.default)(this, ProgressBar);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ProgressBar).apply(this, arguments));
	    }
	
	    (0, _createClass3.default)(ProgressBar, [{
	        key: 'render',
	        value: function render() {
	            var value = this.props.value + '%';
	
	            return _react2.default.createElement(
	                'div',
	                { className: this.className(), role: 'progressbar', 'aria-valuenow': '' + value },
	                _react2.default.createElement('div', { className: 'progressbar__bar', style: { width: '' + value } })
	            );
	        }
	    }, {
	        key: 'className',
	        value: function className() {
	            var className = 'progressbar';
	
	            var theme = this.props.theme || this.context.theme;
	            if (theme) {
	                className += ' progressbar_theme_' + theme;
	            }
	            if (this.props.size) {
	                className += ' progressbar_size_' + this.props.size;
	            }
	
	            if (this.props.className) {
	                className += ' ' + this.props.className;
	            }
	
	            return className;
	        }
	    }]);
	    return ProgressBar;
	}(_Component3.default);
	
	ProgressBar.contextTypes = {
	    theme: _react2.default.PropTypes.string
	};
	
	ProgressBar.defaultProps = {
	    value: 0
	};
	
	exports.default = ProgressBar;
	module.exports = exports['default'];

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends2 = __webpack_require__(15);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(3);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(5);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(9);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(7);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(6);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Control2 = __webpack_require__(34);
	
	var _Control3 = _interopRequireDefault(_Control2);
	
	var _Button = __webpack_require__(47);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Radio = function (_Control) {
	    (0, _inherits3.default)(Radio, _Control);
	
	    function Radio(props) {
	        (0, _classCallCheck3.default)(this, Radio);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Radio).call(this, props));
	
	        _this.onButtonClick = _this.onButtonClick.bind(_this);
	        _this.onButtonFocusChange = _this.onButtonFocusChange.bind(_this);
	        _this.onButtonHoverChange = _this.onButtonHoverChange.bind(_this);
	        _this.onControlChange = _this.onControlChange.bind(_this);
	        return _this;
	    }
	
	    (0, _createClass3.default)(Radio, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var name = _props.name;
	            var theme = _props.theme;
	            var size = _props.size;
	            var type = _props.type;
	            var checked = _props.checked;
	            var disabled = _props.disabled;
	            var value = _props.value;
	            var focused = this.state.focused;
	
	
	            if (type === 'button') {
	                return _react2.default.createElement(
	                    'label',
	                    { className: this.className() },
	                    checked && _react2.default.createElement('input', { type: 'hidden', name: name, value: value, disabled: disabled }),
	                    _react2.default.createElement(
	                        _Button2.default,
	                        { theme: theme, size: size, type: type,
	                            disabled: disabled,
	                            checked: checked,
	                            focused: focused,
	                            onFocusChange: this.onButtonFocusChange,
	                            onHoverChange: this.onButtonHoverChange,
	                            onClick: this.onButtonClick
	                        },
	                        this.props.children
	                    )
	                );
	            } else {
	                return _react2.default.createElement(
	                    'label',
	                    (0, _extends3.default)({ className: this.className() }, this.getControlHandlers()),
	                    _react2.default.createElement(
	                        'span',
	                        { className: 'radio__box' },
	                        _react2.default.createElement('input', { ref: 'control', className: 'radio__control', type: 'radio', autoComplete: 'off',
	                            name: name,
	                            disabled: disabled,
	                            value: value,
	                            checked: checked,
	                            onChange: this.onControlChange
	                        })
	                    ),
	                    _react2.default.createElement(
	                        'span',
	                        { className: 'radio__text', role: 'presentation' },
	                        this.props.children
	                    )
	                );
	            }
	        }
	    }, {
	        key: 'className',
	        value: function className() {
	            var className = 'radio';
	
	            var theme = this.props.theme || this.context.theme;
	            if (theme) {
	                className += ' radio_theme_' + theme;
	            }
	            if (this.props.size) {
	                className += ' radio_size_' + this.props.size;
	            }
	            if (this.props.type) {
	                className += ' radio_type_' + this.props.type;
	            }
	            if (this.props.disabled) {
	                className += ' radio_disabled';
	            }
	            if (this.props.checked) {
	                className += ' radio_checked';
	            }
	            if (this.state.hovered) {
	                className += ' radio_hovered';
	            }
	            if (this.state.focused) {
	                className += ' radio_focused';
	            }
	
	            if (this.props.className) {
	                className += ' ' + this.props.className;
	            }
	
	            return className;
	        }
	    }, {
	        key: 'onControlChange',
	        value: function onControlChange() {
	            if (this.props.disabled || this.props.checked) {
	                return;
	            }
	            this.props.onCheck(true, this.props);
	        }
	    }, {
	        key: 'onButtonFocusChange',
	        value: function onButtonFocusChange(focused) {
	            this.setState({ focused: focused });
	        }
	    }, {
	        key: 'onButtonHoverChange',
	        value: function onButtonHoverChange(hovered) {
	            this.setState({ hovered: hovered });
	        }
	    }, {
	        key: 'onButtonClick',
	        value: function onButtonClick(e) {
	            if (this.props.onClick) {
	                this.props.onClick(e, this.props);
	            }
	            if (!e.isDefaultPrevented()) {
	                this.onControlChange();
	            }
	        }
	    }]);
	    return Radio;
	}(_Control3.default);
	
	Radio.propTypes = {
	    theme: _react2.default.PropTypes.string,
	    size: _react2.default.PropTypes.oneOf(['s', 'm', 'l', 'xl']),
	    type: _react2.default.PropTypes.string,
	    disabled: _react2.default.PropTypes.bool,
	    checked: _react2.default.PropTypes.bool,
	    value: _react2.default.PropTypes.any,
	    onClick: _react2.default.PropTypes.func,
	    onCheck: _react2.default.PropTypes.func
	};
	
	Radio.defaultProps = {
	    onCheck: function onCheck() {}
	};
	
	Radio.contextTypes = {
	    theme: _react2.default.PropTypes.string
	};
	
	exports.default = Radio;
	module.exports = exports['default'];

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends2 = __webpack_require__(15);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(3);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(5);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(9);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(7);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(6);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Component2 = __webpack_require__(12);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var RadioGroup = function (_Component) {
	    (0, _inherits3.default)(RadioGroup, _Component);
	
	    function RadioGroup(props) {
	        (0, _classCallCheck3.default)(this, RadioGroup);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(RadioGroup).call(this, props));
	
	        _this.onChildCheck = _this.onChildCheck.bind(_this);
	        return _this;
	    }
	
	    (0, _createClass3.default)(RadioGroup, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var _props = this.props;
	            var theme = _props.theme;
	            var size = _props.size;
	            var type = _props.type;
	            var name = _props.name;
	            var disabled = _props.disabled;
	            var value = _props.value;
	
	
	            var children = _react2.default.Children.map(this.props.children, function (child) {
	                var checked = child.props.value === value;
	                return _react2.default.cloneElement(child, (0, _extends3.default)({
	                    theme: theme,
	                    size: size,
	                    type: type,
	                    name: name,
	                    value: value,
	                    disabled: disabled
	                }, child.props, {
	                    checked: checked,
	                    onCheck: _this2.onChildCheck
	                }));
	            });
	
	            return _react2.default.createElement(
	                'span',
	                { className: this.className() },
	                children
	            );
	        }
	    }, {
	        key: 'className',
	        value: function className() {
	            var className = 'radio-group control-group';
	
	            var theme = this.props.theme || this.context.theme;
	            if (theme) {
	                className += ' radio-group_theme_' + theme;
	            }
	            if (this.props.size) {
	                className += ' radio-group_size_' + this.props.size;
	            }
	            if (this.props.type) {
	                className += ' radio-group_type_' + this.props.type;
	            }
	
	            if (this.props.className) {
	                className += ' ' + this.props.className;
	            }
	
	            return className;
	        }
	    }, {
	        key: 'onChildCheck',
	        value: function onChildCheck(_, radioProps) {
	            var value = radioProps.value;
	            if (value !== this.props.value) {
	                this.props.onChange(value, this.props);
	            }
	        }
	    }]);
	    return RadioGroup;
	}(_Component3.default);
	
	RadioGroup.contextTypes = {
	    theme: _react2.default.PropTypes.string
	};
	
	RadioGroup.defaultProps = {
	    onChange: function onChange() {}
	};
	
	module.exports = RadioGroup;

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(3);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(5);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(9);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(7);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(6);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Component2 = __webpack_require__(12);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _Button = __webpack_require__(47);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Popup = __webpack_require__(198);
	
	var _Popup2 = _interopRequireDefault(_Popup);
	
	var _Menu = __webpack_require__(107);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _Icon = __webpack_require__(193);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _Group = __webpack_require__(74);
	
	var _Group2 = _interopRequireDefault(_Group);
	
	var _Item = __webpack_require__(75);
	
	var _Item2 = _interopRequireDefault(_Item);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _react2.default.createElement(_Icon2.default, { className: 'select__tick' });
	
	var Select = function (_Component) {
	    (0, _inherits3.default)(Select, _Component);
	
	    function Select(props) {
	        (0, _classCallCheck3.default)(this, Select);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Select).call(this, props));
	
	        _this.state = {
	            menuHeight: null,
	            menuFocused: false,
	            popupVisible: false
	        };
	
	        _this._wasPopupVisible = false;
	        _this._shouldRestoreButtonFocus = false;
	        _this._preventTrapMenuFocus = false;
	        _this._cachedChildren = null;
	
	        _this.onButtonClick = _this.onButtonClick.bind(_this);
	        _this.onButtonKeyDown = _this.onButtonKeyDown.bind(_this);
	        _this.onMenuChange = _this.onMenuChange.bind(_this);
	        _this.onMenuFocusChange = _this.onMenuFocusChange.bind(_this);
	        _this.onMenuItemClick = _this.onMenuItemClick.bind(_this);
	        _this.onMenuKeyDown = _this.onMenuKeyDown.bind(_this);
	        _this.onPopupRequestHide = _this.onPopupRequestHide.bind(_this);
	        _this.onPopupLayout = _this.onPopupLayout.bind(_this);
	        return _this;
	    }
	
	    (0, _createClass3.default)(Select, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (nextProps.children !== this.props.children) {
	                this._cachedChildren = null;
	            }
	        }
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(_, nextState) {
	            if (nextState.popupVisible !== this.state.popupVisible && !nextState.popupVisible) {
	                this._wasPopupVisible = false;
	                this.setState({ menuFocused: false });
	            }
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            var _this2 = this;
	
	            this._shouldRestoreButtonFocus = false;
	            this._preventTrapMenuFocus = false;
	
	            // FIXME(narqo@): an ugly trick to prevent DOM-focus from jumping to the bottom of the page on first open
	            // @see https://github.com/narqo/react-islands/issues/41
	            if (!this._wasPopupVisible && this.state.popupVisible) {
	                this._wasPopupVisible = true;
	                process.nextTick(function () {
	                    _this2.setState({ menuFocused: true });
	                    _this2.trapMenuFocus();
	                });
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.setState({ popupVisible: false });
	            this._cachedChildren = null;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: this.className() },
	                this.renderInputs(),
	                this.renderButton(),
	                _react2.default.createElement(
	                    _Popup2.default,
	                    { theme: this.props.theme, size: this.props.size,
	                        anchor: this.refs.button,
	                        directions: ['bottom-left', 'bottom-right', 'top-left', 'top-right'],
	                        visible: this.state.popupVisible,
	                        onLayout: this.onPopupLayout,
	                        onRequestHide: this.onPopupRequestHide
	                    },
	                    this.renderMenu()
	                )
	            );
	        }
	    }, {
	        key: 'renderButtonText',
	        value: function renderButtonText() {
	            var value = this.props.value;
	
	            return this.getItems().reduce(function (res, item) {
	                if (value.indexOf(item.props.value) !== -1) {
	                    if (value.length === 1) {
	                        res.push(_Component3.default.textValue(item));
	                    } else {
	                        res.push(item.props.checkedText || _Component3.default.textValue(item));
	                    }
	                }
	                return res;
	            }, []).join(', ');
	        }
	    }, {
	        key: 'renderButton',
	        value: function renderButton() {
	            var _props = this.props;
	            var theme = _props.theme;
	            var size = _props.size;
	            var disabled = _props.disabled;
	            var mode = _props.mode;
	            var value = _props.value;
	
	            var focused = !disabled && this._shouldRestoreButtonFocus ? true : undefined;
	            var checked = (mode === 'check' || mode === 'radio-check') && Array.isArray(value) && value.length > 0;
	
	            return _react2.default.createElement(
	                _Button2.default,
	                { ref: 'button', theme: theme, size: size, className: 'select__button',
	                    disabled: disabled,
	                    checked: checked,
	                    focused: focused,
	                    onClick: this.onButtonClick,
	                    onKeyDown: this.onButtonKeyDown
	                },
	                this.renderButtonText() || this.props.placeholder,
	                _ref
	            );
	        }
	    }, {
	        key: 'renderMenu',
	        value: function renderMenu() {
	            var _props2 = this.props;
	            var theme = _props2.theme;
	            var size = _props2.size;
	            var disabled = _props2.disabled;
	            var mode = _props2.mode;
	            var value = _props2.value;
	            var _state = this.state;
	            var menuHeight = _state.menuHeight;
	            var menuFocused = _state.menuFocused;
	            var popupVisible = _state.popupVisible;
	
	            var focused = popupVisible && menuFocused;
	            var tabIndex = -1;
	
	            return _react2.default.createElement(
	                _Menu2.default,
	                { ref: 'menu', theme: theme, size: size, className: 'select__menu',
	                    mode: mode,
	                    value: value,
	                    tabIndex: tabIndex,
	                    disabled: disabled,
	                    focused: focused,
	                    maxHeight: menuHeight,
	                    onItemClick: this.onMenuItemClick,
	                    onKeyDown: this.onMenuKeyDown,
	                    onChange: this.onMenuChange,
	                    onFocusChange: this.onMenuFocusChange
	                },
	                this.props.children
	            );
	        }
	    }, {
	        key: 'renderInputs',
	        value: function renderInputs() {
	            if (this.props.disabled) {
	                return null;
	            }
	
	            var name = this.props.name;
	
	            return this.props.value.map(function (value, i) {
	                return _react2.default.createElement('input', { type: 'hidden', key: 'input' + i, name: name, value: value });
	            });
	        }
	    }, {
	        key: 'className',
	        value: function className() {
	            var className = 'select';
	
	            var theme = this.props.theme || this.context.theme;
	            if (theme) {
	                className += ' select_theme_' + theme;
	            }
	            if (this.props.size) {
	                className += ' select_size_' + this.props.size;
	            }
	            if (this.props.mode) {
	                className += ' select_mode_' + this.props.mode;
	            }
	            if (this.props.disabled) {
	                className += ' select_disabled';
	            }
	            if (this.state.popupVisible) {
	                className += ' select_opened';
	            }
	
	            if (this.props.className) {
	                className += ' ' + this.props.className;
	            }
	            return className;
	        }
	    }, {
	        key: 'getItems',
	        value: function getItems() {
	            var _this3 = this;
	
	            if (!this._cachedChildren) {
	                (function () {
	                    var items = [];
	
	                    _react2.default.Children.forEach(_this3.props.children, function (child) {
	                        if (_Component3.default.is(child, _Item2.default)) {
	                            items.push(child);
	                        } else if (_Component3.default.is(child, _Group2.default)) {
	                            //  Предполагаем, что ничего, кроме Item внутри Group уже нет.
	                            items = items.concat(_react2.default.Children.toArray(child.props.children));
	                        }
	                    });
	
	                    _this3._cachedChildren = items;
	                })();
	            }
	
	            return this._cachedChildren;
	        }
	    }, {
	        key: 'getMenu',
	        value: function getMenu() {
	            return this.refs.menu;
	        }
	    }, {
	        key: 'trapMenuFocus',
	        value: function trapMenuFocus() {
	            if (!this._preventTrapMenuFocus) {
	                this.getMenu().componentWillGainFocus();
	            }
	        }
	    }, {
	        key: 'onButtonClick',
	        value: function onButtonClick() {
	            this.setState({ popupVisible: !this.state.popupVisible });
	        }
	    }, {
	        key: 'onButtonKeyDown',
	        value: function onButtonKeyDown(e) {
	            if (!this.state.popupVisible && (e.key === 'ArrowDown' || e.key === 'ArrowUp') && !e.shiftKey) {
	                this.setState({ popupVisible: true });
	            }
	        }
	    }, {
	        key: 'onMenuItemClick',
	        value: function onMenuItemClick() {
	            if (this.props.mode === 'radio' || this.props.mode === 'radio-check') {
	                this._shouldRestoreButtonFocus = true;
	                // NOTE(narqo@): select with mode radio* must be closed on click within <Menu>
	                this.setState({ popupVisible: false });
	            }
	        }
	    }, {
	        key: 'onMenuKeyDown',
	        value: function onMenuKeyDown(e) {
	            // NOTE(narqo@): allow to move focus to another focusable using <Tab>
	            // @see https://www.w3.org/TR/wai-aria-practices-1.1/#menu
	            if (this.state.popupVisible && e.key === 'Tab') {
	                this._preventTrapMenuFocus = true;
	                this._shouldRestoreButtonFocus = true;
	                this.setState({ popupVisible: false });
	            }
	        }
	    }, {
	        key: 'onMenuChange',
	        value: function onMenuChange(value) {
	            this.props.onChange(value, this.props);
	        }
	    }, {
	        key: 'onMenuFocusChange',
	        value: function onMenuFocusChange(focused) {
	            if (!focused && this.state.popupVisible) {
	                // NOTE(narqo@): restore DOM focus to the Menu if still opened
	                this.trapMenuFocus();
	            }
	        }
	    }, {
	        key: 'onPopupLayout',
	        value: function onPopupLayout(_ref2, popupProps) {
	            var layout = _ref2.layout;
	            var maxHeight = this.props.maxHeight;
	            var viewportOffset = popupProps.viewportOffset;
	            var _window = window;
	            var pageYOffset = _window.pageYOffset;
	
	
	            if (layout.direction.indexOf('top-') > -1) {
	                var newTop = maxHeight ? layout.bottom - maxHeight : layout.top;
	                layout.top = Math.max(newTop, pageYOffset + viewportOffset);
	            } else {
	                var newBottom = maxHeight ? layout.top + maxHeight : layout.bottom;
	                layout.bottom = Math.min(newBottom, pageYOffset + window.innerHeight - viewportOffset);
	            }
	
	            var menuHeight = layout.bottom - layout.top;
	
	            this.setState({ menuHeight: menuHeight });
	        }
	    }, {
	        key: 'onPopupRequestHide',
	        value: function onPopupRequestHide(_, reason) {
	            this._shouldRestoreButtonFocus = reason === 'escapeKeyPress';
	            this.setState({ popupVisible: false });
	        }
	    }]);
	    return Select;
	}(_Component3.default);
	
	Select.contextTypes = {
	    theme: _react2.default.PropTypes.string
	};
	
	Select.defaultProps = {
	    placeholder: '—',
	    maxHeight: 0,
	    onChange: function onChange() {}
	};
	
	exports.default = Select;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(144)))

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(3);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(5);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(9);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(7);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(6);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Component2 = __webpack_require__(12);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Spinner = function (_Component) {
	    (0, _inherits3.default)(Spinner, _Component);
	
	    function Spinner() {
	        (0, _classCallCheck3.default)(this, Spinner);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Spinner).apply(this, arguments));
	    }
	
	    (0, _createClass3.default)(Spinner, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement('span', { className: this.className() });
	        }
	    }, {
	        key: 'className',
	        value: function className() {
	            var className = 'spin spin_visible';
	
	            var theme = this.props.theme || this.context.theme;
	            if (theme) {
	                className += ' spin_theme_' + theme;
	            }
	            if (this.props.size) {
	                className += ' spin_size_' + this.props.size;
	            }
	
	            if (this.props.className) {
	                className += ' ' + this.props.className;
	            }
	
	            return className;
	        }
	    }]);
	    return Spinner;
	}(_Component3.default);
	
	Spinner.contextTypes = {
	    theme: _react2.default.PropTypes.string
	};
	
	exports.default = Spinner;
	module.exports = exports['default'];

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends2 = __webpack_require__(15);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(3);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(5);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(9);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(7);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(6);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Control2 = __webpack_require__(34);
	
	var _Control3 = _interopRequireDefault(_Control2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TextArea = function (_Control) {
	    (0, _inherits3.default)(TextArea, _Control);
	
	    function TextArea(props) {
	        (0, _classCallCheck3.default)(this, TextArea);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TextArea).call(this, props));
	
	        _this.onInputChange = _this.onInputChange.bind(_this);
	        return _this;
	    }
	
	    (0, _createClass3.default)(TextArea, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement('textarea', (0, _extends3.default)({}, this.getControlHandlers(), { ref: 'control', className: this.className(),
	                name: this.props.name,
	                disabled: this.props.disabled,
	                placeholder: this.props.placeholder,
	                value: this.props.value,
	                onChange: this.onInputChange
	            }));
	        }
	    }, {
	        key: 'className',
	        value: function className() {
	            var className = 'textarea';
	
	            var theme = this.props.theme || this.context.theme;
	            if (theme) {
	                className += ' textarea_theme_' + theme;
	            }
	            if (this.props.size) {
	                className += ' textarea_size_' + this.props.size;
	            }
	            if (this.props.disabled) {
	                className += ' textarea_disabled';
	            }
	            if (this.state.hovered) {
	                className += ' textarea_hovered';
	            }
	            if (this.state.focused) {
	                className += ' textarea_focused';
	            }
	
	            if (this.props.className) {
	                className += ' ' + this.props.className;
	            }
	
	            return className;
	        }
	    }, {
	        key: 'onInputChange',
	        value: function onInputChange(e) {
	            if (this.props.disabled) {
	                return;
	            }
	            this.props.onChange(e.target.value, this.props);
	        }
	    }]);
	    return TextArea;
	}(_Control3.default);
	
	TextArea.contextTypes = {
	    theme: _react2.default.PropTypes.string
	};
	
	TextArea.propTypes = {
	    theme: _react2.default.PropTypes.string,
	    size: _react2.default.PropTypes.oneOf(['s', 'm', 'l', 'xl']),
	    name: _react2.default.PropTypes.string,
	    value: _react2.default.PropTypes.string,
	    placeholder: _react2.default.PropTypes.string,
	    disabled: _react2.default.PropTypes.bool,
	    onChange: _react2.default.PropTypes.func
	};
	
	TextArea.defaultProps = {
	    onChange: function onChange() {}
	};
	
	exports.default = TextArea;
	module.exports = exports['default'];

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends2 = __webpack_require__(15);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(3);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(5);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(9);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(7);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(6);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Control2 = __webpack_require__(34);
	
	var _Control3 = _interopRequireDefault(_Control2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TextInput = function (_Control) {
	    (0, _inherits3.default)(TextInput, _Control);
	
	    function TextInput(props) {
	        (0, _classCallCheck3.default)(this, TextInput);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TextInput).call(this, props));
	
	        _this.onClearClick = _this.onClearClick.bind(_this);
	        _this.onInputChange = _this.onInputChange.bind(_this);
	        return _this;
	    }
	
	    (0, _createClass3.default)(TextInput, [{
	        key: 'render',
	        value: function render() {
	            var value = this.props.value;
	
	
	            var hasClear = void 0;
	            if (this.props.hasClear) {
	                var clearClassName = 'input__clear';
	
	                if (value) {
	                    clearClassName += ' input__clear_visible';
	                }
	
	                hasClear = _react2.default.createElement('i', { className: clearClassName, onClick: this.onClearClick });
	            }
	
	            return _react2.default.createElement(
	                'span',
	                { className: this.className() },
	                _react2.default.createElement(
	                    'span',
	                    { className: 'input__box' },
	                    _react2.default.createElement('input', (0, _extends3.default)({}, this.getControlHandlers(), { ref: 'control', className: 'input__control',
	                        name: this.props.name,
	                        type: this.props.type,
	                        disabled: this.props.disabled,
	                        placeholder: this.props.placeholder,
	                        value: value,
	                        onChange: this.onInputChange
	                    })),
	                    hasClear
	                )
	            );
	        }
	    }, {
	        key: 'className',
	        value: function className() {
	            var className = 'input';
	
	            var theme = this.props.theme || this.context.theme;
	            if (theme) {
	                className += ' input_theme_' + theme;
	            }
	            if (this.props.size) {
	                className += ' input_size_' + this.props.size;
	            }
	            if (this.props.disabled) {
	                className += ' input_disabled';
	            }
	            if (this.state.hovered) {
	                className += ' input_hovered';
	            }
	            if (this.state.focused) {
	                className += ' input_focused';
	            }
	            if (this.props.hasClear) {
	                className += ' input_has-clear';
	            }
	
	            if (this.props.className) {
	                className += ' ' + this.props.className;
	            }
	
	            return className;
	        }
	    }, {
	        key: 'onInputChange',
	        value: function onInputChange(e) {
	            if (this.props.disabled) {
	                return;
	            }
	            this.props.onChange(e.target.value, this.props);
	        }
	    }, {
	        key: 'onClearClick',
	        value: function onClearClick(e) {
	            this.setState({ focused: true });
	
	            if (this.props.onClearClick) {
	                this.props.onClearClick(e);
	            }
	
	            if (!e.isDefaultPrevented()) {
	                this.props.onChange('', this.props, { source: 'clear' });
	            }
	        }
	    }]);
	    return TextInput;
	}(_Control3.default);
	
	TextInput.contextTypes = {
	    theme: _react2.default.PropTypes.string
	};
	
	TextInput.propTypes = {
	    theme: _react2.default.PropTypes.string,
	    size: _react2.default.PropTypes.oneOf(['s', 'm', 'l', 'xl']),
	    type: _react2.default.PropTypes.string,
	    name: _react2.default.PropTypes.string,
	    value: _react2.default.PropTypes.string,
	    placeholder: _react2.default.PropTypes.string,
	    disabled: _react2.default.PropTypes.bool,
	    hasClear: _react2.default.PropTypes.bool,
	    onChange: _react2.default.PropTypes.func
	};
	
	TextInput.defaultProps = {
	    type: 'text',
	    onChange: function onChange() {}
	};
	
	exports.default = TextInput;
	module.exports = exports['default'];

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = function() {};
	
	if (true) {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }
	
	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }
	
	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}
	
	module.exports = warning;


/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly8vLi4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly8vLi4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtaXNsYW5kcy9jb21wb25lbnRzL0NvbXBvbmVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtaXNsYW5kcy9jb21wb25lbnRzL0NvbnRyb2wvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanMiLCJ3ZWJwYWNrOi8vLy4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uLi9+L3JlYWN0LWlzbGFuZHMvY29tcG9uZW50cy9CdXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly8vLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8uLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwid2VicGFjazovLy8uLi9+L3JlYWN0LWlzbGFuZHMvY29tcG9uZW50cy9Hcm91cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1pc2xhbmRzL2NvbXBvbmVudHMvSXRlbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovLy8uLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vLy4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwid2VicGFjazovLy8uLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzIiwid2VicGFjazovLy8uLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtaXNsYW5kcy9jb21wb25lbnRzL01lbnUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtaXNsYW5kcy9jb21wb25lbnRzL092ZXJsYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtaXNsYW5kcy9jb21wb25lbnRzL3ByZXNzYWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vfi93ZWJwYWNrL34vbm9kZS1saWJzLWJyb3dzZXIvfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzIiwid2VicGFjazovLy8uLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzIiwid2VicGFjazovLy8uLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly8vLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19rZXlvZi5qcyIsIndlYnBhY2s6Ly8vLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanMiLCJ3ZWJwYWNrOi8vLy4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovLy8uLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1wcm90by5qcyIsIndlYnBhY2s6Ly8vLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzIiwid2VicGFjazovLy8uLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uLi9+L3JlYWN0LWlzbGFuZHMvY29tcG9uZW50cy9DaGVja2JveC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1pc2xhbmRzL2NvbXBvbmVudHMvQ2hlY2tib3hHcm91cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1pc2xhbmRzL2NvbXBvbmVudHMvSWNvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1pc2xhbmRzL2NvbXBvbmVudHMvTGluay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1pc2xhbmRzL2NvbXBvbmVudHMvTWVudS9NZW51SXRlbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1pc2xhbmRzL2NvbXBvbmVudHMvTW9kYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtaXNsYW5kcy9jb21wb25lbnRzL092ZXJsYXkvUG9ydGFsL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9+L3JlYWN0LWlzbGFuZHMvY29tcG9uZW50cy9Qb3B1cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1pc2xhbmRzL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtaXNsYW5kcy9jb21wb25lbnRzL1JhZGlvL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9+L3JlYWN0LWlzbGFuZHMvY29tcG9uZW50cy9SYWRpb0dyb3VwL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9+L3JlYWN0LWlzbGFuZHMvY29tcG9uZW50cy9TZWxlY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtaXNsYW5kcy9jb21wb25lbnRzL1NwaW5uZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtaXNsYW5kcy9jb21wb25lbnRzL1RleHRBcmVhL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9+L3JlYWN0LWlzbGFuZHMvY29tcG9uZW50cy9UZXh0SW5wdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtaXNsYW5kcy9+L3dhcm5pbmcvYnJvd3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7S0FFTSxROzs7QUFDRix5QkFBYztBQUFBOztBQUFBOztBQUVWLGVBQUssS0FBTCxHQUFhO0FBQ1QsaUNBQW9CLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FEWDtBQUVULDhCQUFpQixHQUZSO0FBR1Qsb0NBQXVCLEtBSGQ7QUFJVCwwQkFBYSxFQUpKO0FBS1QsOEJBQWlCLENBQUMsSUFBRCxDQUxSO0FBTVQsMkJBQWMsS0FOTDtBQU9ULDZCQUFnQjtBQVBQLFVBQWI7QUFGVTtBQVdiOzs7O2tDQUVRO0FBQUE7O0FBQ0wsb0JBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLHVCQUFZLE9BQU0sUUFBbEI7QUFDSTtBQUFBO0FBQUEsMkJBQVEsT0FBTSxTQUFkLEVBQXdCLE1BQUssR0FBN0I7QUFBQTtBQUFBO0FBREosa0JBREo7QUFLSTtBQUFBO0FBQUEsdUJBQVksT0FBTSxlQUFsQjtBQUNJO0FBQUE7QUFBQTtBQUNJLG9DQUFNLFNBRFY7QUFFSSxtQ0FBSyxHQUZUO0FBR0ksb0NBQU8sS0FBSyxLQUFM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O0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsOEdBQTZHLDZCQUE2Qjs7QUFFMUk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQWtDO0FBQ2xDLCtDQUE4QztBQUM5QztBQUNBOztBQUVBO0FBQ0EscUM7Ozs7Ozs7QUM5UEE7O0FBRUE7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7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Q0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsNEJBQTJCLGlCQUFpQjtBQUM1QztBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQXlDLGlCQUFpQjtBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBLGdDQUErQiw2Q0FBNkM7QUFDNUU7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FB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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLDRCQUEyQixnQkFBZ0I7O0FBRTNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNEQUFxRCxrQkFBa0I7QUFDdkU7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQzs7Ozs7O0FDdEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCLFdBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1pc2xhbmRzL2NvbXBvbmVudHMvQnV0dG9uJztcbmltcG9ydCBMaW5rIGZyb20gJ3JlYWN0LWlzbGFuZHMvY29tcG9uZW50cy9MaW5rJztcbmltcG9ydCBDaGVja2JveEdyb3VwIGZyb20gJ3JlYWN0LWlzbGFuZHMvY29tcG9uZW50cy9DaGVja2JveEdyb3VwJztcbmltcG9ydCBDaGVja2JveCBmcm9tICdyZWFjdC1pc2xhbmRzL2NvbXBvbmVudHMvQ2hlY2tib3gnO1xuaW1wb3J0IFRleHRJbnB1dCBmcm9tICdyZWFjdC1pc2xhbmRzL2NvbXBvbmVudHMvVGV4dElucHV0JztcbmltcG9ydCBUZXh0QXJlYSBmcm9tICdyZWFjdC1pc2xhbmRzL2NvbXBvbmVudHMvVGV4dEFyZWEnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1pc2xhbmRzL2NvbXBvbmVudHMvU2VsZWN0JztcbmltcG9ydCBNZW51IGZyb20gJ3JlYWN0LWlzbGFuZHMvY29tcG9uZW50cy9NZW51JztcbmltcG9ydCBHcm91cCBmcm9tICdyZWFjdC1pc2xhbmRzL2NvbXBvbmVudHMvR3JvdXAnO1xuaW1wb3J0IEl0ZW0gZnJvbSAncmVhY3QtaXNsYW5kcy9jb21wb25lbnRzL0l0ZW0nO1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWlzbGFuZHMvY29tcG9uZW50cy9Nb2RhbCc7XG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAncmVhY3QtaXNsYW5kcy9jb21wb25lbnRzL1Byb2dyZXNzQmFyJztcbmltcG9ydCBSYWRpb0dyb3VwIGZyb20gJ3JlYWN0LWlzbGFuZHMvY29tcG9uZW50cy9SYWRpb0dyb3VwJztcbmltcG9ydCBSYWRpbyBmcm9tICdyZWFjdC1pc2xhbmRzL2NvbXBvbmVudHMvUmFkaW8nO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSAncmVhY3QtaXNsYW5kcy9jb21wb25lbnRzL1NwaW5uZXInO1xuXG5pbXBvcnQgeyBMYXlvdXQsIExheW91dENlbGwgfSBmcm9tICcuL2NvbXBvbmVudHMvTGF5b3V0JztcblxuY2xhc3MgU2hvd2Nhc2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY2hlY2tib3hHcm91cFZhbHVlOiBbJ24nLCAncCddLFxuICAgICAgICAgICAgcmFkaW9Hcm91cFZhbHVlOiAnbicsXG4gICAgICAgICAgICByYWRpb0dyb3VwQnV0dG9uVmFsdWU6ICdhbnknLFxuICAgICAgICAgICAgc2VsZWN0VmFsdWU6IFtdLFxuICAgICAgICAgICAgc2VsZWN0TW9vZFZhbHVlOiBbJzIwJ10sXG4gICAgICAgICAgICBtb2RhbFZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgcHJvZ3Jlc3NBY3RpdmU6IGZhbHNlLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPExheW91dENlbGwgdGl0bGU9XCJCdXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0aGVtZT1cImlzbGFuZHNcIiBzaXplPVwic1wiPnNpemUgUzwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTGF5b3V0Q2VsbD5cblxuICAgICAgICAgICAgICAgIDxMYXlvdXRDZWxsIHRpdGxlPVwiQ2hlY2tib3hHcm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hHcm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU9XCJpc2xhbmRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNoZWNrYm94R3JvdXBWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLnNldFN0YXRlKHsgY2hlY2tib3hHcm91cFZhbHVlOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IHZhbHVlPVwic1wiPlNtYWxsPC9DaGVja2JveD48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IHZhbHVlPVwiblwiPk5vcm1hbDwvQ2hlY2tib3g+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCB2YWx1ZT1cImJcIiBkaXNhYmxlZD5CaWc8L0NoZWNrYm94Pjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggdmFsdWU9XCJwXCIgZGlzYWJsZWQ+UHJldHR5PC9DaGVja2JveD48YnIvPlxuICAgICAgICAgICAgICAgICAgICA8L0NoZWNrYm94R3JvdXA+XG4gICAgICAgICAgICAgICAgPC9MYXlvdXRDZWxsPlxuXG4gICAgICAgICAgICAgICAgPExheW91dENlbGwgdGl0bGU9XCJUZXh0SW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRJbnB1dCB0aGVtZT1cImlzbGFuZHNcIiBzaXplPVwibFwiIHBsYWNlaG9sZGVyPVwiVHlwZSBhIHF1ZXN0aW9uXCIgaGFzQ2xlYXIvPlxuICAgICAgICAgICAgICAgIDwvTGF5b3V0Q2VsbD5cblxuICAgICAgICAgICAgICAgIDxMYXlvdXRDZWxsIHRpdGxlPVwiTWVudVwiPlxuICAgICAgICAgICAgICAgICAgICA8TWVudSBjbGFzc05hbWU9XCJtZW51LXNob3djYXNlXCIgdGhlbWU9XCJpc2xhbmRzXCIgc2l6ZT1cImxcIiBtb2RlPVwicmFkaW9cIiB2YWx1ZT17WyczMCddfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtIHZhbHVlPVwiMTBcIj5TaG93IG9uIHNpdGU8L0l0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SXRlbSB2YWx1ZT1cIjIwXCI+Q2FjaGVkIHZlcnNpb248L0l0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SXRlbSB2YWx1ZT1cIjMwXCI+U2VhcmNoIGluIHlvdXIgcG9ja2V0PC9JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICAgICAgPC9MYXlvdXRDZWxsPlxuXG4gICAgICAgICAgICAgICAgPExheW91dENlbGwgdGl0bGU9XCJTZWxlY3QgKG1vZGUgY2hlY2spXCI+XG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lPVwiaXNsYW5kc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlPVwiY2hlY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYW5ndWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RWYWx1ZTogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtIGNoZWNrZWRUZXh0PVwicnVcIiB2YWx1ZT1cIjEwXCI+0KDRg9GB0YHQutC40Lk8L0l0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SXRlbSBjaGVja2VkVGV4dD1cImVuXCIgdmFsdWU9XCIyMFwiPkVuZ2xpc2g8L0l0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SXRlbSBjaGVja2VkVGV4dD1cInB0XCIgdmFsdWU9XCIzMFwiPlBvcnR1Z3XDqnM8L0l0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SXRlbSBjaGVja2VkVGV4dD1cImpwXCIgdmFsdWU9XCI0MFwiPuS4reWcizwvSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9MYXlvdXRDZWxsPlxuXG4gICAgICAgICAgICAgICAgPExheW91dENlbGwgdGl0bGU9XCJCdXR0b24gKHZpZXcgYWN0aW9uKVwiPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRoZW1lPVwiaXNsYW5kc1wiIHNpemU9XCJtXCIgdmlldz1cImFjdGlvblwiPkp1c3QgRE8gaXQhPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9MYXlvdXRDZWxsPlxuXG4gICAgICAgICAgICAgICAgPExheW91dENlbGwgdGl0bGU9XCJSYWRpb0dyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxSYWRpb0dyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVtZT1cImlzbGFuZHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucmFkaW9Hcm91cFZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuc2V0U3RhdGUoeyByYWRpb0dyb3VwVmFsdWU6IHZhbHVlIH0pfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9XCJzXCI+UmFkaW8gaXMgb2ZmPC9SYWRpbz48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvIHZhbHVlPVwiblwiPlJhZGlvIGlzIG9uPC9SYWRpbz48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvIHZhbHVlPVwiYlwiIGRpc2FibGVkPk5vLCB5b3UgY2FuJ3Q8L1JhZGlvPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9XCJwXCIgZGlzYWJsZWQ+WW91IGhhdmUgbm8gY2hvaWNlPC9SYWRpbz48YnIvPlxuICAgICAgICAgICAgICAgICAgICA8L1JhZGlvR3JvdXA+XG4gICAgICAgICAgICAgICAgPC9MYXlvdXRDZWxsPlxuXG4gICAgICAgICAgICAgICAgPExheW91dENlbGwgdGl0bGU9XCJSYWRpb0dyb3VwICh0eXBlIGJ1dHRvbilcIj5cbiAgICAgICAgICAgICAgICAgICAgPFJhZGlvR3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lPVwiaXNsYW5kc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnJhZGlvR3JvdXBCdXR0b25WYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLnNldFN0YXRlKHsgcmFkaW9Hcm91cEJ1dHRvblZhbHVlOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvIHZhbHVlPVwiYndcIj5CbGFjayAmIFdoaXRlPC9SYWRpbz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT1cImNvbG91clwiPkNvbG91cmVkPC9SYWRpbz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT1cImFueVwiPkFueSBjb2xvdXI8L1JhZGlvPlxuICAgICAgICAgICAgICAgICAgICA8L1JhZGlvR3JvdXA+XG4gICAgICAgICAgICAgICAgPC9MYXlvdXRDZWxsPlxuXG4gICAgICAgICAgICAgICAgPExheW91dENlbGwgdGl0bGU9XCJTZWxlY3QgKG1vZGUgcmFkaW8tY2hlY2spXCI+XG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lPVwiaXNsYW5kc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlPVwicmFkaW8tY2hlY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJIb3cgYXJlIHlvdSB0b2RheT9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0TW9vZFZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdE1vb2RWYWx1ZTogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtIHZhbHVlPVwiMTBcIj5CYWQ8L0l0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SXRlbSB2YWx1ZT1cIjIwXCI+Tm9ybWFsPC9JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0gdmFsdWU9XCIzMFwiPkdyZWF0PC9JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtIHZhbHVlPVwiNDBcIj5MYXdmdWwgRXZpbDwvSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbSB2YWx1ZT1cIjUwXCI+VHJ1ZSBOZXV0cmFsPC9JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtIHZhbHVlPVwiNjBcIj5DaGFvdGljIEdvb2QhPC9JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9MYXlvdXRDZWxsPlxuXG4gICAgICAgICAgICAgICAgPExheW91dENlbGwgdGl0bGU9XCJUZXh0QXJlYVwiPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dEFyZWEgdGhlbWU9XCJpc2xhbmRzXCIgc2l6ZT1cImxcIiBwbGFjZWhvbGRlcj1cIldyaXRlIGEgcmV2aWV3Li4uXCIvPlxuICAgICAgICAgICAgICAgIDwvTGF5b3V0Q2VsbD5cblxuICAgICAgICAgICAgICAgIDxMYXlvdXRDZWxsIHRpdGxlPVwiTW9kYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lPVwiaXNsYW5kc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgbW9kYWxWaXNpYmxlOiB0cnVlIH0pfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBPcGVuIHlvdXIgbWluZFxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwtc2hvd2Nhc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU9XCJpc2xhbmRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUubW9kYWxWaXNpYmxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25SZXF1ZXN0SGlkZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG1vZGFsVmlzaWJsZTogZmFsc2UgfSl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPllvdXIgbWluZCB3YXMgb3BlbmVkITwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKENsaWNrIG91dHNpZGUgdGhlIGJveCB0byBjbG9zZSlcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICAgICAgICA8L0xheW91dENlbGw+XG5cbiAgICAgICAgICAgICAgICA8TGF5b3V0Q2VsbCB0aXRsZT1cIlNwaW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGlubmVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgdGhlbWU9XCJpc2xhbmRzXCIgc2l6ZT1cInhzXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgdGhlbWU9XCJpc2xhbmRzXCIgc2l6ZT1cInNcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciB0aGVtZT1cImlzbGFuZHNcIiBzaXplPVwibVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIHRoZW1lPVwiaXNsYW5kc1wiIHNpemU9XCJsXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgdGhlbWU9XCJpc2xhbmRzXCIgc2l6ZT1cInhsXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0xheW91dENlbGw+XG5cbiAgICAgICAgICAgICAgICA8TGF5b3V0Q2VsbCB0aXRsZT1cIlByb2dyZXNzQmFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxQcm9ncmVzc0JhckV4YW1wbGUgLz5cbiAgICAgICAgICAgICAgICA8L0xheW91dENlbGw+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNsYXNzIFByb2dyZXNzQmFyRXhhbXBsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwcm9ncmVzc0FjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICBwcm9ncmVzc1ZhbHVlOiAzMCxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShfLCB7IHByb2dyZXNzQWN0aXZlIH0pIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucHJvZ3Jlc3NBY3RpdmUgIT09IHByb2dyZXNzQWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0UHJvZ3Jlc3MoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0UHJvZ3Jlc3MoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5wcm9ncmVzc0FjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gdGhpcy5zdGF0ZS5wcm9ncmVzc1ZhbHVlICsgMTtcbiAgICAgICAgaWYgKG5ld1ZhbHVlID4gMTAwKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2dyZXNzVmFsdWU6IG5ld1ZhbHVlIH0pO1xuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLnN0YXJ0UHJvZ3Jlc3MoKSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHByb2dyZXNzQWN0aXZlIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzYmFyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3dpdGNoLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIHRoZW1lPVwiaXNsYW5kc1wiXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzXCJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17cHJvZ3Jlc3NBY3RpdmV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBwcm9ncmVzc0FjdGl2ZTogIXByb2dyZXNzQWN0aXZlIH0pfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgU3RhcnRcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8UHJvZ3Jlc3NCYXIgdGhlbWU9XCJpc2xhbmRzXCIgdmFsdWU9e3RoaXMuc3RhdGUucHJvZ3Jlc3NWYWx1ZX0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChTaG93Y2FzZSksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHBzaGVsbCcpKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaW5kZXguanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9zZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpO1xuXG52YXIgX3NldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NldFByb3RvdHlwZU9mKTtcblxudmFyIF9jcmVhdGUgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvY3JlYXRlXCIpO1xuXG52YXIgX2NyZWF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGUpO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgKHR5cGVvZiBzdXBlckNsYXNzID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShzdXBlckNsYXNzKSkpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gKDAsIF9jcmVhdGUyLmRlZmF1bHQpKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQgPyAoMCwgX3NldFByb3RvdHlwZU9mMi5kZWZhdWx0KShzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICgodHlwZW9mIGNhbGwgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKGNhbGwpKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanNcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgQ29tcG9uZW50ID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShDb21wb25lbnQsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gQ29tcG9uZW50KCkge1xuICAgICAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBDb21wb25lbnQpO1xuICAgICAgICByZXR1cm4gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShDb21wb25lbnQpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIHJldHVybiBDb21wb25lbnQ7XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5Db21wb25lbnQud3JhcCA9IGZ1bmN0aW9uIChjaGlsZHJlbiwgd3JhcHBlcikge1xuICAgIHZhciB3cmFwcGVkID0gW107XG5cbiAgICB2YXIgY2h1bmsgPSBudWxsO1xuICAgIF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQsIGkpIHtcbiAgICAgICAgaWYgKENvbXBvbmVudC5pcyhjaGlsZCwgQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgaWYgKGNodW5rKSB7XG4gICAgICAgICAgICAgICAgd3JhcHBlZC5wdXNoKHdyYXBwZXIoY2h1bmspKTtcbiAgICAgICAgICAgICAgICBjaHVuayA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hpbGQua2V5KSB7XG4gICAgICAgICAgICAgICAgd3JhcHBlZC5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRklYTUUobmFycW9AKTogaGFkIHRvIGFkZCBga2V5YCBpbiB0aGUgcnVudGltZSwgYWZ0ZXIgaHR0cHM6Ly9naXRodWIuY29tL25hcnFvL3JlYWN0LWlzbGFuZHMvcHVsbC80NlxuICAgICAgICAgICAgICAgIHdyYXBwZWQucHVzaChfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLCB7IGtleTogJ3dyYXBwZWRDaGlsZCcgKyBpIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjaHVuaykge1xuICAgICAgICAgICAgY2h1bmsucHVzaChjaGlsZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaHVuayA9IFtjaGlsZF07XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoY2h1bmspIHtcbiAgICAgICAgd3JhcHBlZC5wdXNoKHdyYXBwZXIoY2h1bmspKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JhcHBlZDtcbn07XG5cbkNvbXBvbmVudC50ZXh0VmFsdWUgPSBmdW5jdGlvbiAoY29tcG9uZW50KSB7XG4gICAgdmFyIHRleHQgPSAnJztcbiAgICBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4uZm9yRWFjaChjb21wb25lbnQucHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGV4dCArPSBjaGlsZDtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0ZXh0O1xufTtcblxuQ29tcG9uZW50LmlzID0gZnVuY3Rpb24gKG9iaiwgY3Rvcikge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuaXNWYWxpZEVsZW1lbnQob2JqKSAmJiAob2JqLnR5cGUgPT09IGN0b3IgfHwgb2JqLnR5cGUucHJvdG90eXBlIGluc3RhbmNlb2YgY3Rvcik7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBDb21wb25lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vcmVhY3QtaXNsYW5kcy9jb21wb25lbnRzL0NvbXBvbmVudC9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvYXNzaWduXCIpO1xuXG52YXIgX2Fzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NpZ24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfYXNzaWduMi5kZWZhdWx0IHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanNcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanNcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qc1xuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcbiAqKiBtb2R1bGUgaWQgPSAyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgICAgaWYodGhpcyBpbnN0YW5jZW9mIEMpe1xuICAgICAgICAgIHN3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZihJU19QUk9UTyl7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSloaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanNcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciBzdG9yZSAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgU3ltYm9sICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbFxuICAsIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qc1xuICoqIG1vZHVsZSBpZCA9IDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbnZhciBfQ29tcG9uZW50MiA9IHJlcXVpcmUoJy4uL0NvbXBvbmVudCcpO1xuXG52YXIgX0NvbXBvbmVudDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db21wb25lbnQyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGRpZFdhcm5Gb2N1c0NoYW5nZWRGb2N1c2VkID0gZmFsc2U7XG5cbnZhciBDb250cm9sID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShDb250cm9sLCBfQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIENvbnRyb2wocHJvcHMpIHtcbiAgICAgICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgQ29udHJvbCk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShDb250cm9sKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBmb2N1c2VkOiAhcHJvcHMuZGlzYWJsZWQgJiYgcHJvcHMuZm9jdXNlZFxuICAgICAgICB9O1xuXG4gICAgICAgIF90aGlzLl9tb3VzZVByZXNzZWQgPSBmYWxzZTtcblxuICAgICAgICBfdGhpcy5vbk1vdXNlRG93biA9IF90aGlzLm9uTW91c2VEb3duLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5vbk1vdXNlVXAgPSBfdGhpcy5vbk1vdXNlVXAuYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLm9uTW91c2VFbnRlciA9IF90aGlzLm9uTW91c2VFbnRlci5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMub25Nb3VzZUxlYXZlID0gX3RoaXMub25Nb3VzZUxlYXZlLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5vbkZvY3VzID0gX3RoaXMub25Gb2N1cy5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMub25CbHVyID0gX3RoaXMub25CbHVyLmJpbmQoX3RoaXMpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoQ29udHJvbCwgW3tcbiAgICAgICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5mb2N1c2VkICE9PSB1bmRlZmluZWQgJiYgdGhpcy5wcm9wcy5vbkZvY3VzQ2hhbmdlID09PSB1bmRlZmluZWQgJiYgIWRpZFdhcm5Gb2N1c0NoYW5nZWRGb2N1c2VkKSB7XG4gICAgICAgICAgICAgICAgZmFsc2UgPyAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKGZhbHNlLCAnQSBDb250cm9sIGhhcyBgZm9jdXNlZGAgcHJvcCwgYnV0IGRvZXNuXFwndCBoYXZlIGBvbkZvY3VzQ2hhbmdlYCBsaXN0ZW5lci4gJyArICdUaGlzIG1heSBsZWFkIHRvIHVud2FudGVkIGJlaGF2aW91ciwgd2hlbiBjb21wb25lbnQga2VwdCBiZWluZyBmb2N1c2VkIGFmdGVyICcgKyAncmUtcmVuZGVyaW5nIG9mIHRoZSB0b3AgY29tcG9uZW50LicpIDogdm9pZCAwO1xuICAgICAgICAgICAgICAgIGRpZFdhcm5Gb2N1c0NoYW5nZWRGb2N1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmZvY3VzZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudFdpbGxHYWluRm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICAgICAgaWYgKG5leHRQcm9wcy5kaXNhYmxlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkOiBmYWxzZSB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV4dFByb3BzLmZvY3VzZWQgIT09IHRoaXMuc3RhdGUuZm9jdXNlZCAmJiBuZXh0UHJvcHMuZm9jdXNlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkOiBuZXh0UHJvcHMuZm9jdXNlZCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50RGlkVXBkYXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmZvY3VzZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudFdpbGxHYWluRm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbEdhaW5Gb2N1cycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsR2FpbkZvY3VzKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVmcy5jb250cm9sKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZzLmNvbnRyb2wuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0Q29udHJvbEhhbmRsZXJzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldENvbnRyb2xIYW5kbGVycygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgb25Nb3VzZURvd246IHRoaXMub25Nb3VzZURvd24sXG4gICAgICAgICAgICAgICAgb25Nb3VzZVVwOiB0aGlzLm9uTW91c2VVcCxcbiAgICAgICAgICAgICAgICBvbkZvY3VzOiB0aGlzLm9uRm9jdXMsXG4gICAgICAgICAgICAgICAgb25CbHVyOiB0aGlzLm9uQmx1cixcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI6IHRoaXMub25Nb3VzZUVudGVyLFxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZTogdGhpcy5vbk1vdXNlTGVhdmVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2Rpc3BhdGNoRm9jdXNDaGFuZ2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGlzcGF0Y2hGb2N1c0NoYW5nZShmb2N1c2VkKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMub25Gb2N1c0NoYW5nZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25Gb2N1c0NoYW5nZShmb2N1c2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGlzcGF0Y2hIb3ZlckNoYW5nZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNwYXRjaEhvdmVyQ2hhbmdlKGhvdmVyZWQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vbkhvdmVyQ2hhbmdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkhvdmVyQ2hhbmdlKGhvdmVyZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvbk1vdXNlRW50ZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25Nb3VzZUVudGVyKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhvdmVyZWQ6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEhvdmVyQ2hhbmdlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvbk1vdXNlTGVhdmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25Nb3VzZUxlYXZlKCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhvdmVyZWQ6IGZhbHNlIH0pO1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEhvdmVyQ2hhbmdlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb25Nb3VzZURvd24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25Nb3VzZURvd24oKSB7XG4gICAgICAgICAgICB0aGlzLl9tb3VzZVByZXNzZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvbk1vdXNlVXAnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25Nb3VzZVVwKCkge1xuICAgICAgICAgICAgdGhpcy5fbW91c2VQcmVzc2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uRm9jdXMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25Gb2N1cygpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHZhciBmb2N1c2VkID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIC8vIGlmIGZvY3VzIHdhc24ndCBzZXQgYnkgbW91c2Ugc2V0IGZvY3VzZWQgc3RhdGUgdG8gXCJoYXJkXCJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX21vdXNlUHJlc3NlZCkge1xuICAgICAgICAgICAgICAgICAgICBmb2N1c2VkID0gJ2hhcmQnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvY3VzZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZDogZm9jdXNlZCB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRm9jdXNDaGFuZ2UoZm9jdXNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uQmx1cicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbkJsdXIoKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZDogZmFsc2UgfSk7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRm9jdXNDaGFuZ2UoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBDb250cm9sO1xufShfQ29tcG9uZW50My5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQ29udHJvbDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9yZWFjdC1pc2xhbmRzL2NvbXBvbmVudHMvQ29udHJvbC9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcclxudmFyICRrZXlzICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxyXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XHJcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcclxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuICoqIG1vZHVsZSBpZCA9IDM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzXG4gKiogbW9kdWxlIGlkID0gNDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4gKiogbW9kdWxlIGlkID0gNDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9nZXQyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2dldCcpO1xuXG52YXIgX2dldDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXQyKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfQ29tcG9uZW50ID0gcmVxdWlyZSgnLi4vQ29tcG9uZW50Jyk7XG5cbnZhciBfQ29tcG9uZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbXBvbmVudCk7XG5cbnZhciBfQ29udHJvbDIgPSByZXF1aXJlKCcuLi9Db250cm9sJyk7XG5cbnZhciBfQ29udHJvbDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db250cm9sMik7XG5cbnZhciBfcHJlc3NhYmxlID0gcmVxdWlyZSgnLi4vcHJlc3NhYmxlJyk7XG5cbnZhciBfcHJlc3NhYmxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZXNzYWJsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBCdXR0b24gPSBmdW5jdGlvbiAoX0NvbnRyb2wpIHtcbiAgICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShCdXR0b24sIF9Db250cm9sKTtcblxuICAgIGZ1bmN0aW9uIEJ1dHRvbigpIHtcbiAgICAgICAgdmFyIF9PYmplY3QkZ2V0UHJvdG90eXBlTztcblxuICAgICAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBCdXR0b24pO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoX09iamVjdCRnZXRQcm90b3R5cGVPID0gKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoQnV0dG9uKSkuY2FsbC5hcHBseShfT2JqZWN0JGdldFByb3RvdHlwZU8sIFt0aGlzXS5jb25jYXQoYXJncykpKTtcblxuICAgICAgICBfdGhpcy5fd3JhcHBlZENoaWxkcmVuID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIC8qKiBAb3ZlcnJpZGUgKi9cblxuXG4gICAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoQnV0dG9uLCBbe1xuICAgICAgICBrZXk6ICdjb21wb25lbnRXaWxsVXBkYXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgICAgIGlmICgoMCwgX2dldDMuZGVmYXVsdCkoKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoQnV0dG9uLnByb3RvdHlwZSksICdjb21wb25lbnRXaWxsVXBkYXRlJywgdGhpcykpIHtcbiAgICAgICAgICAgICAgICAoMCwgX2dldDMuZGVmYXVsdCkoKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoQnV0dG9uLnByb3RvdHlwZSksICdjb21wb25lbnRXaWxsVXBkYXRlJywgdGhpcykuY2FsbCh0aGlzLCBuZXh0UHJvcHMsIG5leHRTdGF0ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmNoaWxkcmVuICE9PSBuZXh0UHJvcHMuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl93cmFwcGVkQ2hpbGRyZW4gPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl93cmFwcGVkQ2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl93cmFwcGVkQ2hpbGRyZW4gPSBfQ29tcG9uZW50Mi5kZWZhdWx0LndyYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5PVEU6IHRoaXMgYGtleWAgaXMgdG8gaGFybW9uaXplIHRoZSBvbmUgd2UgaGF2ZSBpbiBgQ29tcG9uZW50LndyYXAoKWBcbiAgICAgICAgICAgICAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ3dyYXBwZWRUZXh0JywgY2xhc3NOYW1lOiAnYnV0dG9uX190ZXh0JyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnR5cGUgPT09ICdsaW5rJykge1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSB0aGlzLnByb3BzLmRpc2FibGVkID8gbnVsbCA6IHRoaXMucHJvcHMudXJsO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnYScsXG4gICAgICAgICAgICAgICAgICAgICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoeyBjbGFzc05hbWU6IHRoaXMuY2xhc3NOYW1lKCkgfSwgdGhpcy5nZXRDb250cm9sSGFuZGxlcnMoKSwgeyByZWY6ICdjb250cm9sJywgcm9sZTogJ2xpbmsnLCBocmVmOiB1cmwgfSksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dyYXBwZWRDaGlsZHJlblxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmNsYXNzTmFtZSgpXG4gICAgICAgICAgICAgICAgICAgIH0sIHRoaXMuZ2V0Q29udHJvbEhhbmRsZXJzKCksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogJ2NvbnRyb2wnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogdGhpcy5wcm9wcy50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5wcm9wcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRoaXMucHJvcHMuZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dyYXBwZWRDaGlsZHJlblxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NsYXNzTmFtZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbGFzc05hbWUoKSB7XG4gICAgICAgICAgICB2YXIgY2xhc3NOYW1lID0gJ2J1dHRvbic7XG5cbiAgICAgICAgICAgIHZhciB0aGVtZSA9IHRoaXMucHJvcHMudGhlbWUgfHwgdGhpcy5jb250ZXh0LnRoZW1lO1xuICAgICAgICAgICAgaWYgKHRoZW1lKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgYnV0dG9uX3RoZW1lXycgKyB0aGVtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNpemUpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gJyBidXR0b25fc2l6ZV8nICsgdGhpcy5wcm9wcy5zaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMudHlwZSkge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnIGJ1dHRvbl90eXBlXycgKyB0aGlzLnByb3BzLnR5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy52aWV3KSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgYnV0dG9uX3ZpZXdfJyArIHRoaXMucHJvcHMudmlldztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgYnV0dG9uX2Rpc2FibGVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmhvdmVyZWQpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gJyBidXR0b25faG92ZXJlZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5wcmVzc2VkKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgYnV0dG9uX3ByZXNzZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZm9jdXNlZCA9PT0gJ2hhcmQnKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgYnV0dG9uX2ZvY3VzZWQgYnV0dG9uX2ZvY3VzZWQtaGFyZCc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuZm9jdXNlZCkge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnIGJ1dHRvbl9mb2N1c2VkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gJyBidXR0b25fY2hlY2tlZCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnICcgKyB0aGlzLnByb3BzLmNsYXNzTmFtZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gQnV0dG9uO1xufShfQ29udHJvbDMuZGVmYXVsdCk7XG5cbkJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gICAgdGhlbWU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNpemU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMub25lT2YoWydzJywgJ20nLCAnbCcsICd4bCddKSxcbiAgICB0eXBlOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNsaWNrOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmZ1bmNcbn07XG5cbkJ1dHRvbi5jb250ZXh0VHlwZXMgPSB7XG4gICAgdGhlbWU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSAoMCwgX3ByZXNzYWJsZTIuZGVmYXVsdCkoQnV0dG9uKTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9yZWFjdC1pc2xhbmRzL2NvbXBvbmVudHMvQnV0dG9uL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2l0ZXJhdG9yID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yXCIpO1xuXG52YXIgX2l0ZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2l0ZXJhdG9yKTtcblxudmFyIF9zeW1ib2wgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2xcIik7XG5cbnZhciBfc3ltYm9sMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N5bWJvbCk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgX2l0ZXJhdG9yMi5kZWZhdWx0ID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YoX2l0ZXJhdG9yMi5kZWZhdWx0KSA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanNcbiAqKiBtb2R1bGUgaWQgPSA1OFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanNcbiAqKiBtb2R1bGUgaWQgPSA1OVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xyXG5tb2R1bGUuZXhwb3J0cyA9IChcclxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xyXG4pLnNwbGl0KCcsJyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qc1xuICoqIG1vZHVsZSBpZCA9IDYwXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qc1xuICoqIG1vZHVsZSBpZCA9IDYxXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qc1xuICoqIG1vZHVsZSBpZCA9IDYyXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcclxudmFyIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcclxuICAsIGRQcyAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpXHJcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKVxyXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcclxuICAsIEVtcHR5ICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxyXG4gICwgUFJPVE9UWVBFICAgPSAncHJvdG90eXBlJztcclxuXHJcbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcclxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbigpe1xyXG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXHJcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJylcclxuICAgICwgaSAgICAgID0gZW51bUJ1Z0tleXMubGVuZ3RoXHJcbiAgICAsIGd0ICAgICA9ICc+J1xyXG4gICAgLCBpZnJhbWVEb2N1bWVudDtcclxuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcclxuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXHJcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcclxuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XHJcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcclxuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XHJcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUoJzxzY3JpcHQ+ZG9jdW1lbnQuRj1PYmplY3Q8L3NjcmlwdCcgKyBndCk7XHJcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcclxuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcclxuICB3aGlsZShpLS0pZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XHJcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcyl7XHJcbiAgdmFyIHJlc3VsdDtcclxuICBpZihPICE9PSBudWxsKXtcclxuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcclxuICAgIHJlc3VsdCA9IG5ldyBFbXB0eTtcclxuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xyXG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxyXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XHJcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcclxuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XHJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDYzXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJ2YXIgcElFICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcclxuICAsIGNyZWF0ZURlc2MgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXHJcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxyXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxyXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxyXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXHJcbiAgLCBnT1BEICAgICAgICAgICA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XHJcblxyXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKXtcclxuICBPID0gdG9JT2JqZWN0KE8pO1xyXG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcclxuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xyXG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XHJcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxyXG4gIGlmKGhhcyhPLCBQKSlyZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XHJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanNcbiAqKiBtb2R1bGUgaWQgPSA2NFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qc1xuICoqIG1vZHVsZSBpZCA9IDY1XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpZGVmKGl0LCBUQUcsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWd9KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanNcbiAqKiBtb2R1bGUgaWQgPSA2NlxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJylcclxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XHJcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcclxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzXG4gKiogbW9kdWxlIGlkID0gNjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzXG4gKiogbW9kdWxlIGlkID0gNjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gNjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSA3MFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzXG4gKiogbW9kdWxlIGlkID0gNzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXHJcbiAgLCBjb3JlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxyXG4gICwgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcclxuICAsIHdrc0V4dCAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpXHJcbiAgLCBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XHJcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcclxuICBpZihuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKWRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHt2YWx1ZTogd2tzRXh0LmYobmFtZSl9KTtcclxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzXG4gKiogbW9kdWxlIGlkID0gNzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanNcbiAqKiBtb2R1bGUgaWQgPSA3M1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX0NvbXBvbmVudDIgPSByZXF1aXJlKCcuLi9Db21wb25lbnQnKTtcblxudmFyIF9Db21wb25lbnQzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29tcG9uZW50Mik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBHcm91cCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoR3JvdXAsIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gR3JvdXAoKSB7XG4gICAgICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIEdyb3VwKTtcbiAgICAgICAgcmV0dXJuICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoR3JvdXApLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIHJldHVybiBHcm91cDtcbn0oX0NvbXBvbmVudDMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEdyb3VwO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L3JlYWN0LWlzbGFuZHMvY29tcG9uZW50cy9Hcm91cC9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDc0XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfQ29tcG9uZW50MiA9IHJlcXVpcmUoJy4uL0NvbXBvbmVudCcpO1xuXG52YXIgX0NvbXBvbmVudDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db21wb25lbnQyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIEl0ZW0gPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKEl0ZW0sIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gSXRlbSgpIHtcbiAgICAgICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgSXRlbSk7XG4gICAgICAgIHJldHVybiAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKEl0ZW0pLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIHJldHVybiBJdGVtO1xufShfQ29tcG9uZW50My5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gSXRlbTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9yZWFjdC1pc2xhbmRzL2NvbXBvbmVudHMvSXRlbS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDc1XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mXCIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpO1xuXG52YXIgX2dldE93blByb3BlcnR5RGVzY3JpcHRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiBnZXQob2JqZWN0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICB2YXIgZGVzYyA9ICgwLCBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yMi5kZWZhdWx0KShvYmplY3QsIHByb3BlcnR5KTtcblxuICBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHBhcmVudCA9ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKG9iamVjdCk7XG5cbiAgICBpZiAocGFyZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZ2V0KHBhcmVudCwgcHJvcGVydHksIHJlY2VpdmVyKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoXCJ2YWx1ZVwiIGluIGRlc2MpIHtcbiAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7XG5cbiAgICBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTtcbiAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2dldC5qc1xuICoqIG1vZHVsZSBpZCA9IDk1XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qc1xuICoqIG1vZHVsZSBpZCA9IDk2XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qc1xuICoqIG1vZHVsZSBpZCA9IDk3XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDk4XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XHJcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xyXG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuICoqIG1vZHVsZSBpZCA9IDk5XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMTAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSXRlcmF0b3JzICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsICRpdGVyQ3JlYXRlICAgID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpXG4gICwgSVRFUkFUT1IgICAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEJVR0dZICAgICAgICAgID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpIC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgLCBGRl9JVEVSQVRPUiAgICA9ICdAQGl0ZXJhdG9yJ1xuICAsIEtFWVMgICAgICAgICAgID0gJ2tleXMnXG4gICwgVkFMVUVTICAgICAgICAgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpe1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbihraW5kKXtcbiAgICBpZighQlVHR1kgJiYga2luZCBpbiBwcm90bylyZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoKGtpbmQpe1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgICAgICAgID0gTkFNRSArICcgSXRlcmF0b3InXG4gICAgLCBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVNcbiAgICAsIFZBTFVFU19CVUcgPSBmYWxzZVxuICAgICwgcHJvdG8gICAgICA9IEJhc2UucHJvdG90eXBlXG4gICAgLCAkbmF0aXZlICAgID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdXG4gICAgLCAkZGVmYXVsdCAgID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVClcbiAgICAsICRlbnRyaWVzICAgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkXG4gICAgLCAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZVxuICAgICwgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZigkYW55TmF0aXZlKXtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSkpO1xuICAgIGlmKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKXtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZighTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUyl7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpe1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gID0gcmV0dXJuVGhpcztcbiAgaWYoREVGQVVMVCl7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogIERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogICAgSVNfU0VUICAgICA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmKEZPUkNFRClmb3Ioa2V5IGluIG1ldGhvZHMpe1xuICAgICAgaWYoIShrZXkgaW4gcHJvdG8pKXJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcclxudmFyICRrZXlzICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXHJcbiAgLCBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xyXG5cclxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKXtcclxuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XHJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanNcbiAqKiBtb2R1bGUgaWQgPSAxMDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXHJcbnZhciBoYXMgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXHJcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXHJcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxyXG4gICwgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24oTyl7XHJcbiAgTyA9IHRvT2JqZWN0KE8pO1xyXG4gIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xyXG4gIGlmKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3Ipe1xyXG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xyXG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XHJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qc1xuICoqIG1vZHVsZSBpZCA9IDEwM1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXHJcbiAgLCB0b0lPYmplY3QgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcclxuICAsIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpXHJcbiAgLCBJRV9QUk9UTyAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgbmFtZXMpe1xyXG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxyXG4gICAgLCBpICAgICAgPSAwXHJcbiAgICAsIHJlc3VsdCA9IFtdXHJcbiAgICAsIGtleTtcclxuICBmb3Ioa2V5IGluIE8paWYoa2V5ICE9IElFX1BST1RPKWhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XHJcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xyXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcclxuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGNvcmUgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBmYWlscyAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBleGVjKXtcbiAgdmFyIGZuICA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXVxuICAgICwgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKXsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qc1xuICoqIG1vZHVsZSBpZCA9IDEwNVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxudmFyIF9Db21wb25lbnQyID0gcmVxdWlyZSgnLi4vQ29tcG9uZW50Jyk7XG5cbnZhciBfQ29tcG9uZW50MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbXBvbmVudDIpO1xuXG52YXIgX0l0ZW0gPSByZXF1aXJlKCcuLi9JdGVtJyk7XG5cbnZhciBfSXRlbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9JdGVtKTtcblxudmFyIF9Hcm91cCA9IHJlcXVpcmUoJy4uL0dyb3VwJyk7XG5cbnZhciBfR3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfR3JvdXApO1xuXG52YXIgX01lbnVJdGVtID0gcmVxdWlyZSgnLi9NZW51SXRlbScpO1xuXG52YXIgX01lbnVJdGVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01lbnVJdGVtKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gYXBwZW5kSXRlbVRvQ2FjaGUoaXRlbSwgY2FjaGUpIHtcbiAgICBpZiAoX0NvbXBvbmVudDMuZGVmYXVsdC5pcyhpdGVtLCBfSXRlbTIuZGVmYXVsdCkpIHtcbiAgICAgICAgY2FjaGUucHVzaChpdGVtKTtcbiAgICB9XG59XG5cbnZhciBNZW51ID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShNZW51LCBfQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIE1lbnUocHJvcHMpIHtcbiAgICAgICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgTWVudSk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShNZW51KS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgICAgX3RoaXMuc3RhdGUgPSAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBfdGhpcy5zdGF0ZSwge1xuICAgICAgICAgICAgdmFsdWU6IF90aGlzLl92YWxpZGF0ZVZhbHVlKF90aGlzLnByb3BzLnZhbHVlKSxcbiAgICAgICAgICAgIGhvdmVyZWRJbmRleDogbnVsbFxuICAgICAgICB9KTtcblxuICAgICAgICBfdGhpcy5fY2FjaGVkQ2hpbGRyZW4gPSBudWxsO1xuICAgICAgICBfdGhpcy5faG92ZXJlZEl0ZW1JbmRleCA9IG51bGw7XG4gICAgICAgIF90aGlzLl9zaG91bGRTY3JvbGxUb0l0ZW0gPSBmYWxzZTtcblxuICAgICAgICBfdGhpcy5vbk1vdXNlVXAgPSBfdGhpcy5vbk1vdXNlVXAuYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLm9uTW91c2VEb3duID0gX3RoaXMub25Nb3VzZURvd24uYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLm9uRm9jdXMgPSBfdGhpcy5vbkZvY3VzLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5vbkJsdXIgPSBfdGhpcy5vbkJsdXIuYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLm9uS2V5RG93biA9IF90aGlzLm9uS2V5RG93bi5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMub25JdGVtQ2xpY2sgPSBfdGhpcy5vbkl0ZW1DbGljay5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMub25JdGVtSG92ZXIgPSBfdGhpcy5vbkl0ZW1Ib3Zlci5iaW5kKF90aGlzKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKE1lbnUsIFt7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxNb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgICAgICAvLyAg0JXRgdC70Lgg0LzRiyDQutCw0Lot0YLQviDQv9C+0LzQtdC90Y/Qu9C4IHZhbHVlICjQstC90YPRgtGA0LggX3ZhbGlkVmFsdWUpLFxuICAgICAgICAgICAgLy8gINGC0L4g0L3Rg9C20L3QviDRgdC+0L7QsdGJ0LjRgtGMINC/0YDQviDRjdGC0L4g0L3QsNCy0LXRgNGFLlxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMudmFsdWUgIT09IHRoaXMuc3RhdGUudmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMuc3RhdGUudmFsdWUsIHRoaXMucHJvcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmZvY3VzZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudFdpbGxHYWluRm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFRvTWVudUl0ZW0oKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICAgICAgaWYgKG5leHRQcm9wcy5jaGlsZHJlbiAhPT0gdGhpcy5wcm9wcy5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlZENoaWxkcmVuID0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5leHRQcm9wcy52YWx1ZSAhPT0gdGhpcy5wcm9wcy52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogdGhpcy5fdmFsaWRhdGVWYWx1ZShuZXh0UHJvcHMudmFsdWUpIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgICAgICAgaWYgKHByZXZQcm9wcy5mb2N1c2VkICYmICF0aGlzLnByb3BzLmZvY3VzZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudFdpbGxMb3N0Rm9jdXMoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXByZXZQcm9wcy5mb2N1c2VkICYmIHRoaXMucHJvcHMuZm9jdXNlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50V2lsbEdhaW5Gb2N1cygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5fc2hvdWxkU2Nyb2xsVG9JdGVtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvdWxkU2Nyb2xsVG9JdGVtID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVG9NZW51SXRlbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlZENoaWxkcmVuID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbEdhaW5Gb2N1cycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsR2FpbkZvY3VzKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVmcy5jb250cm9sKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZzLmNvbnRyb2wuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbExvc3RGb2N1cycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTG9zdEZvY3VzKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVmcy5jb250cm9sKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZzLmNvbnRyb2wuYmx1cigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdfZ2V0Q2hpbGRyZW4nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2dldENoaWxkcmVuKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5fY2FjaGVkQ2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZWRDaGlsZHJlbiA9IFtdO1xuXG4gICAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLmZvckVhY2godGhpcy5wcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfQ29tcG9uZW50My5kZWZhdWx0LmlzKGNoaWxkLCBfR3JvdXAyLmRlZmF1bHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZC5wcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXBwZW5kSXRlbVRvQ2FjaGUoaXRlbSwgX3RoaXMyLl9jYWNoZWRDaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZEl0ZW1Ub0NhY2hlKGNoaWxkLCBfdGhpczIuX2NhY2hlZENoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVkQ2hpbGRyZW47XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ19nZXRGaXJzdEVuYWJsZWRDaGlsZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfZ2V0Rmlyc3RFbmFibGVkQ2hpbGQoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuX2dldENoaWxkcmVuKCk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIGlmICghaXRlbS5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdfZ2V0Rmlyc3RFbmFibGVkQ2hpbGRJbmRleCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfZ2V0Rmlyc3RFbmFibGVkQ2hpbGRJbmRleCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXRDaGlsZHJlbigpLmluZGV4T2YodGhpcy5fZ2V0Rmlyc3RFbmFibGVkQ2hpbGQoKSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ192YWxpZGF0ZVZhbHVlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF92YWxpZGF0ZVZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSB2b2lkIDA7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUgPSBbXTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IFt2YWx1ZV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBmaWx0ZXJlZFZhbHVlID0gdGhpcy5fZ2V0Q2hpbGRyZW4oKS5yZWR1Y2UoZnVuY3Rpb24gKHJlcywgaXRlbSkge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtVmFsdWUgPSBpdGVtLnByb3BzLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLmluZGV4T2YoaXRlbVZhbHVlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2goaXRlbVZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgfSwgW10pO1xuXG4gICAgICAgICAgICBpZiAoZmlsdGVyZWRWYWx1ZS5sZW5ndGggIT09IG5ld1ZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gZmlsdGVyZWRWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMubW9kZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZpcnN0Q2hpbGQgPSB0aGlzLl9nZXRGaXJzdEVuYWJsZWRDaGlsZCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gZmlyc3RDaGlsZCA9PT0gbnVsbCA/IFtdIDogW2ZpcnN0Q2hpbGQucHJvcHMudmFsdWVdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gW25ld1ZhbHVlWzBdXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMubW9kZSA9PT0gJ3JhZGlvLWNoZWNrJyAmJiBuZXdWYWx1ZS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUgPSBbbmV3VmFsdWVbMF1dO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAg0KDQsNC3INGD0LYg0L3QsNGH0LDQuyDRg9C/0LDRgNGL0LLQsNGC0YzRgdGPLCDRgtC+INC+0YHRgtCw0L3QvtCy0LjRgtGM0YHRjyDRg9C20LUg0YHQu9C+0LbQvdC+LlxuICAgICAgICAgICAgLy8gINCi0LXQv9C10YDRjCDQsiBuZXdWYWx1ZTpcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAqINCc0LDRgdGB0LjQsjtcbiAgICAgICAgICAgIC8vICAgICog0JIg0LrQvtGC0L7RgNC+0Lwg0LfQvdCw0YfQtdC90LjRjyDQuNC3INC/0LXRgNC10LTQsNC90L3QvtCz0L4gdmFsdWUgKNC80LDRgdGB0LjQstCwINC40LvQuCDQv9GA0L7RgdGC0L4g0LfQvdCw0YfQtdC90LjRjyk7XG4gICAgICAgICAgICAvLyAgICAqINCYINC60L7RgtC+0YDRi9C1INC/0YDQuCDRjdGC0L7QvCDQtdGB0YLRjCDQsiB2YWx1ZXMg0YHQsNC80L7Qs9C+INC80LXQvdGOLlxuICAgICAgICAgICAgLy8gICAgKiDQn9GA0Lgg0Y3RgtC+0LwsINC10YHQu9C4INCyIHZhbHVlINCx0YvQuyDQvNCw0YHRgdC40LIsINCyINC60L7RgtC+0YDQvtC8INCx0YvQu9C4INGC0L7Qu9GM0LrQviDQstCw0LvQuNC00L3Ri9C1INC30L3QsNGH0LXQvdC40Y8sXG4gICAgICAgICAgICAvLyAgICAgINC/0L7QtNGF0L7QtNGP0YnQuNC1INC6INC00LDQvdC90L7QvNGDIG1vZGUsINGC0L4g0LLQtdGA0L3QtdGC0YHRjyDQuNC80LXQvdC90L4g0Y3RgtC+0YIg0LzQsNGB0YHQuNCyLlxuICAgICAgICAgICAgLy8gICAgICDQp9GC0L4g0L/QvtC30LLQvtC70LjRgiDRgdGA0LDQstC90LjRgtGMINC40YHRhdC+0LTQvdC+0LUgdmFsdWUg0YEg0LLQvtGCINGN0YLQuNC8INC90L7QstGL0LwuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gINCd0L4sINGD0LLRiywg0Y3RgtC+INGB0YDQsNCy0L3QtdC90LjQtSDQstGB0LUg0YDQsNCy0L3QviDQtNCw0YHRgiDQvdC10LLQtdGA0L3Ri9C5INGA0LXQt9GD0LvRjNGC0LDRgixcbiAgICAgICAgICAgIC8vICDQtdGB0LvQuCDQsiB2YWx1ZSDQv9C10YDQtdC00LDRgtGMINC90LUg0LzQsNGB0YHQuNCyINC40LvQuCDQvdC40YfQtdCz0L4g0L3QtSDQv9C10YDQtdC00LDRgtGMIDooXG4gICAgICAgICAgICAvLyAg0J3QviDRgtCw0Log0YPQttC1INC30LDQvNC+0YDQsNGH0LjQstCw0YLRjNGB0Y8g0L3QtSDRhdC+0YfQtdGC0YHRjy4g0J/RgNC+0YnQtSDRjdC60YHQtdC/0YjQtdC9INC60LjQvdGD0YLRjCDQvdCwINC90LXQstCw0LvQuNC00L3Ri9C5IHZhbHVlLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIHJldHVybiBuZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3Njcm9sbFRvTWVudUl0ZW0nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3Njcm9sbFRvTWVudUl0ZW0oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZWZzLmNvbnRyb2wgJiYgdGhpcy5yZWZzLmZvY3VzZWRNZW51SXRlbSkge1xuICAgICAgICAgICAgICAgIHZhciBtZW51RE9NTm9kZSA9IF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMuY29udHJvbCk7XG4gICAgICAgICAgICAgICAgdmFyIGZvY3VzZWRJdGVtRE9NTm9kZSA9IF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMuZm9jdXNlZE1lbnVJdGVtKTtcbiAgICAgICAgICAgICAgICB2YXIgbWVudVJlY3QgPSBtZW51RE9NTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICB2YXIgZm9jdXNlZFJlY3QgPSBmb2N1c2VkSXRlbURPTU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZm9jdXNlZFJlY3QuYm90dG9tID4gbWVudVJlY3QuYm90dG9tIHx8IGZvY3VzZWRSZWN0LnRvcCA8IG1lbnVSZWN0LnRvcCkge1xuICAgICAgICAgICAgICAgICAgICBtZW51RE9NTm9kZS5zY3JvbGxUb3AgPSBmb2N1c2VkSXRlbURPTU5vZGUub2Zmc2V0VG9wICsgZm9jdXNlZEl0ZW1ET01Ob2RlLmNsaWVudEhlaWdodCAtIG1lbnVET01Ob2RlLm9mZnNldFRvcCAtIG1lbnVET01Ob2RlLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgICAgIHZhciBkaXNhYmxlZCA9IF9wcm9wcy5kaXNhYmxlZDtcbiAgICAgICAgICAgIHZhciBtYXhIZWlnaHQgPSBfcHJvcHMubWF4SGVpZ2h0O1xuXG4gICAgICAgICAgICB2YXIgdGFiSW5kZXggPSBkaXNhYmxlZCA/IC0xIDogdGhpcy5wcm9wcy50YWJJbmRleDtcbiAgICAgICAgICAgIHZhciBtZW51ID0gdGhpcy5fcmVuZGVyTWVudSgpO1xuXG4gICAgICAgICAgICB2YXIgc3R5bGUgPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAobWF4SGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogbWF4SGVpZ2h0XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIHsgcmVmOiAnY29udHJvbCcsIGNsYXNzTmFtZTogdGhpcy5jbGFzc05hbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleDogdGFiSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bjogdGhpcy5vbktleURvd24sXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duOiB0aGlzLm9uTW91c2VEb3duLFxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlVXA6IHRoaXMub25Nb3VzZVVwLFxuICAgICAgICAgICAgICAgICAgICBvbkZvY3VzOiB0aGlzLm9uRm9jdXMsXG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cjogdGhpcy5vbkJsdXJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1lbnVcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ19yZW5kZXJNZW51JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9yZW5kZXJNZW51KCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBpbmRleCA9IDA7XG5cbiAgICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIGlmIChfQ29tcG9uZW50My5kZWZhdWx0LmlzKGNoaWxkLCBfSXRlbTIuZGVmYXVsdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5fcmVuZGVyTWVudUl0ZW0oY2hpbGQucHJvcHMsIGluZGV4KyspO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoX0NvbXBvbmVudDMuZGVmYXVsdC5pcyhjaGlsZCwgX0dyb3VwMi5kZWZhdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZ3JvdXBlZEl0ZW1zID0gX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLm1hcChjaGlsZC5wcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGdyb3VwQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczMuX3JlbmRlck1lbnVJdGVtKGdyb3VwQ2hpbGQucHJvcHMsIGluZGV4KyspO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMzLl9yZW5kZXJNZW51R3JvdXAoY2hpbGQucHJvcHMsIGdyb3VwZWRJdGVtcyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gIEZJWE1FOiDQmNC70Lgg0YLRg9GCINCx0YDQvtGB0LDRgtGMINC+0YjQuNCx0LrRgz9cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdfcmVuZGVyTWVudUl0ZW0nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3JlbmRlck1lbnVJdGVtKHByb3BzLCBpbmRleCkge1xuICAgICAgICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzO1xuICAgICAgICAgICAgdmFyIHRoZW1lID0gX3Byb3BzMi50aGVtZTtcbiAgICAgICAgICAgIHZhciBzaXplID0gX3Byb3BzMi5zaXplO1xuICAgICAgICAgICAgdmFyIGRpc2FibGVkID0gX3Byb3BzMi5kaXNhYmxlZDtcbiAgICAgICAgICAgIHZhciBtb2RlID0gX3Byb3BzMi5tb2RlO1xuICAgICAgICAgICAgdmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBfc3RhdGUudmFsdWU7XG4gICAgICAgICAgICB2YXIgaG92ZXJlZEluZGV4ID0gX3N0YXRlLmhvdmVyZWRJbmRleDtcblxuICAgICAgICAgICAgdmFyIGNoZWNrYWJsZSA9IEJvb2xlYW4obW9kZSk7XG4gICAgICAgICAgICB2YXIgaG92ZXJlZCA9IGluZGV4ID09PSBob3ZlcmVkSW5kZXg7XG4gICAgICAgICAgICB2YXIga2V5ID0gJ21lbnVpdGVtJyArIChwcm9wcy5pZCB8fCBpbmRleCk7XG5cbiAgICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfTWVudUl0ZW0yLmRlZmF1bHQsICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe1xuICAgICAgICAgICAgICAgIHRoZW1lOiB0aGVtZSxcbiAgICAgICAgICAgICAgICBzaXplOiBzaXplLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgICAgICAgICBob3ZlcmVkOiBob3ZlcmVkLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGNoZWNrYWJsZSAmJiB2YWx1ZS5pbmRleE9mKHByb3BzLnZhbHVlKSAhPT0gLTEsXG4gICAgICAgICAgICAgICAgcmVmOiBob3ZlcmVkID8gJ2ZvY3VzZWRNZW51SXRlbScgOiBudWxsLFxuICAgICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleFxuICAgICAgICAgICAgfSwgcHJvcHMsIHtcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiB0aGlzLm9uSXRlbUNsaWNrLFxuICAgICAgICAgICAgICAgIG9uSG92ZXI6IHRoaXMub25JdGVtSG92ZXJcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3JlbmRlck1lbnVHcm91cCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVuZGVyTWVudUdyb3VwKHByb3BzLCBjaGlsZHJlbikge1xuICAgICAgICAgICAgdmFyIHRpdGxlID0gdm9pZCAwO1xuICAgICAgICAgICAgaWYgKHByb3BzLnRpdGxlKSB7XG4gICAgICAgICAgICAgICAgdGl0bGUgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnbWVudV9fZ3JvdXAtdGl0bGUnIH0sXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnRpdGxlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnbWVudV9fZ3JvdXAnIH0sXG4gICAgICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NsYXNzTmFtZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbGFzc05hbWUoKSB7XG4gICAgICAgICAgICB2YXIgY2xhc3NOYW1lID0gJ21lbnUnO1xuXG4gICAgICAgICAgICB2YXIgdGhlbWUgPSB0aGlzLnByb3BzLnRoZW1lIHx8IHRoaXMuY29udGV4dC50aGVtZTtcbiAgICAgICAgICAgIGlmICh0aGVtZSkge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnIG1lbnVfdGhlbWVfJyArIHRoZW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc2l6ZSkge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnIG1lbnVfc2l6ZV8nICsgdGhpcy5wcm9wcy5zaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMubW9kZSkge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnIG1lbnVfbW9kZV8nICsgdGhpcy5wcm9wcy5tb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gJyBtZW51X2Rpc2FibGVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmZvY3VzZWQpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gJyBtZW51X2ZvY3VzZWQnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gJyAnICsgdGhpcy5wcm9wcy5jbGFzc05hbWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2Rpc3BhdGNoRm9jdXNDaGFuZ2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGlzcGF0Y2hGb2N1c0NoYW5nZShmb2N1c2VkKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uRm9jdXNDaGFuZ2UoZm9jdXNlZCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2Rpc3BhdGNoSXRlbUNsaWNrJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRpc3BhdGNoSXRlbUNsaWNrKGUsIGl0ZW1Qcm9wcykge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLl9nZXRDaGlsZHJlbigpW2l0ZW1Qcm9wcy5pbmRleF07XG4gICAgICAgICAgICBpZiAodHlwZW9mIGl0ZW0ucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGl0ZW0ucHJvcHMub25DbGljayhlLCBpdGVtLnByb3BzLCB0aGlzLnByb3BzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJvcHMub25JdGVtQ2xpY2soZSwgaXRlbVByb3BzKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb25JdGVtSG92ZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25JdGVtSG92ZXIoaG92ZXJlZCwgaXRlbVByb3BzKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBob3ZlcmVkSW5kZXg6IGhvdmVyZWQgPyBpdGVtUHJvcHMuaW5kZXggOiBudWxsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb25JdGVtQ2xpY2snLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25JdGVtQ2xpY2soZSwgaXRlbVByb3BzKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBpdGVtUHJvcHMuaW5kZXg7XG5cbiAgICAgICAgICAgIHRoaXMuX2hvdmVyZWRJdGVtSW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hJdGVtQ2xpY2soZSwgaXRlbVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMub25JdGVtQ2hlY2soaW5kZXgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvbk1vdXNlRG93bicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1vdXNlRG93bigpIHtcbiAgICAgICAgICAgIHRoaXMuX21vdXNlUHJlc3NlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uTW91c2VVcCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1vdXNlVXAoKSB7XG4gICAgICAgICAgICB0aGlzLl9tb3VzZVByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb25Gb2N1cycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbkZvY3VzKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkOiB0cnVlIH0pO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuX21vdXNlUHJlc3NlZCkge1xuICAgICAgICAgICAgICAgIHZhciBob3ZlcmVkSW5kZXggPSB0aGlzLl9ob3ZlcmVkSXRlbUluZGV4O1xuICAgICAgICAgICAgICAgIGlmIChob3ZlcmVkSW5kZXggPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaG92ZXJlZEluZGV4ID0gdGhpcy5fZ2V0Rmlyc3RFbmFibGVkQ2hpbGRJbmRleCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaG92ZXJlZEluZGV4ICE9PSB0aGlzLnN0YXRlLmhvdmVyZWRJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ob3ZlcmVkSXRlbUluZGV4ID0gaG92ZXJlZEluZGV4O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaG92ZXJlZEluZGV4OiBob3ZlcmVkSW5kZXggfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRm9jdXNDaGFuZ2UodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uQmx1cicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbkJsdXIoKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBmb2N1c2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBob3ZlcmVkSW5kZXg6IG51bGxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRm9jdXNDaGFuZ2UoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvbktleURvd24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25LZXlEb3duKGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVkIHx8ICF0aGlzLnN0YXRlLmZvY3VzZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0Fycm93RG93bicgfHwgZS5rZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuX2dldENoaWxkcmVuKCk7XG4gICAgICAgICAgICAgICAgdmFyIGxlbiA9IGNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBpZiAoIWxlbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIGRpciA9IGUua2V5ID09PSAnQXJyb3dEb3duJyA/IDEgOiAtMTtcbiAgICAgICAgICAgICAgICB2YXIgbmV4dEluZGV4ID0gdGhpcy5zdGF0ZS5ob3ZlcmVkSW5kZXg7XG4gICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgICBuZXh0SW5kZXggPSAobmV4dEluZGV4ICsgbGVuICsgZGlyKSAlIGxlbjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRJbmRleCA9PT0gdGhpcy5zdGF0ZS5ob3ZlcmVkSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gd2hpbGUgKGNoaWxkcmVuW25leHRJbmRleF0ucHJvcHMuZGlzYWJsZWQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG5leHRJbmRleCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ob3ZlcmVkSXRlbUluZGV4ID0gbmV4dEluZGV4O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zaG91bGRTY3JvbGxUb0l0ZW0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaG92ZXJlZEluZGV4OiBuZXh0SW5kZXggfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJyAnIHx8IGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuaG92ZXJlZEluZGV4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25JdGVtQ2xpY2soZSwgeyBpbmRleDogdGhpcy5zdGF0ZS5ob3ZlcmVkSW5kZXggfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbktleURvd24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uS2V5RG93bihlLCB0aGlzLnByb3BzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb25JdGVtQ2hlY2snLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25JdGVtQ2hlY2soaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBtb2RlID0gdGhpcy5wcm9wcy5tb2RlO1xuXG4gICAgICAgICAgICBpZiAoIW1vZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBpdGVtID0gdGhpcy5fZ2V0Q2hpbGRyZW4oKVtpbmRleF07XG4gICAgICAgICAgICB2YXIgaXRlbVZhbHVlID0gaXRlbS5wcm9wcy52YWx1ZTtcbiAgICAgICAgICAgIHZhciBtZW51VmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuICAgICAgICAgICAgdmFyIGNoZWNrZWQgPSBtZW51VmFsdWUuaW5kZXhPZihpdGVtVmFsdWUpICE9PSAtMTtcblxuICAgICAgICAgICAgdmFyIG5ld01lbnVWYWx1ZSA9IHZvaWQgMDtcbiAgICAgICAgICAgIGlmIChtb2RlID09PSAncmFkaW8nKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG5ld01lbnVWYWx1ZSA9IFtpdGVtVmFsdWVdO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAncmFkaW8tY2hlY2snKSB7XG4gICAgICAgICAgICAgICAgbmV3TWVudVZhbHVlID0gY2hlY2tlZCA/IFtdIDogW2l0ZW1WYWx1ZV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld01lbnVWYWx1ZSA9IGNoZWNrZWQgPyBtZW51VmFsdWUuZmlsdGVyKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgIT09IGl0ZW1WYWx1ZTtcbiAgICAgICAgICAgICAgICB9KSA6IG1lbnVWYWx1ZS5jb25jYXQoaXRlbVZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5ld01lbnVWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogbmV3TWVudVZhbHVlIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UobmV3TWVudVZhbHVlLCB0aGlzLnByb3BzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gTWVudTtcbn0oX0NvbXBvbmVudDMuZGVmYXVsdCk7XG5cbk1lbnUuY29udGV4dFR5cGVzID0ge1xuICAgIHRoZW1lOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuTWVudS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgbWF4SGVpZ2h0OiBudWxsLFxuICAgIHRhYkluZGV4OiAwLFxuICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSgpIHt9LFxuICAgIG9uRm9jdXNDaGFuZ2U6IGZ1bmN0aW9uIG9uRm9jdXNDaGFuZ2UoKSB7fSxcbiAgICBvbkl0ZW1DbGljazogZnVuY3Rpb24gb25JdGVtQ2xpY2soKSB7fVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTWVudTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9yZWFjdC1pc2xhbmRzL2NvbXBvbmVudHMvTWVudS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDEwN1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfQ29tcG9uZW50MiA9IHJlcXVpcmUoJy4uL0NvbXBvbmVudCcpO1xuXG52YXIgX0NvbXBvbmVudDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db21wb25lbnQyKTtcblxudmFyIF9Qb3J0YWwgPSByZXF1aXJlKCcuL1BvcnRhbCcpO1xuXG52YXIgX1BvcnRhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Qb3J0YWwpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgWklOREVYX0ZBQ1RPUiA9IDEwMDA7XG5cbnZhciB2aXNpYmxlTGF5ZXJzWkluZGV4ZXMgPSB7fTtcbnZhciB2aXNpYmxlTGF5ZXJzU3RhY2sgPSBbXTtcblxudmFyIEtFWV9FU0NBUEUgPSAyNztcblxudmFyIFJFQVNPTl9DTElDS19PVVRTSURFID0gJ2NsaWNrT3V0c2lkZSc7XG52YXIgUkVBU09OX0VTQ19LRVlfUFJFU1MgPSAnZXNjYXBlS2V5UHJlc3MnO1xuXG52YXIgT3ZlcmxheSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoT3ZlcmxheSwgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBPdmVybGF5KHByb3BzLCBjb250ZXh0KSB7XG4gICAgICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIE92ZXJsYXkpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoT3ZlcmxheSkuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkpO1xuXG4gICAgICAgIF90aGlzLnpJbmRleCA9IG51bGw7XG4gICAgICAgIF90aGlzLmlzQ2xpY2tPdXRzaWRlUHJldmVudGVkID0gbnVsbDtcbiAgICAgICAgX3RoaXMuaXNWaXNpYmxlID0gX3RoaXMuaXNWaXNpYmxlLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5wcmV2ZW50Q2xpY2tPdXRzaWRlID0gX3RoaXMucHJldmVudENsaWNrT3V0c2lkZS5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMub25MYXllckNsaWNrID0gX3RoaXMub25MYXllckNsaWNrLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5vbkRvY3VtZW50Q2xpY2sgPSBfdGhpcy5vbkRvY3VtZW50Q2xpY2suYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLm9uRG9jdW1lbnRLZXlQcmVzcyA9IF90aGlzLm9uRG9jdW1lbnRLZXlQcmVzcy5iaW5kKF90aGlzKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKE92ZXJsYXksIFt7XG4gICAgICAgIGtleTogJ2dldENoaWxkQ29udGV4dCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlzUGFyZW50TGF5ZXJWaXNpYmxlOiB0aGlzLmlzVmlzaWJsZSxcbiAgICAgICAgICAgICAgICBwcmV2ZW50UGFyZW50TGF5ZXJDbGlja091dHNpZGU6IHRoaXMucHJldmVudENsaWNrT3V0c2lkZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbE1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnZpc2libGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxheWVyV2lsbEJlY29tZVZpc2libGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbFVwZGF0ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVQYXJlbnRMYXllckhpZGUoKTtcbiAgICAgICAgICAgIC8vIE5PVEUobmFycW9AKTogZG8gdGhpcyBvbmx5IHdoZW4gdmlzaWJsZSBpcyBnb2luZyB0byBiZSBjaGFuZ2VkXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy52aXNpYmxlICE9PSBuZXh0UHJvcHMudmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGlmIChuZXh0UHJvcHMudmlzaWJsZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxheWVyV2lsbEJlY29tZVZpc2libGUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxheWVyV2lsbEJlY29tZUhpZGRlbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RIaWRlKG51bGwsIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMubGF5ZXJXaWxsQmVjb21lSGlkZGVuKCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xheWVyV2lsbEJlY29tZVZpc2libGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbGF5ZXJXaWxsQmVjb21lVmlzaWJsZSgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB2aXNpYmxlTGF5ZXJzU3RhY2sudW5zaGlmdCh0aGlzKTtcblxuICAgICAgICAgICAgdGhpcy5jYXB0dXJlWkluZGV4KCk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uRG9jdW1lbnRLZXlQcmVzcyk7XG4gICAgICAgICAgICAvLyBOT1RFKG5hcnFvQCk6IHdlIGhhdmUgdG8gdXNlIGBuZXh0VGlja2Agb3IgbmVzdGVkIGxheWVyIHdpbGwgYmUgY2xvc2VkIGltbWVkaWF0ZWx5IGFmdGVyIGJlaW5nIG9wZW5lZFxuICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzMi5wcm9wcy52aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZJWE1FKG5hcnFvQCk6IGBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGNsaWNrKWAgZG9lc24ndCB3b3JrIG9uIGlPU1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF90aGlzMi5vbkRvY3VtZW50Q2xpY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsYXllcldpbGxCZWNvbWVIaWRkZW4nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbGF5ZXJXaWxsQmVjb21lSGlkZGVuKCkge1xuICAgICAgICAgICAgdmlzaWJsZUxheWVyc1N0YWNrLnNwbGljZSh2aXNpYmxlTGF5ZXJzU3RhY2suaW5kZXhPZih0aGlzKSwgMSk7XG5cbiAgICAgICAgICAgIHRoaXMuaXNDbGlja091dHNpZGVQcmV2ZW50ZWQgPSBudWxsO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbkRvY3VtZW50S2V5UHJlc3MpO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uRG9jdW1lbnRDbGljayk7XG5cbiAgICAgICAgICAgIHRoaXMucmVsZWFzZVpJbmRleCgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudChfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKSwgeyBvbkNsaWNrOiB0aGlzLm9uTGF5ZXJDbGljayB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIF9Qb3J0YWwyLmRlZmF1bHQsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaXNWaXNpYmxlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzVmlzaWJsZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLnZpc2libGU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlcXVlc3RIaWRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlcXVlc3RIaWRlKGUsIHJlYXNvbikge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMudmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25SZXF1ZXN0SGlkZShlLCByZWFzb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdoYW5kbGVDbGlja091dHNpZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlQ2xpY2tPdXRzaWRlKGUpIHtcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdEhpZGUoZSwgUkVBU09OX0NMSUNLX09VVFNJREUpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdwcmV2ZW50Q2xpY2tPdXRzaWRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByZXZlbnRDbGlja091dHNpZGUoKSB7XG4gICAgICAgICAgICB0aGlzLmlzQ2xpY2tPdXRzaWRlUHJldmVudGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFuZGxlUGFyZW50TGF5ZXJIaWRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVBhcmVudExheWVySGlkZSgpIHtcbiAgICAgICAgICAgIHZhciBpc1BhcmVudExheWVyVmlzaWJsZSA9IHRoaXMuY29udGV4dC5pc1BhcmVudExheWVyVmlzaWJsZTtcblxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMudmlzaWJsZSAmJiB0eXBlb2YgaXNQYXJlbnRMYXllclZpc2libGUgPT09ICdmdW5jdGlvbicgJiYgaXNQYXJlbnRMYXllclZpc2libGUoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3RIaWRlKG51bGwsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb25MYXllckNsaWNrJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uTGF5ZXJDbGljayhlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy52aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2ZW50Q2xpY2tPdXRzaWRlKCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgcHJldmVudFBhcmVudExheWVyQ2xpY2tPdXRzaWRlID0gdGhpcy5jb250ZXh0LnByZXZlbnRQYXJlbnRMYXllckNsaWNrT3V0c2lkZTtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcHJldmVudFBhcmVudExheWVyQ2xpY2tPdXRzaWRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXZlbnRQYXJlbnRMYXllckNsaWNrT3V0c2lkZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DbGljayhlKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb25Eb2N1bWVudENsaWNrJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uRG9jdW1lbnRDbGljayhlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0NsaWNrT3V0c2lkZVByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNDbGlja091dHNpZGVQcmV2ZW50ZWQgPSBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZShlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb25Eb2N1bWVudEtleVByZXNzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uRG9jdW1lbnRLZXlQcmVzcyhlKSB7XG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSBLRVlfRVNDQVBFICYmIHZpc2libGVMYXllcnNTdGFja1swXSA9PT0gdGhpcykge1xuICAgICAgICAgICAgICAgIC8vIE5PVEUobmFycW9AKTogd2UgY2FsbCBgcHJldmVudERlZmF1bHQoKWAgdG8gcHJldmVudCBkZXNrdG9wIFNhZmFyaSBmcm9tIGV4aXRpbmcgdGhlIGZ1bGwgc2NyZWVuIG1vZGVcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0SGlkZShlLCBSRUFTT05fRVNDX0tFWV9QUkVTUyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NhcHR1cmVaSW5kZXgnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY2FwdHVyZVpJbmRleCgpIHtcbiAgICAgICAgICAgIHZhciBsZXZlbCA9IHRoaXMucHJvcHMuekluZGV4R3JvdXBMZXZlbDtcblxuICAgICAgICAgICAgdmFyIHpJbmRleGVzID0gdmlzaWJsZUxheWVyc1pJbmRleGVzW2xldmVsXTtcbiAgICAgICAgICAgIGlmICghekluZGV4ZXMpIHtcbiAgICAgICAgICAgICAgICB6SW5kZXhlcyA9IFsobGV2ZWwgKyAxKSAqIFpJTkRFWF9GQUNUT1JdO1xuICAgICAgICAgICAgICAgIHZpc2libGVMYXllcnNaSW5kZXhlc1tsZXZlbF0gPSB6SW5kZXhlcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHByZXZaSW5kZXggPSB0aGlzLnpJbmRleDtcbiAgICAgICAgICAgIHRoaXMuekluZGV4ID0gekluZGV4ZXNbekluZGV4ZXMucHVzaCh6SW5kZXhlc1t6SW5kZXhlcy5sZW5ndGggLSAxXSArIDEpIC0gMV07XG4gICAgICAgICAgICBpZiAodGhpcy56SW5kZXggIT09IHByZXZaSW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uT3JkZXJDaGFuZ2UodGhpcy56SW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZWxlYXNlWkluZGV4JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbGVhc2VaSW5kZXgoKSB7XG4gICAgICAgICAgICB2YXIgekluZGV4ZXMgPSB2aXNpYmxlTGF5ZXJzWkluZGV4ZXNbdGhpcy5wcm9wcy56SW5kZXhHcm91cExldmVsXTtcbiAgICAgICAgICAgIHpJbmRleGVzLnNwbGljZSh6SW5kZXhlcy5pbmRleE9mKHRoaXMuekluZGV4KSwgMSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIE92ZXJsYXk7XG59KF9Db21wb25lbnQzLmRlZmF1bHQpO1xuXG5PdmVybGF5LmNoaWxkQ29udGV4dFR5cGVzID0gT3ZlcmxheS5jb250ZXh0VHlwZXMgPSB7XG4gICAgaXNQYXJlbnRMYXllclZpc2libGU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBwcmV2ZW50UGFyZW50TGF5ZXJDbGlja091dHNpZGU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuZnVuY1xufTtcblxuT3ZlcmxheS5wcm9wc1R5cGVzID0ge1xuICAgIHZpc2libGU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIG9uQ2xpY2s6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvblJlcXVlc3RIaWRlOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25PcmRlckNoYW5nZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5mdW5jXG59O1xuXG5PdmVybGF5LmRlZmF1bHRQcm9wcyA9IHtcbiAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICB6SW5kZXhHcm91cExldmVsOiAwLFxuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7fSxcbiAgICBvblJlcXVlc3RIaWRlOiBmdW5jdGlvbiBvblJlcXVlc3RIaWRlKCkge30sXG4gICAgb25PcmRlckNoYW5nZTogZnVuY3Rpb24gb25PcmRlckNoYW5nZSgpIHt9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBPdmVybGF5O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L3JlYWN0LWlzbGFuZHMvY29tcG9uZW50cy9PdmVybGF5L2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9nZXQyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2dldCcpO1xuXG52YXIgX2dldDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXQyKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgS0VZX1NQQUNFID0gJyAnO1xudmFyIEtFWV9FTlRFUiA9ICdFbnRlcic7XG5cbnZhciBwcmVzc2FibGUgPSBmdW5jdGlvbiBwcmVzc2FibGUoQmFzZUNvbXBvbmVudCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoX0Jhc2VDb21wb25lbnQpIHtcbiAgICAgICAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoX2NsYXNzLCBfQmFzZUNvbXBvbmVudCk7XG5cbiAgICAgICAgZnVuY3Rpb24gX2NsYXNzKCkge1xuICAgICAgICAgICAgdmFyIF9PYmplY3QkZ2V0UHJvdG90eXBlTztcblxuICAgICAgICAgICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgX2NsYXNzKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIChfT2JqZWN0JGdldFByb3RvdHlwZU8gPSAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShfY2xhc3MpKS5jYWxsLmFwcGx5KF9PYmplY3QkZ2V0UHJvdG90eXBlTywgW3RoaXNdLmNvbmNhdChhcmdzKSkpO1xuXG4gICAgICAgICAgICBfdGhpcy5zdGF0ZSA9ICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIF90aGlzLnN0YXRlLCB7XG4gICAgICAgICAgICAgICAgcHJlc3NlZDogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBfdGhpcy5zaG91bGRQcmV2ZW5EZWZhdWx0Q2xpY2sgPSBmYWxzZTtcblxuICAgICAgICAgICAgX3RoaXMub25Nb3VzZVVwID0gX3RoaXMub25Nb3VzZVVwLmJpbmQoX3RoaXMpO1xuICAgICAgICAgICAgX3RoaXMub25Nb3VzZURvd24gPSBfdGhpcy5vbk1vdXNlRG93bi5iaW5kKF90aGlzKTtcbiAgICAgICAgICAgIF90aGlzLm9uS2V5VXAgPSBfdGhpcy5vbktleVVwLmJpbmQoX3RoaXMpO1xuICAgICAgICAgICAgX3RoaXMub25LZXlEb3duID0gX3RoaXMub25LZXlEb3duLmJpbmQoX3RoaXMpO1xuICAgICAgICAgICAgX3RoaXMub25DbGljayA9IF90aGlzLm9uQ2xpY2suYmluZChfdGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQG92ZXJyaWRlICovXG5cblxuICAgICAgICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShfY2xhc3MsIFt7XG4gICAgICAgICAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCgwLCBfZ2V0My5kZWZhdWx0KSgoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShfY2xhc3MucHJvdG90eXBlKSwgJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLCB0aGlzKSkge1xuICAgICAgICAgICAgICAgICAgICAoMCwgX2dldDMuZGVmYXVsdCkoKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoX2NsYXNzLnByb3RvdHlwZSksICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJywgdGhpcykuY2FsbCh0aGlzLCBwcm9wcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5kaXNhYmxlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJlc3NlZDogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdnZXRDb250cm9sSGFuZGxlcnMnLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldENvbnRyb2xIYW5kbGVycygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7fSwgKDAsIF9nZXQzLmRlZmF1bHQpKCgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKF9jbGFzcy5wcm90b3R5cGUpLCAnZ2V0Q29udHJvbEhhbmRsZXJzJywgdGhpcykuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiB0aGlzLm9uQ2xpY2ssXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duOiB0aGlzLm9uTW91c2VEb3duLFxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlVXA6IHRoaXMub25Nb3VzZVVwLFxuICAgICAgICAgICAgICAgICAgICBvbktleVVwOiB0aGlzLm9uS2V5VXAsXG4gICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bjogdGhpcy5vbktleURvd24sXG4gICAgICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M6IHRoaXMucHJvcHMub25LZXlQcmVzc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdkaXNwYXRjaENsaWNrJyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNwYXRjaENsaWNrKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvdWxkUHJldmVuRGVmYXVsdENsaWNrID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGV2ZW50VHlwZSA9IGUudHlwZTtcblxuICAgICAgICAgICAgICAgICAgICBlLnR5cGUgPSAnY2xpY2snO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2xpY2soZSwgdGhpcy5wcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgIGUudHlwZSA9IGV2ZW50VHlwZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG91bGRQcmV2ZW5EZWZhdWx0Q2xpY2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKiogQG92ZXJyaWRlICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnb25Nb3VzZUxlYXZlJyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1vdXNlTGVhdmUoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCgwLCBfZ2V0My5kZWZhdWx0KSgoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShfY2xhc3MucHJvdG90eXBlKSwgJ29uTW91c2VMZWF2ZScsIHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICgwLCBfZ2V0My5kZWZhdWx0KSgoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShfY2xhc3MucHJvdG90eXBlKSwgJ29uTW91c2VMZWF2ZScsIHRoaXMpLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcmVzc2VkOiBmYWxzZSB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqIEBvdmVycmlkZSAqL1xuXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ29uTW91c2VEb3duJyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1vdXNlRG93bihlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCgwLCBfZ2V0My5kZWZhdWx0KSgoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShfY2xhc3MucHJvdG90eXBlKSwgJ29uTW91c2VEb3duJywgdGhpcykpIHtcbiAgICAgICAgICAgICAgICAgICAgKDAsIF9nZXQzLmRlZmF1bHQpKCgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKF9jbGFzcy5wcm90b3R5cGUpLCAnb25Nb3VzZURvd24nLCB0aGlzKS5jYWxsKHRoaXMsIGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMucHJvcHMuZGlzYWJsZWQgJiYgZS5idXR0b24gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByZXNzZWQ6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKiogQG92ZXJyaWRlICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnb25Nb3VzZVVwJyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1vdXNlVXAoZSkge1xuICAgICAgICAgICAgICAgIGlmICgoMCwgX2dldDMuZGVmYXVsdCkoKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoX2NsYXNzLnByb3RvdHlwZSksICdvbk1vdXNlVXAnLCB0aGlzKSkge1xuICAgICAgICAgICAgICAgICAgICAoMCwgX2dldDMuZGVmYXVsdCkoKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoX2NsYXNzLnByb3RvdHlwZSksICdvbk1vdXNlVXAnLCB0aGlzKS5jYWxsKHRoaXMsIGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5wcmVzc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcmVzc2VkOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaENsaWNrKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqIEBvdmVycmlkZSAqL1xuXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ29uRm9jdXMnLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uRm9jdXMoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnByZXNzZWQgJiYgKDAsIF9nZXQzLmRlZmF1bHQpKCgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKF9jbGFzcy5wcm90b3R5cGUpLCAnb25Gb2N1cycsIHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICgwLCBfZ2V0My5kZWZhdWx0KSgoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShfY2xhc3MucHJvdG90eXBlKSwgJ29uRm9jdXMnLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqIEBvdmVycmlkZSAqL1xuXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ29uS2V5RG93bicsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25LZXlEb3duKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCB8fCAhdGhpcy5zdGF0ZS5mb2N1c2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSBLRVlfU1BBQ0UgfHwgZS5rZXkgPT09IEtFWV9FTlRFUikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJlc3NlZDogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25LZXlEb3duKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25LZXlEb3duKGUsIHRoaXMucHJvcHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqIEBvdmVycmlkZSAqL1xuXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ29uS2V5VXAnLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uS2V5VXAoZSkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5mb2N1c2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUucHJlc3NlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJlc3NlZDogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hDbGljayhlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25LZXlVcCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uS2V5VXAoZSwgdGhpcy5wcm9wcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKiogQG92ZXJyaWRlICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnb25DbGljaycsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hvdWxkUHJldmVuRGVmYXVsdENsaWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCgwLCBfZ2V0My5kZWZhdWx0KSgoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShfY2xhc3MucHJvdG90eXBlKSwgJ29uQ2xpY2snLCB0aGlzKSkge1xuICAgICAgICAgICAgICAgICAgICAoMCwgX2dldDMuZGVmYXVsdCkoKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoX2NsYXNzLnByb3RvdHlwZSksICdvbkNsaWNrJywgdGhpcykuY2FsbCh0aGlzLCBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1dKTtcbiAgICAgICAgcmV0dXJuIF9jbGFzcztcbiAgICB9KEJhc2VDb21wb25lbnQpO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gcHJlc3NhYmxlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L3JlYWN0LWlzbGFuZHMvY29tcG9uZW50cy9wcmVzc2FibGUvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxMDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbihmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgfVxuICB9XG4gIHRyeSB7XG4gICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaXMgbm90IGRlZmluZWQnKTtcbiAgICB9XG4gIH1cbn0gKCkpXG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBjYWNoZWRTZXRUaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBjYWNoZWRDbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L3dlYnBhY2svfi9ub2RlLWxpYnMtYnJvd3Nlci9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImxheW91dFwiPntjaGlsZHJlbn08L2Rpdj47XG59XG5cbmZ1bmN0aW9uIExheW91dENlbGwoeyB0aXRsZSwgY2hpbGRyZW4gfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0X19jZWxsXCI+XG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImRvY3NcIj57dGl0bGV9PC9oZWFkZXI+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCB7XG4gICAgTGF5b3V0LFxuICAgIExheW91dENlbGwsXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb21wb25lbnRzL0xheW91dC9pbmRleC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzXG4gKiogbW9kdWxlIGlkID0gMTQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbiAqKiBtb2R1bGUgaWQgPSAxNDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gMTQ5XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzXG4gKiogbW9kdWxlIGlkID0gMTUwXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanNcbiAqKiBtb2R1bGUgaWQgPSAxNTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDE1MlxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzXG4gKiogbW9kdWxlIGlkID0gMTUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZShQLCBEKXtcbiAgcmV0dXJuICRPYmplY3QuY3JlYXRlKFAsIEQpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzXG4gKiogbW9kdWxlIGlkID0gMTU0XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2Mpe1xuICByZXR1cm4gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuICoqIG1vZHVsZSBpZCA9IDE1NVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gIHJldHVybiAkT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDE1NlxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5nZXRQcm90b3R5cGVPZjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qc1xuICoqIG1vZHVsZSBpZCA9IDE1N1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5zZXRQcm90b3R5cGVPZjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qc1xuICoqIG1vZHVsZSBpZCA9IDE1OFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5TeW1ib2w7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTU5XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSAxNjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAxNjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAxNjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDE2M1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgcmVzdWx0ICAgICA9IGdldEtleXMoaXQpXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZihnZXRTeW1ib2xzKXtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpXG4gICAgICAsIGlzRW51bSAgPSBwSUUuZlxuICAgICAgLCBpICAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUoc3ltYm9scy5sZW5ndGggPiBpKWlmKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKXJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzXG4gKiogbW9kdWxlIGlkID0gMTY0XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzXG4gKiogbW9kdWxlIGlkID0gMTY1XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKXtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzXG4gKiogbW9kdWxlIGlkID0gMTY2XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBkZXNjcmlwdG9yICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE2N1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkb25lLCB2YWx1ZSl7XG4gIHJldHVybiB7dmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmV9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbiAqKiBtb2R1bGUgaWQgPSAxNjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciBnZXRLZXlzICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIGVsKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBrZXlzICAgPSBnZXRLZXlzKE8pXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaW5kZXggID0gMFxuICAgICwga2V5O1xuICB3aGlsZShsZW5ndGggPiBpbmRleClpZihPW2tleSA9IGtleXNbaW5kZXgrK11dID09PSBlbClyZXR1cm4ga2V5O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19rZXlvZi5qc1xuICoqIG1vZHVsZSBpZCA9IDE2OVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIE1FVEEgICAgID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKVxuICAsIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBoYXMgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgc2V0RGVzYyAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaWQgICAgICAgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24oaXQpe1xuICBzZXREZXNjKGl0LCBNRVRBLCB7dmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9fSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZighaXNPYmplY3QoaXQpKXJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmKCFoYXMoaXQsIE1FVEEpKXtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIGlmKCFoYXMoaXQsIE1FVEEpKXtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKXNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiAgICAgIE1FVEEsXG4gIE5FRUQ6ICAgICBmYWxzZSxcbiAgZmFzdEtleTogIGZhc3RLZXksXG4gIGdldFdlYWs6ICBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qc1xuICoqIG1vZHVsZSBpZCA9IDE3MFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgJGFzc2lnbiAgPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICB2YXIgQSA9IHt9XG4gICAgLCBCID0ge31cbiAgICAsIFMgPSBTeW1ib2woKVxuICAgICwgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uKGspeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUICAgICA9IHRvT2JqZWN0KHRhcmdldClcbiAgICAsIGFMZW4gID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgaW5kZXggPSAxXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mXG4gICAgLCBpc0VudW0gICAgID0gcElFLmY7XG4gIHdoaWxlKGFMZW4gPiBpbmRleCl7XG4gICAgdmFyIFMgICAgICA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKVxuICAgICAgLCBrZXlzICAgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGogICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGopaWYoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSlUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzXG4gKiogbW9kdWxlIGlkID0gMTcxXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJ2YXIgZFAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxyXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxyXG4gICwgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpe1xyXG4gIGFuT2JqZWN0KE8pO1xyXG4gIHZhciBrZXlzICAgPSBnZXRLZXlzKFByb3BlcnRpZXMpXHJcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXHJcbiAgICAsIGkgPSAwXHJcbiAgICAsIFA7XHJcbiAgd2hpbGUobGVuZ3RoID4gaSlkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xyXG4gIHJldHVybiBPO1xyXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanNcbiAqKiBtb2R1bGUgaWQgPSAxNzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBnT1BOICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmZcbiAgLCB0b1N0cmluZyAgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uKGl0KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanNcbiAqKiBtb2R1bGUgaWQgPSAxNzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBjaGVjayA9IGZ1bmN0aW9uKE8sIHByb3RvKXtcbiAgYW5PYmplY3QoTyk7XG4gIGlmKCFpc09iamVjdChwcm90bykgJiYgcHJvdG8gIT09IG51bGwpdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24odGVzdCwgYnVnZ3ksIHNldCl7XG4gICAgICB0cnkge1xuICAgICAgICBzZXQgPSByZXF1aXJlKCcuL19jdHgnKShGdW5jdGlvbi5jYWxsLCByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmYoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XG4gICAgICAgIHNldCh0ZXN0LCBbXSk7XG4gICAgICAgIGJ1Z2d5ID0gISh0ZXN0IGluc3RhbmNlb2YgQXJyYXkpO1xuICAgICAgfSBjYXRjaChlKXsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pe1xuICAgICAgICBjaGVjayhPLCBwcm90byk7XG4gICAgICAgIGlmKGJ1Z2d5KU8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtcHJvdG8uanNcbiAqKiBtb2R1bGUgaWQgPSAxNzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qc1xuICoqIG1vZHVsZSBpZCA9IDE3NVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDE3NlxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzXG4gKiogbW9kdWxlIGlkID0gMTc3XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gMTc4XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7YXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJyl9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzXG4gKiogbW9kdWxlIGlkID0gMTc5XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXHJcbi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxyXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtjcmVhdGU6IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKX0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxODBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XHJcbi8vIDE5LjEuMi40IC8gMTUuMi4zLjYgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXHJcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7ZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZ9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzXG4gKiogbW9kdWxlIGlkID0gMTgxXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG52YXIgdG9JT2JqZWN0ICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmY7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0b0lPYmplY3QoaXQpLCBrZXkpO1xuICB9O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDE4MlxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLy8gMTkuMS4yLjkgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgdG9PYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCAkZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0UHJvdG90eXBlT2YnLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YoaXQpe1xuICAgIHJldHVybiAkZ2V0UHJvdG90eXBlT2YodG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzXG4gKiogbW9kdWxlIGlkID0gMTgzXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvLyAxOS4xLjMuMTkgT2JqZWN0LnNldFByb3RvdHlwZU9mKE8sIHByb3RvKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge3NldFByb3RvdHlwZU9mOiByZXF1aXJlKCcuL19zZXQtcHJvdG8nKS5zZXR9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qc1xuICoqIG1vZHVsZSBpZCA9IDE4NFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCAgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCl7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGluZGV4ID0gdGhpcy5faVxuICAgICwgcG9pbnQ7XG4gIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7dmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZX07XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSAxODZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIERFU0NSSVBUT1JTICAgID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBNRVRBICAgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVlcbiAgLCAkZmFpbHMgICAgICAgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJylcbiAgLCBzaGFyZWQgICAgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgdWlkICAgICAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIHdrcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJylcbiAgLCB3a3NFeHQgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcy1leHQnKVxuICAsIHdrc0RlZmluZSAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpXG4gICwga2V5T2YgICAgICAgICAgPSByZXF1aXJlKCcuL19rZXlvZicpXG4gICwgZW51bUtleXMgICAgICAgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKVxuICAsIGlzQXJyYXkgICAgICAgID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKVxuICAsIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIF9jcmVhdGUgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZ09QTkV4dCAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKVxuICAsICRHT1BEICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKVxuICAsICREUCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCAka2V5cyAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BEICAgICAgICAgICA9ICRHT1BELmZcbiAgLCBkUCAgICAgICAgICAgICA9ICREUC5mXG4gICwgZ09QTiAgICAgICAgICAgPSBnT1BORXh0LmZcbiAgLCAkU3ltYm9sICAgICAgICA9IGdsb2JhbC5TeW1ib2xcbiAgLCAkSlNPTiAgICAgICAgICA9IGdsb2JhbC5KU09OXG4gICwgX3N0cmluZ2lmeSAgICAgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnlcbiAgLCBQUk9UT1RZUEUgICAgICA9ICdwcm90b3R5cGUnXG4gICwgSElEREVOICAgICAgICAgPSB3a3MoJ19oaWRkZW4nKVxuICAsIFRPX1BSSU1JVElWRSAgID0gd2tzKCd0b1ByaW1pdGl2ZScpXG4gICwgaXNFbnVtICAgICAgICAgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZVxuICAsIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKVxuICAsIEFsbFN5bWJvbHMgICAgID0gc2hhcmVkKCdzeW1ib2xzJylcbiAgLCBPUFN5bWJvbHMgICAgICA9IHNoYXJlZCgnb3Atc3ltYm9scycpXG4gICwgT2JqZWN0UHJvdG8gICAgPSBPYmplY3RbUFJPVE9UWVBFXVxuICAsIFVTRV9OQVRJVkUgICAgID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJ1xuICAsIFFPYmplY3QgICAgICAgID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiBkUCh0aGlzLCAnYScsIHt2YWx1ZTogN30pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24oaXQsIGtleSwgRCl7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZihwcm90b0Rlc2MpZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZihwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKWRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24odGFnKXtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCl7XG4gIGlmKGl0ID09PSBPYmplY3RQcm90bykkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZihoYXMoQWxsU3ltYm9scywga2V5KSl7XG4gICAgaWYoIUQuZW51bWVyYWJsZSl7XG4gICAgICBpZighaGFzKGl0LCBISURERU4pKWRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0paXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7ZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSl9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKXtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpXG4gICAgLCBpICAgID0gMFxuICAgICwgbCA9IGtleXMubGVuZ3RoXG4gICAgLCBrZXk7XG4gIHdoaWxlKGwgPiBpKSRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApe1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSl7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICBpdCAgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSlELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgdmFyIG5hbWVzICA9IGdPUE4odG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpe1xuICAgIGlmKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSlyZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpe1xuICB2YXIgSVNfT1AgID0gaXQgPT09IE9iamVjdFByb3RvXG4gICAgLCBuYW1lcyAgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpe1xuICAgIGlmKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSlyZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmKCFVU0VfTkFUSVZFKXtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpe1xuICAgIGlmKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKXRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24odmFsdWUpe1xuICAgICAgaWYodGhpcyA9PT0gT2JqZWN0UHJvdG8pJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSl0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmKERFU0NSSVBUT1JTICYmIHNldHRlcilzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHtjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mICAgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiAgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSl7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uKG5hbWUpe1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH1cbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1N5bWJvbDogJFN5bWJvbH0pO1xuXG5mb3IodmFyIHN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrcyhzeW1ib2xzW2krK10pO1xuXG5mb3IodmFyIHN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBpID0gMDsgc3ltYm9scy5sZW5ndGggPiBpOyApd2tzRGVmaW5lKHN5bWJvbHNbaSsrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24oa2V5KXtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKGtleSl7XG4gICAgaWYoaXNTeW1ib2woa2V5KSlyZXR1cm4ga2V5T2YoU3ltYm9sUmVnaXN0cnksIGtleSk7XG4gICAgdGhyb3cgVHlwZUVycm9yKGtleSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uKCl7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24oKXsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoe2E6IFN9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpe1xuICAgIGlmKGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKXJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIHZhciBhcmdzID0gW2l0XVxuICAgICAgLCBpICAgID0gMVxuICAgICAgLCByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmKHR5cGVvZiByZXBsYWNlciA9PSAnZnVuY3Rpb24nKSRyZXBsYWNlciA9IHJlcGxhY2VyO1xuICAgIGlmKCRyZXBsYWNlciB8fCAhaXNBcnJheShyZXBsYWNlcikpcmVwbGFjZXIgPSBmdW5jdGlvbihrZXksIHZhbHVlKXtcbiAgICAgIGlmKCRyZXBsYWNlcil2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYoIWlzU3ltYm9sKHZhbHVlKSlyZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qc1xuICoqIG1vZHVsZSBpZCA9IDE4N1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gMTg4XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ29ic2VydmFibGUnKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE4OVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSloaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE5MFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX0NvbnRyb2wyID0gcmVxdWlyZSgnLi4vQ29udHJvbCcpO1xuXG52YXIgX0NvbnRyb2wzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29udHJvbDIpO1xuXG52YXIgX0J1dHRvbiA9IHJlcXVpcmUoJy4uL0J1dHRvbicpO1xuXG52YXIgX0J1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CdXR0b24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgQ2hlY2tib3ggPSBmdW5jdGlvbiAoX0NvbnRyb2wpIHtcbiAgICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShDaGVja2JveCwgX0NvbnRyb2wpO1xuXG4gICAgZnVuY3Rpb24gQ2hlY2tib3gocHJvcHMpIHtcbiAgICAgICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgQ2hlY2tib3gpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoQ2hlY2tib3gpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgICBfdGhpcy5vbkNvbnRyb2xDaGFuZ2UgPSBfdGhpcy5vbkNvbnRyb2xDaGFuZ2UuYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLm9uQnV0dG9uQ2xpY2sgPSBfdGhpcy5vbkJ1dHRvbkNsaWNrLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5vbkJ1dHRvbkZvY3VzQ2hhbmdlID0gX3RoaXMub25CdXR0b25Gb2N1c0NoYW5nZS5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMub25CdXR0b25Ib3ZlckNoYW5nZSA9IF90aGlzLm9uQnV0dG9uSG92ZXJDaGFuZ2UuYmluZChfdGhpcyk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShDaGVja2JveCwgW3tcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBfcHJvcHMubmFtZTtcbiAgICAgICAgICAgIHZhciB0aGVtZSA9IF9wcm9wcy50aGVtZTtcbiAgICAgICAgICAgIHZhciBzaXplID0gX3Byb3BzLnNpemU7XG4gICAgICAgICAgICB2YXIgdHlwZSA9IF9wcm9wcy50eXBlO1xuICAgICAgICAgICAgdmFyIGNoZWNrZWQgPSBfcHJvcHMuY2hlY2tlZDtcbiAgICAgICAgICAgIHZhciBkaXNhYmxlZCA9IF9wcm9wcy5kaXNhYmxlZDtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IF9wcm9wcy52YWx1ZTtcbiAgICAgICAgICAgIHZhciBmb2N1c2VkID0gdGhpcy5zdGF0ZS5mb2N1c2VkO1xuXG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnYnV0dG9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHRoaXMuY2xhc3NOYW1lKCkgfSxcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZCAmJiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7IHR5cGU6ICdoaWRkZW4nLCBuYW1lOiBuYW1lLCB2YWx1ZTogdmFsdWUsIGRpc2FibGVkOiBkaXNhYmxlZCB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBfQnV0dG9uMi5kZWZhdWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0aGVtZTogdGhlbWUsIHNpemU6IHNpemUsIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGNoZWNrZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNlZDogZm9jdXNlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZvY3VzQ2hhbmdlOiB0aGlzLm9uQnV0dG9uRm9jdXNDaGFuZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ib3ZlckNoYW5nZTogdGhpcy5vbkJ1dHRvbkhvdmVyQ2hhbmdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6IHRoaXMub25CdXR0b25DbGlja1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7IGNsYXNzTmFtZTogdGhpcy5jbGFzc05hbWUoKSB9LCB0aGlzLmdldENvbnRyb2xIYW5kbGVycygpKSxcbiAgICAgICAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2NoZWNrYm94X19ib3gnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7IHJlZjogJ2NvbnRyb2wnLCBjbGFzc05hbWU6ICdjaGVja2JveF9fY29udHJvbCcsIHR5cGU6ICdjaGVja2JveCcsIGF1dG9Db21wbGV0ZTogJ29mZicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGNoZWNrZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMub25Db250cm9sQ2hhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnY2hlY2tib3hfX3RleHQnLCByb2xlOiAncHJlc2VudGF0aW9uJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY2xhc3NOYW1lJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsYXNzTmFtZSgpIHtcbiAgICAgICAgICAgIHZhciBjbGFzc05hbWUgPSAnY2hlY2tib3gnO1xuXG4gICAgICAgICAgICB2YXIgdGhlbWUgPSB0aGlzLnByb3BzLnRoZW1lIHx8IHRoaXMuY29udGV4dC50aGVtZTtcbiAgICAgICAgICAgIGlmICh0aGVtZSkge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnIGNoZWNrYm94X3RoZW1lXycgKyB0aGVtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNpemUpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gJyBjaGVja2JveF9zaXplXycgKyB0aGlzLnByb3BzLnNpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgY2hlY2tib3hfdHlwZV8nICsgdGhpcy5wcm9wcy50eXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gJyBjaGVja2JveF9kaXNhYmxlZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgY2hlY2tib3hfY2hlY2tlZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5ob3ZlcmVkKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgY2hlY2tib3hfaG92ZXJlZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5mb2N1c2VkKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgY2hlY2tib3hfZm9jdXNlZCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnICcgKyB0aGlzLnByb3BzLmNsYXNzTmFtZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb25Db250cm9sQ2hhbmdlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ29udHJvbENoYW5nZSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGNoZWNrZWQgPSAhdGhpcy5wcm9wcy5jaGVja2VkO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoZWNrKGNoZWNrZWQsIHRoaXMucHJvcHMpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvbkJ1dHRvbkZvY3VzQ2hhbmdlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uQnV0dG9uRm9jdXNDaGFuZ2UoZm9jdXNlZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWQ6IGZvY3VzZWQgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uQnV0dG9uSG92ZXJDaGFuZ2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25CdXR0b25Ib3ZlckNoYW5nZShob3ZlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaG92ZXJlZDogaG92ZXJlZCB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb25CdXR0b25DbGljaycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbkJ1dHRvbkNsaWNrKGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2xpY2soZSwgdGhpcy5wcm9wcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ29udHJvbENoYW5nZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBDaGVja2JveDtcbn0oX0NvbnRyb2wzLmRlZmF1bHQpO1xuXG5DaGVja2JveC5jb250ZXh0VHlwZXMgPSB7XG4gICAgdGhlbWU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5DaGVja2JveC5wcm9wVHlwZXMgPSB7XG4gICAgdGhlbWU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNpemU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMub25lT2YoWydzJywgJ20nLCAnbCcsICd4bCddKSxcbiAgICB0eXBlOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXNhYmxlZDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICAgIGNoZWNrZWQ6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICB2YWx1ZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5hbnksXG4gICAgb25DbGljazogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hlY2s6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuZnVuY1xufTtcblxuQ2hlY2tib3guZGVmYXVsdFByb3BzID0ge1xuICAgIG9uQ2hlY2s6IGZ1bmN0aW9uIG9uQ2hlY2soKSB7fVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQ2hlY2tib3g7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vcmVhY3QtaXNsYW5kcy9jb21wb25lbnRzL0NoZWNrYm94L2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTkxXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfQ29tcG9uZW50MiA9IHJlcXVpcmUoJy4uL0NvbXBvbmVudCcpO1xuXG52YXIgX0NvbXBvbmVudDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db21wb25lbnQyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIENoZWNrYm94R3JvdXAgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKENoZWNrYm94R3JvdXAsIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gQ2hlY2tib3hHcm91cChwcm9wcykge1xuICAgICAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBDaGVja2JveEdyb3VwKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKENoZWNrYm94R3JvdXApLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgICBfdGhpcy5vbkNoaWxkQ2hlY2sgPSBfdGhpcy5vbkNoaWxkQ2hlY2suYmluZChfdGhpcyk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShDaGVja2JveEdyb3VwLCBbe1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgICAgICAgdmFyIHRoZW1lID0gX3Byb3BzLnRoZW1lO1xuICAgICAgICAgICAgdmFyIHNpemUgPSBfcHJvcHMuc2l6ZTtcbiAgICAgICAgICAgIHZhciB0eXBlID0gX3Byb3BzLnR5cGU7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IF9wcm9wcy5uYW1lO1xuICAgICAgICAgICAgdmFyIGRpc2FibGVkID0gX3Byb3BzLmRpc2FibGVkO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gX3Byb3BzLnZhbHVlO1xuXG5cbiAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoZWNrZWQgPSB2YWx1ZS5pbmRleE9mKGNoaWxkLnByb3BzLnZhbHVlKSAhPT0gLTE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe1xuICAgICAgICAgICAgICAgICAgICB0aGVtZTogdGhlbWUsXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IHNpemUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZFxuICAgICAgICAgICAgICAgIH0sIGNoaWxkLnByb3BzLCB7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGNoZWNrZWQsXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hlY2s6IF90aGlzMi5vbkNoaWxkQ2hlY2tcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogdGhpcy5jbGFzc05hbWUoKSB9LFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjbGFzc05hbWUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY2xhc3NOYW1lKCkge1xuICAgICAgICAgICAgdmFyIGNsYXNzTmFtZSA9ICdjaGVja2JveC1ncm91cCBjb250cm9sLWdyb3VwJztcblxuICAgICAgICAgICAgdmFyIHRoZW1lID0gdGhpcy5wcm9wcy50aGVtZSB8fCB0aGlzLmNvbnRleHQudGhlbWU7XG4gICAgICAgICAgICBpZiAodGhlbWUpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gJyBjaGVja2JveC1ncm91cF90aGVtZV8nICsgdGhlbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zaXplKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgY2hlY2tib3gtZ3JvdXBfc2l6ZV8nICsgdGhpcy5wcm9wcy5zaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMudHlwZSkge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnIGNoZWNrYm94LWdyb3VwX3R5cGVfJyArIHRoaXMucHJvcHMudHlwZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgJyArIHRoaXMucHJvcHMuY2xhc3NOYW1lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvbkNoaWxkQ2hlY2snLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25DaGlsZENoZWNrKGNoZWNrZWQsIGNoaWxkUHJvcHMpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvcHMudmFsdWU7XG5cbiAgICAgICAgICAgIHZhciBjaGlsZFZhbHVlID0gY2hpbGRQcm9wcy52YWx1ZTtcbiAgICAgICAgICAgIGlmIChjaGVja2VkICYmIHZhbHVlLmluZGV4T2YoY2hpbGRWYWx1ZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgLy8gIEZJWE1FOiDQndC1INC90YPQttC90L4g0LvQuCDRgtGD0YIg0LLQvtC30LLRgNCw0YnQsNGC0Ywg0LzQsNGB0YHQuNCyINCyINGC0L7QvCDQttC1INC/0L7RgNGP0LTQutC1LFxuICAgICAgICAgICAgICAgIC8vICDQutCw0Log0Y3RgtC4INC30L3QsNGH0LXQvdC40LUg0LIgUmFkaW9Hcm91cCDRgNCw0YHQv9C+0LvQvtC20LXQvdGLP1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgdmFyIG5ld1ZhbHVlID0gdmFsdWUuY29uY2F0KGNoaWxkVmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UobmV3VmFsdWUsIHRoaXMucHJvcHMpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIHZhciBfbmV3VmFsdWUgPSB2YWx1ZS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0gIT09IGNoaWxkVmFsdWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShfbmV3VmFsdWUsIHRoaXMucHJvcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBDaGVja2JveEdyb3VwO1xufShfQ29tcG9uZW50My5kZWZhdWx0KTtcblxuQ2hlY2tib3hHcm91cC5jb250ZXh0VHlwZXMgPSB7XG4gICAgdGhlbWU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5DaGVja2JveEdyb3VwLmRlZmF1bHRQcm9wcyA9IHtcbiAgICB2YWx1ZTogW10sXG4gICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKCkge31cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IENoZWNrYm94R3JvdXA7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vcmVhY3QtaXNsYW5kcy9jb21wb25lbnRzL0NoZWNrYm94R3JvdXAvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxOTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX0NvbXBvbmVudDIgPSByZXF1aXJlKCcuLi9Db21wb25lbnQnKTtcblxudmFyIF9Db21wb25lbnQzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29tcG9uZW50Mik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBJY29uID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShJY29uLCBfQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIEljb24oKSB7XG4gICAgICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIEljb24pO1xuICAgICAgICByZXR1cm4gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShJY29uKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShJY29uLCBbe1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMudXJsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdzcGFuJywgeyBjbGFzc05hbWU6IHRoaXMuY2xhc3NOYW1lKCksIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArIHRoaXMucHJvcHMudXJsICsgJyknXG4gICAgICAgICAgICAgICAgICAgIH0gfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogdGhpcy5jbGFzc05hbWUoKSB9LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY2xhc3NOYW1lJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsYXNzTmFtZSgpIHtcbiAgICAgICAgICAgIHZhciBjbGFzc05hbWUgPSAnaWNvbic7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnICcgKyB0aGlzLnByb3BzLmNsYXNzTmFtZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gSWNvbjtcbn0oX0NvbXBvbmVudDMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEljb247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vcmVhY3QtaXNsYW5kcy9jb21wb25lbnRzL0ljb24vaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxOTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9Db250cm9sMiA9IHJlcXVpcmUoJy4uL0NvbnRyb2wnKTtcblxudmFyIF9Db250cm9sMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbnRyb2wyKTtcblxudmFyIF9wcmVzc2FibGUgPSByZXF1aXJlKCcuLi9wcmVzc2FibGUnKTtcblxudmFyIF9wcmVzc2FibGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlc3NhYmxlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIExpbmsgPSBmdW5jdGlvbiAoX0NvbnRyb2wpIHtcbiAgICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShMaW5rLCBfQ29udHJvbCk7XG5cbiAgICBmdW5jdGlvbiBMaW5rKCkge1xuICAgICAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBMaW5rKTtcbiAgICAgICAgcmV0dXJuICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoTGluaykuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoTGluaywgW3tcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgICAgICAgdmFyIGRpc2FibGVkID0gX3Byb3BzLmRpc2FibGVkO1xuICAgICAgICAgICAgdmFyIHRpdGxlID0gX3Byb3BzLnRpdGxlO1xuXG5cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnVybCkge1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBkaXNhYmxlZCA/IG51bGwgOiB0aGlzLnByb3BzLnVybDtcblxuICAgICAgICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2EnLFxuICAgICAgICAgICAgICAgICAgICAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHsgY2xhc3NOYW1lOiB0aGlzLmNsYXNzTmFtZSgpIH0sIHRoaXMuZ2V0Q29udHJvbEhhbmRsZXJzKCksIHsgaHJlZjogdXJsLCB0YXJnZXQ6IHRoaXMucHJvcHMudGFyZ2V0LCB0aXRsZTogdGl0bGUgfSksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFiSW5kZXggPSBkaXNhYmxlZCA/IC0xIDogMDtcblxuICAgICAgICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHsgY2xhc3NOYW1lOiB0aGlzLmNsYXNzTmFtZSgpIH0sIHRoaXMuZ2V0Q29udHJvbEhhbmRsZXJzKCksIHsgcm9sZTogJ2J1dHRvbicsIHRhYkluZGV4OiB0YWJJbmRleCwgdGl0bGU6IHRpdGxlIH0pLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY2xhc3NOYW1lJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsYXNzTmFtZSgpIHtcbiAgICAgICAgICAgIHZhciBjbGFzc05hbWUgPSAnbGluayc7XG5cbiAgICAgICAgICAgIHZhciB0aGVtZSA9IHRoaXMucHJvcHMudGhlbWUgfHwgdGhpcy5jb250ZXh0LnRoZW1lO1xuICAgICAgICAgICAgaWYgKHRoZW1lKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgbGlua190aGVtZV8nICsgdGhlbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgbGlua190eXBlXycgKyB0aGlzLnByb3BzLnR5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnIGxpbmtfZGlzYWJsZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuZm9jdXNlZCkge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnIGxpbmtfZm9jdXNlZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5ob3ZlcmVkKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgbGlua19ob3ZlcmVkJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgJyArIHRoaXMucHJvcHMuY2xhc3NOYW1lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBMaW5rO1xufShfQ29udHJvbDMuZGVmYXVsdCk7XG5cbkxpbmsucHJvcFR5cGVzID0ge1xuICAgIHRoZW1lOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzaXplOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLm9uZU9mKFsncycsICdtJywgJ2wnLCAneGwnXSksXG4gICAgY2xhc3NOYW1lOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0eXBlOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXNhYmxlZDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICAgIGZvY3VzZWQ6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICB0YXJnZXQ6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRpdGxlOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZyxcbiAgICB1cmw6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2xpY2s6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuZnVuY1xufTtcblxuTGluay5jb250ZXh0VHlwZXMgPSB7XG4gICAgdGhlbWU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSAoMCwgX3ByZXNzYWJsZTIuZGVmYXVsdCkoTGluayk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vcmVhY3QtaXNsYW5kcy9jb21wb25lbnRzL0xpbmsvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxOTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX0NvbXBvbmVudDIgPSByZXF1aXJlKCcuLi8uLi9Db21wb25lbnQnKTtcblxudmFyIF9Db21wb25lbnQzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29tcG9uZW50Mik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBNZW51SXRlbSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoTWVudUl0ZW0sIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gTWVudUl0ZW0ocHJvcHMpIHtcbiAgICAgICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgTWVudUl0ZW0pO1xuXG4gICAgICAgIHZhciBfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoTWVudUl0ZW0pLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgICBfdGhpcy5vbkNsaWNrID0gX3RoaXMub25DbGljay5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMub25Nb3VzZUVudGVyID0gX3RoaXMub25Nb3VzZUVudGVyLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5vbk1vdXNlTGVhdmUgPSBfdGhpcy5vbk1vdXNlTGVhdmUuYmluZChfdGhpcyk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShNZW51SXRlbSwgW3tcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5jbGFzc05hbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgb25DbGljazogdGhpcy5vbkNsaWNrLFxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI6IHRoaXMub25Nb3VzZUVudGVyLFxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU6IHRoaXMub25Nb3VzZUxlYXZlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjbGFzc05hbWUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY2xhc3NOYW1lKCkge1xuICAgICAgICAgICAgdmFyIGNsYXNzTmFtZSA9ICdtZW51LWl0ZW0nO1xuXG4gICAgICAgICAgICB2YXIgdGhlbWUgPSB0aGlzLnByb3BzLnRoZW1lIHx8IHRoaXMuY29udGV4dC50aGVtZTtcbiAgICAgICAgICAgIGlmICh0aGVtZSkge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnIG1lbnUtaXRlbV90aGVtZV8nICsgdGhlbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zaXplKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgbWVudS1pdGVtX3NpemVfJyArIHRoaXMucHJvcHMuc2l6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgbWVudS1pdGVtX2Rpc2FibGVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmhvdmVyZWQpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gJyBtZW51LWl0ZW1faG92ZXJlZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgbWVudS1pdGVtX2NoZWNrZWQnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gJyAnICsgdGhpcy5wcm9wcy5jbGFzc05hbWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uQ2xpY2snLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKGUsIHRoaXMucHJvcHMpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvbk1vdXNlRW50ZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25Nb3VzZUVudGVyKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Ib3Zlcih0cnVlLCB0aGlzLnByb3BzKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb25Nb3VzZUxlYXZlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uTW91c2VMZWF2ZSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uSG92ZXIoZmFsc2UsIHRoaXMucHJvcHMpO1xuICAgICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBNZW51SXRlbTtcbn0oX0NvbXBvbmVudDMuZGVmYXVsdCk7XG5cbk1lbnVJdGVtLmNvbnRleHRUeXBlcyA9IHtcbiAgICB0aGVtZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE1lbnVJdGVtO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L3JlYWN0LWlzbGFuZHMvY29tcG9uZW50cy9NZW51L01lbnVJdGVtL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTk1XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9Db21wb25lbnQyID0gcmVxdWlyZSgnLi4vQ29tcG9uZW50Jyk7XG5cbnZhciBfQ29tcG9uZW50MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbXBvbmVudDIpO1xuXG52YXIgX092ZXJsYXkgPSByZXF1aXJlKCcuLi9PdmVybGF5Jyk7XG5cbnZhciBfT3ZlcmxheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9PdmVybGF5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIE1vZGFsID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShNb2RhbCwgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBNb2RhbChwcm9wcykge1xuICAgICAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBNb2RhbCk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShNb2RhbCkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgekluZGV4OiAwXG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnNob3VsZFJlbmRlclRvT3ZlcmxheSA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5vbkxheWVyQ2xpY2sgPSBfdGhpcy5vbkxheWVyQ2xpY2suYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLm9uTGF5ZXJPcmRlckNoYW5nZSA9IF90aGlzLm9uTGF5ZXJPcmRlckNoYW5nZS5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMub25MYXllclJlcXVlc3RIaWRlID0gX3RoaXMub25MYXllclJlcXVlc3RIaWRlLmJpbmQoX3RoaXMpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoTW9kYWwsIFt7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxVcGRhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zaG91bGRSZW5kZXJUb092ZXJsYXkgJiYgbmV4dFByb3BzLnZpc2libGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3VsZFJlbmRlclRvT3ZlcmxheSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgdmlzaWJsZSA9IHRoaXMucHJvcHMudmlzaWJsZTtcblxuICAgICAgICAgICAgdmFyIHN0eWxlID0gdmlzaWJsZSA/IHsgekluZGV4OiB0aGlzLnN0YXRlLnpJbmRleCB9IDogbnVsbDtcblxuICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHRoaXMuY2xhc3NOYW1lKCksIHJvbGU6ICdkaWFsb2cnLCAnYXJpYS1oaWRkZW4nOiAhdmlzaWJsZSwgc3R5bGU6IHN0eWxlIH0sXG4gICAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ21vZGFsX190YWJsZScgfSxcbiAgICAgICAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnbW9kYWxfX2NlbGwnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ21vZGFsX19jb250ZW50JywgcmVmOiAnY29udGVudCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zaG91bGRSZW5kZXJUb092ZXJsYXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgIF9PdmVybGF5Mi5kZWZhdWx0LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiB2aXNpYmxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgekluZGV4R3JvdXBMZXZlbDogdGhpcy5wcm9wcy56SW5kZXhHcm91cExldmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljazogdGhpcy5vbkxheWVyQ2xpY2ssXG4gICAgICAgICAgICAgICAgICAgICAgICBvblJlcXVlc3RIaWRlOiB0aGlzLm9uTGF5ZXJSZXF1ZXN0SGlkZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uT3JkZXJDaGFuZ2U6IHRoaXMub25MYXllck9yZGVyQ2hhbmdlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjbGFzc05hbWUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY2xhc3NOYW1lKCkge1xuICAgICAgICAgICAgdmFyIGNsYXNzTmFtZSA9ICdwb3B1cCBtb2RhbCc7XG5cbiAgICAgICAgICAgIHZhciB0aGVtZSA9IHRoaXMucHJvcHMudGhlbWUgfHwgdGhpcy5jb250ZXh0LnRoZW1lO1xuICAgICAgICAgICAgaWYgKHRoZW1lKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgbW9kYWxfdGhlbWVfJyArIHRoZW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc2l6ZSkge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnIG1vZGFsX3NpemVfJyArIHRoaXMucHJvcHMuc2l6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gJyBtb2RhbF92aXNpYmxlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnNob3VsZFJlbmRlclRvT3ZlcmxheSkge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnIG1vZGFsX2pzX2luaXRlZCBtb2RhbF9oYXMtYW5pbWF0aW9uJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgJyArIHRoaXMucHJvcHMuY2xhc3NOYW1lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZXF1ZXN0SGlkZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZXF1ZXN0SGlkZShlLCByZWFzb24pIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25SZXF1ZXN0SGlkZShlLCByZWFzb24pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvbkxheWVyQ2xpY2snLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25MYXllckNsaWNrKGUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5yZWZzLmNvbnRlbnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0SGlkZShlLCAnY2xpY2tPdXRzaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uTGF5ZXJPcmRlckNoYW5nZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbkxheWVyT3JkZXJDaGFuZ2UoekluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgekluZGV4OiB6SW5kZXggfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uTGF5ZXJSZXF1ZXN0SGlkZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbkxheWVyUmVxdWVzdEhpZGUoZSwgcmVhc29uKSB7XG4gICAgICAgICAgICBpZiAocmVhc29uID09PSAnZXNjYXBlS2V5UHJlc3MnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0SGlkZShlLCByZWFzb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBNb2RhbDtcbn0oX0NvbXBvbmVudDMuZGVmYXVsdCk7XG5cbk1vZGFsLnByb3BzVHlwZXMgPSB7XG4gICAgdGhlbWU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNpemU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZpc2libGU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIG9uUmVxdWVzdEhpZGU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuZnVuY1xufTtcblxuTW9kYWwuZGVmYXVsdFByb3BzID0ge1xuICAgIHZpc2libGU6IGZhbHNlLFxuICAgIHpJbmRleEdyb3VwTGV2ZWw6IDIwLFxuICAgIG9uUmVxdWVzdEhpZGU6IGZ1bmN0aW9uIG9uUmVxdWVzdEhpZGUoKSB7fVxufTtcblxuTW9kYWwuY29udGV4dFR5cGVzID0ge1xuICAgIHRoZW1lOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTW9kYWw7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vcmVhY3QtaXNsYW5kcy9jb21wb25lbnRzL01vZGFsL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTk2XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFBvcnRhbCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoUG9ydGFsLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIFBvcnRhbChwcm9wcykge1xuICAgICAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBQb3J0YWwpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoUG9ydGFsKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgICAgX3RoaXMucG9ydGFsTm9kZSA9IG51bGw7XG4gICAgICAgIF90aGlzLmlzQXR0YWNoZWRUb1BvcnRhbCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoUG9ydGFsLCBbe1xuICAgICAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUG9ydGFsKCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclBvcnRhbCgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgICAgIHRoaXMudW5tb3VudFBvcnRhbCgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlclBvcnRhbCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJQb3J0YWwoKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgICAgICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIHRoaXMubW91bnRQb3J0YWwoKTtcbiAgICAgICAgICAgICAgICAvLyBOT1RFOiBgUmVhY3RET00udW5zdGFibGVfcmVuZGVyU3VidHJlZUludG9Db250YWluZXJgIHRvIHN0b3JlIGludGVybWVkaWF0ZSBjb250ZXh0c1xuICAgICAgICAgICAgICAgIF9yZWFjdERvbTIuZGVmYXVsdC51bnN0YWJsZV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lcih0aGlzLCBjaGlsZCwgdGhpcy5wb3J0YWxOb2RlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQXR0YWNoZWRUb1BvcnRhbCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudW5tb3VudFBvcnRhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdtb3VudFBvcnRhbCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBtb3VudFBvcnRhbCgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wb3J0YWxOb2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3J0YWxOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQb3J0YWxSb290Tm9kZSgpLmFwcGVuZENoaWxkKHRoaXMucG9ydGFsTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3VubW91bnRQb3J0YWwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdW5tb3VudFBvcnRhbCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQXR0YWNoZWRUb1BvcnRhbCkge1xuICAgICAgICAgICAgICAgIF9yZWFjdERvbTIuZGVmYXVsdC51bm1vdW50Q29tcG9uZW50QXROb2RlKHRoaXMucG9ydGFsTm9kZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0F0dGFjaGVkVG9Qb3J0YWwgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnBvcnRhbE5vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFBvcnRhbFJvb3ROb2RlKCkucmVtb3ZlQ2hpbGQodGhpcy5wb3J0YWxOb2RlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcnRhbE5vZGUgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRQb3J0YWxSb290Tm9kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQb3J0YWxSb290Tm9kZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5ib2R5O1xuICAgICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBQb3J0YWw7XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBQb3J0YWw7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vcmVhY3QtaXNsYW5kcy9jb21wb25lbnRzL092ZXJsYXkvUG9ydGFsL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTk3XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90eXBlb2YyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZicpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfQ29tcG9uZW50MiA9IHJlcXVpcmUoJy4uL0NvbXBvbmVudCcpO1xuXG52YXIgX0NvbXBvbmVudDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db21wb25lbnQyKTtcblxudmFyIF9PdmVybGF5ID0gcmVxdWlyZSgnLi4vT3ZlcmxheScpO1xuXG52YXIgX092ZXJsYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfT3ZlcmxheSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIEZJWE1FKG5hcnFvQCk6IHRoaXMgaXMgb25seSB2YWxpZCBmb3IgdGhlbWUgaXNsYW5kc1xudmFyIE1BSU5fT0ZGU0VUID0gNTtcbnZhciBWSUVXUE9SVF9PRkZTRVQgPSAxMDtcbnZhciBWSUVXUE9SVF9BQ0NVUkFDWV9GQUNUT1IgPSAwLjk5O1xudmFyIERFRkFVTFRfRElSRUNUSU9OUyA9IFsnYm90dG9tLWxlZnQnLCAnYm90dG9tLWNlbnRlcicsICdib3R0b20tcmlnaHQnLCAndG9wLWxlZnQnLCAndG9wLWNlbnRlcicsICd0b3AtcmlnaHQnLCAncmlnaHQtdG9wJywgJ3JpZ2h0LWNlbnRlcicsICdyaWdodC1ib3R0b20nLCAnbGVmdC10b3AnLCAnbGVmdC1jZW50ZXInLCAnbGVmdC1ib3R0b20nXTtcblxudmFyIFBvcHVwID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShQb3B1cCwgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBQb3B1cChwcm9wcykge1xuICAgICAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBQb3B1cCk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShQb3B1cCkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZGlyZWN0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBsZWZ0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICB0b3A6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHpJbmRleDogMFxuICAgICAgICB9O1xuXG4gICAgICAgIF90aGlzLnNob3VsZFJlbmRlclRvT3ZlcmxheSA9IGZhbHNlO1xuXG4gICAgICAgIF90aGlzLm9uTGF5ZXJPcmRlckNoYW5nZSA9IF90aGlzLm9uTGF5ZXJPcmRlckNoYW5nZS5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMub25MYXllclJlcXVlc3RIaWRlID0gX3RoaXMub25MYXllclJlcXVlc3RIaWRlLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5vblZpZXdwb3J0UmVzaXplID0gX3RoaXMub25WaWV3cG9ydFJlc2l6ZS5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMub25WaWV3cG9ydFNjcm9sbCA9IF90aGlzLm9uVmlld3BvcnRTY3JvbGwuYmluZChfdGhpcyk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShQb3B1cCwgW3tcbiAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbFVwZGF0ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnNob3VsZFJlbmRlclRvT3ZlcmxheSAmJiBuZXh0UHJvcHMudmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvdWxkUmVuZGVyVG9PdmVybGF5ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50RGlkVXBkYXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNob3VsZFJlbmRlclRvT3ZlcmxheSAmJiB0aGlzLnByb3BzLnZpc2libGUgIT09IHByZXZQcm9wcy52aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVWaXNpYmxlQ2hhbmdlKHRoaXMucHJvcHMudmlzaWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVWaXNpYmxlQ2hhbmdlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNob3VsZFJlbmRlclRvT3ZlcmxheSkge1xuICAgICAgICAgICAgICAgIHZhciBzdHlsZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGhpcy5zdGF0ZS5sZWZ0LFxuICAgICAgICAgICAgICAgICAgICB0b3A6IHRoaXMuc3RhdGUudG9wLFxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IHRoaXMuc3RhdGUuekluZGV4XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgX092ZXJsYXkyLmRlZmF1bHQsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU6IHRoaXMucHJvcHMudmlzaWJsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVxdWVzdEhpZGU6IHRoaXMub25MYXllclJlcXVlc3RIaWRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25PcmRlckNoYW5nZTogdGhpcy5vbkxheWVyT3JkZXJDaGFuZ2VcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgcmVmOiAncG9wdXAnLCBjbGFzc05hbWU6IHRoaXMuY2xhc3NOYW1lKCksIHN0eWxlOiBzdHlsZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHRoaXMuY2xhc3NOYW1lKCkgfSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NsYXNzTmFtZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbGFzc05hbWUoKSB7XG4gICAgICAgICAgICB2YXIgY2xhc3NOYW1lID0gJ3BvcHVwJztcblxuICAgICAgICAgICAgdmFyIHRoZW1lID0gdGhpcy5wcm9wcy50aGVtZSB8fCB0aGlzLmNvbnRleHQudGhlbWU7XG4gICAgICAgICAgICBpZiAodGhlbWUpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gJyBwb3B1cF90aGVtZV8nICsgdGhlbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zaXplKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgcG9wdXBfc2l6ZV8nICsgdGhpcy5wcm9wcy5zaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgcG9wdXBfZGlyZWN0aW9uXycgKyB0aGlzLnN0YXRlLmRpcmVjdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gJyBwb3B1cF92aXNpYmxlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnNob3VsZFJlbmRlclRvT3ZlcmxheSkge1xuICAgICAgICAgICAgICAgIC8vIEZJWE1FKEBuYXJxbyk6IGBwb3B1cF9qc19pbml0ZWRgIG11c3QgYmUgc2V0IGZvciBDU1Mgb2YgYmVtLWNvbXBvbmVudHNcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gJyBwb3B1cF9qc19pbml0ZWQnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gJyAnICsgdGhpcy5wcm9wcy5jbGFzc05hbWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhbmRsZVZpc2libGVDaGFuZ2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlVmlzaWJsZUNoYW5nZSh2aXNpYmxlKSB7XG4gICAgICAgICAgICAvLyBOT1RFKEBuYXJxbyk6IHN1YnNjcmliZSB0byByZXNpemUvc2Nyb2xsIG9ubHkgaWYgcG9wdXAgY2FuIGJlIHJlcG9zaXRpb25lZCB3aXRoaW4gYGRpcmVjdGlvbnNgXG4gICAgICAgICAgICBpZiAodmlzaWJsZSAmJiB0aGlzLnByb3BzLmRpcmVjdGlvbnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uVmlld3BvcnRSZXNpemUpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uVmlld3BvcnRTY3JvbGwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblZpZXdwb3J0UmVzaXplKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblZpZXdwb3J0U2Nyb2xsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb25MYXllclJlcXVlc3RIaWRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uTGF5ZXJSZXF1ZXN0SGlkZShlLCByZWFzb24pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnZpc2libGUgJiYgdGhpcy5wcm9wcy5vblJlcXVlc3RIaWRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlYXNvbiA9PT0gJ2NsaWNrT3V0c2lkZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFuY2hvciA9IHRoaXMuZ2V0QW5jaG9yKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhbmNob3IgaW5zdGFuY2VvZiBFbGVtZW50ICYmIGFuY2hvci5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uUmVxdWVzdEhpZGUoZSwgcmVhc29uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb25MYXllck9yZGVyQ2hhbmdlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uTGF5ZXJPcmRlckNoYW5nZSh6SW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB6SW5kZXg6IHpJbmRleCB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb25WaWV3cG9ydFJlc2l6ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvblZpZXdwb3J0UmVzaXplKCkge1xuICAgICAgICAgICAgdGhpcy5yZXBvc2l0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uVmlld3BvcnRTY3JvbGwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25WaWV3cG9ydFNjcm9sbCgpIHtcbiAgICAgICAgICAgIHRoaXMucmVwb3NpdGlvbigpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZXBvc2l0aW9uJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlcG9zaXRpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy52aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgLy8gVE9ETyhAbmFycW8pOiBkb24ndCBjYWxsIERPTU5vZGUgbWVhc3VyZW1lbnRzIGluIGNhc2Ugbm90aGluZyBoYXMgY2hhbmdlZFxuICAgICAgICAgICAgICAgIHZhciBsYXlvdXQgPSB0aGlzLmNhbGNCZXN0TGF5b3V0UGFyYW1zKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkxheW91dCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uTGF5b3V0KHsgbGF5b3V0OiBsYXlvdXQgfSwgdGhpcy5wcm9wcyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IGxheW91dC5kaXJlY3Rpb247XG4gICAgICAgICAgICAgICAgdmFyIGxlZnQgPSBsYXlvdXQubGVmdDtcbiAgICAgICAgICAgICAgICB2YXIgdG9wID0gbGF5b3V0LnRvcDtcblxuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpcmVjdGlvbjogZGlyZWN0aW9uLCBsZWZ0OiBsZWZ0LCB0b3A6IHRvcCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0UG9wdXAnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UG9wdXAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5wb3B1cCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldEFuY2hvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBbmNob3IoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucHJvcHMuYW5jaG9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBhbmNob3IgPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMuYW5jaG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgYW5jaG9yID0gdGhpcy5wcm9wcy5hbmNob3IoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYW5jaG9yID0gdGhpcy5wcm9wcy5hbmNob3I7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhbmNob3IgaW5zdGFuY2VvZiBfQ29tcG9uZW50My5kZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZShhbmNob3IpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYW5jaG9yIHx8IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NhbGNCZXN0TGF5b3V0UGFyYW1zJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNhbGNCZXN0TGF5b3V0UGFyYW1zKCkge1xuICAgICAgICAgICAgdmFyIHZpZXdwb3J0ID0gdGhpcy5jYWxjVmlld3BvcnREaW1lbnNpb25zKCk7XG4gICAgICAgICAgICB2YXIgcG9wdXAgPSB0aGlzLmNhbGNQb3B1cERpbWVuc2lvbnMoKTtcbiAgICAgICAgICAgIHZhciBhbmNob3IgPSB0aGlzLmNhbGNBbmNob3JEaW1lbnNpb25zKCk7XG5cbiAgICAgICAgICAgIHZhciBpID0gMCxcbiAgICAgICAgICAgICAgICBiZXN0Vmlld3BvcnRGYWN0b3IgPSAwLFxuICAgICAgICAgICAgICAgIGJlc3REaXJlY3Rpb24gPSB2b2lkIDAsXG4gICAgICAgICAgICAgICAgYmVzdFBvcyA9IHZvaWQgMCxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSB2b2lkIDA7XG5cbiAgICAgICAgICAgIHdoaWxlIChkaXJlY3Rpb24gPSB0aGlzLnByb3BzLmRpcmVjdGlvbnNbaSsrXSkge1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uZC1hc3NpZ25cbiAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb24gPSB0aGlzLmNhbGNQb3B1cFBvc2l0aW9uKGRpcmVjdGlvbiwgYW5jaG9yLCBwb3B1cCk7XG4gICAgICAgICAgICAgICAgdmFyIHZpZXdwb3J0RmFjdG9yID0gdGhpcy5jYWxjVmlld3BvcnRGYWN0b3IocG9zaXRpb24sIHZpZXdwb3J0LCBwb3B1cCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMSB8fCB2aWV3cG9ydEZhY3RvciA+IGJlc3RWaWV3cG9ydEZhY3RvciB8fCAhYmVzdFZpZXdwb3J0RmFjdG9yICYmIHRoaXMuc3RhdGUuZGlyZWN0aW9uID09PSBkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgYmVzdERpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgYmVzdFZpZXdwb3J0RmFjdG9yID0gdmlld3BvcnRGYWN0b3I7XG4gICAgICAgICAgICAgICAgICAgIGJlc3RQb3MgPSBwb3NpdGlvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGJlc3RWaWV3cG9ydEZhY3RvciA+IFZJRVdQT1JUX0FDQ1VSQUNZX0ZBQ1RPUikgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGJlc3REaXJlY3Rpb25cbiAgICAgICAgICAgIH0sIGJlc3RQb3MpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjYWxjQW5jaG9yRGltZW5zaW9ucycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjYWxjQW5jaG9yRGltZW5zaW9ucygpIHtcbiAgICAgICAgICAgIHZhciBhbmNob3IgPSB0aGlzLmdldEFuY2hvcigpO1xuICAgICAgICAgICAgdmFyIGxlZnQgPSB2b2lkIDAsXG4gICAgICAgICAgICAgICAgdG9wID0gdm9pZCAwLFxuICAgICAgICAgICAgICAgIHdpZHRoID0gdm9pZCAwLFxuICAgICAgICAgICAgICAgIGhlaWdodCA9IHZvaWQgMDtcblxuICAgICAgICAgICAgaWYgKGFuY2hvciBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgYW5jaG9yUmVjdCA9IGFuY2hvci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICB2YXIgdmlld3BvcnRSZWN0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIGxlZnQgPSBhbmNob3JSZWN0LmxlZnQgLSB2aWV3cG9ydFJlY3QubGVmdDtcbiAgICAgICAgICAgICAgICB0b3AgPSBhbmNob3JSZWN0LnRvcCAtIHZpZXdwb3J0UmVjdC50b3A7XG4gICAgICAgICAgICAgICAgd2lkdGggPSBhbmNob3JSZWN0LndpZHRoO1xuICAgICAgICAgICAgICAgIGhlaWdodCA9IGFuY2hvclJlY3QuaGVpZ2h0O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhbmNob3IgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsZWZ0ID0gdG9wID0gaGVpZ2h0ID0gd2lkdGggPSAwO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgodHlwZW9mIGFuY2hvciA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShhbmNob3IpKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBsZWZ0ID0gYW5jaG9yLmxlZnQ7XG4gICAgICAgICAgICAgICAgdG9wID0gYW5jaG9yLnRvcDtcbiAgICAgICAgICAgICAgICB3aWR0aCA9IGhlaWdodCA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGVmdDogbGVmdCxcbiAgICAgICAgICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NhbGNWaWV3cG9ydERpbWVuc2lvbnMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY2FsY1ZpZXdwb3J0RGltZW5zaW9ucygpIHtcbiAgICAgICAgICAgIHZhciB0b3AgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICAgICAgICB2YXIgbGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldDtcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICB2YXIgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgICAgICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgICAgICAgICAgIGJvdHRvbTogdG9wICsgaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHJpZ2h0OiBsZWZ0ICsgd2lkdGhcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NhbGNWaWV3cG9ydEZhY3RvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjYWxjVmlld3BvcnRGYWN0b3IocG9zLCB2aWV3cG9ydCwgcG9wdXApIHtcbiAgICAgICAgICAgIHZhciB2aWV3cG9ydE9mZnNldCA9IHRoaXMucHJvcHMudmlld3BvcnRPZmZzZXQ7XG5cbiAgICAgICAgICAgIHZhciBpbnRlcnNlY3Rpb25MZWZ0ID0gTWF0aC5tYXgocG9zLmxlZnQsIHZpZXdwb3J0LmxlZnQgKyB2aWV3cG9ydE9mZnNldCk7XG4gICAgICAgICAgICB2YXIgaW50ZXJzZWN0aW9uUmlnaHQgPSBNYXRoLm1pbihwb3MubGVmdCArIHBvcHVwLndpZHRoLCB2aWV3cG9ydC5yaWdodCAtIHZpZXdwb3J0T2Zmc2V0KTtcbiAgICAgICAgICAgIHZhciBpbnRlcnNlY3Rpb25Ub3AgPSBNYXRoLm1heChwb3MudG9wLCB2aWV3cG9ydC50b3AgKyB2aWV3cG9ydE9mZnNldCk7XG4gICAgICAgICAgICB2YXIgaW50ZXJzZWN0aW9uQm90dG9tID0gTWF0aC5taW4ocG9zLnRvcCArIHBvcHVwLmhlaWdodCwgdmlld3BvcnQuYm90dG9tIC0gdmlld3BvcnRPZmZzZXQpO1xuXG4gICAgICAgICAgICBpZiAoaW50ZXJzZWN0aW9uTGVmdCA8IGludGVyc2VjdGlvblJpZ2h0ICYmIGludGVyc2VjdGlvblRvcCA8IGludGVyc2VjdGlvbkJvdHRvbSkge1xuICAgICAgICAgICAgICAgIC8vIGhhcyBpbnRlcnNlY3Rpb25cbiAgICAgICAgICAgICAgICByZXR1cm4gKGludGVyc2VjdGlvblJpZ2h0IC0gaW50ZXJzZWN0aW9uTGVmdCkgKiAoaW50ZXJzZWN0aW9uQm90dG9tIC0gaW50ZXJzZWN0aW9uVG9wKSAvIHBvcHVwLmFyZWE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjYWxjUG9wdXBEaW1lbnNpb25zJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNhbGNQb3B1cERpbWVuc2lvbnMoKSB7XG4gICAgICAgICAgICB2YXIgcG9wdXAgPSB0aGlzLmdldFBvcHVwKCk7XG4gICAgICAgICAgICB2YXIgd2lkdGggPSAwLFxuICAgICAgICAgICAgICAgIGhlaWdodCA9IDA7XG5cbiAgICAgICAgICAgIGlmIChwb3B1cCkge1xuICAgICAgICAgICAgICAgIHdpZHRoID0gcG9wdXAub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gcG9wdXAub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICAgICAgICBhcmVhOiB3aWR0aCAqIGhlaWdodFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY2FsY1BvcHVwUG9zaXRpb24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY2FsY1BvcHVwUG9zaXRpb24oZGlyZWN0aW9uLCBhbmNob3IsIHBvcHVwKSB7XG4gICAgICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgICAgIHZhciBtYWluT2Zmc2V0ID0gX3Byb3BzLm1haW5PZmZzZXQ7XG4gICAgICAgICAgICB2YXIgc2Vjb25kYXJ5T2Zmc2V0ID0gX3Byb3BzLnNlY29uZGFyeU9mZnNldDtcblxuICAgICAgICAgICAgdmFyIHRvcCA9IHZvaWQgMCxcbiAgICAgICAgICAgICAgICBsZWZ0ID0gdm9pZCAwO1xuXG4gICAgICAgICAgICBpZiAoY2hlY2tNYWluRGlyZWN0aW9uKGRpcmVjdGlvbiwgJ2JvdHRvbScpKSB7XG4gICAgICAgICAgICAgICAgdG9wID0gYW5jaG9yLnRvcCArIGFuY2hvci5oZWlnaHQgKyBtYWluT2Zmc2V0O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjaGVja01haW5EaXJlY3Rpb24oZGlyZWN0aW9uLCAndG9wJykpIHtcbiAgICAgICAgICAgICAgICB0b3AgPSBhbmNob3IudG9wIC0gcG9wdXAuaGVpZ2h0IC0gbWFpbk9mZnNldDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hlY2tNYWluRGlyZWN0aW9uKGRpcmVjdGlvbiwgJ2xlZnQnKSkge1xuICAgICAgICAgICAgICAgIGxlZnQgPSBhbmNob3IubGVmdCAtIHBvcHVwLndpZHRoIC0gbWFpbk9mZnNldDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hlY2tNYWluRGlyZWN0aW9uKGRpcmVjdGlvbiwgJ3JpZ2h0JykpIHtcbiAgICAgICAgICAgICAgICBsZWZ0ID0gYW5jaG9yLmxlZnQgKyBhbmNob3Iud2lkdGggKyBtYWluT2Zmc2V0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2hlY2tTZWNvbmRhcnlEaXJlY3Rpb24oZGlyZWN0aW9uLCAncmlnaHQnKSkge1xuICAgICAgICAgICAgICAgIGxlZnQgPSBhbmNob3IubGVmdCArIGFuY2hvci53aWR0aCAtIHBvcHVwLndpZHRoIC0gc2Vjb25kYXJ5T2Zmc2V0O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjaGVja1NlY29uZGFyeURpcmVjdGlvbihkaXJlY3Rpb24sICdsZWZ0JykpIHtcbiAgICAgICAgICAgICAgICBsZWZ0ID0gYW5jaG9yLmxlZnQgKyBzZWNvbmRhcnlPZmZzZXQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNoZWNrU2Vjb25kYXJ5RGlyZWN0aW9uKGRpcmVjdGlvbiwgJ2JvdHRvbScpKSB7XG4gICAgICAgICAgICAgICAgdG9wID0gYW5jaG9yLnRvcCArIGFuY2hvci5oZWlnaHQgLSBwb3B1cC5oZWlnaHQgLSBzZWNvbmRhcnlPZmZzZXQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNoZWNrU2Vjb25kYXJ5RGlyZWN0aW9uKGRpcmVjdGlvbiwgJ3RvcCcpKSB7XG4gICAgICAgICAgICAgICAgdG9wID0gYW5jaG9yLnRvcCArIHNlY29uZGFyeU9mZnNldDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hlY2tTZWNvbmRhcnlEaXJlY3Rpb24oZGlyZWN0aW9uLCAnY2VudGVyJykpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tNYWluRGlyZWN0aW9uKGRpcmVjdGlvbiwgJ3RvcCcsICdib3R0b20nKSkge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gYW5jaG9yLmxlZnQgKyBhbmNob3Iud2lkdGggLyAyIC0gcG9wdXAud2lkdGggLyAyO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hlY2tNYWluRGlyZWN0aW9uKGRpcmVjdGlvbiwgJ2xlZnQnLCAncmlnaHQnKSkge1xuICAgICAgICAgICAgICAgICAgICB0b3AgPSBhbmNob3IudG9wICsgYW5jaG9yLmhlaWdodCAvIDIgLSBwb3B1cC5oZWlnaHQgLyAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGJvdHRvbSA9IHRvcCArIHBvcHVwLmhlaWdodDtcbiAgICAgICAgICAgIHZhciByaWdodCA9IGxlZnQgKyBwb3B1cC53aWR0aDtcblxuICAgICAgICAgICAgcmV0dXJuIHsgdG9wOiB0b3AsIGxlZnQ6IGxlZnQsIGJvdHRvbTogYm90dG9tLCByaWdodDogcmlnaHQgfTtcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gUG9wdXA7XG59KF9Db21wb25lbnQzLmRlZmF1bHQpO1xuXG5mdW5jdGlvbiBjaGVja01haW5EaXJlY3Rpb24oZGlyZWN0aW9uLCBtYWluRGlyZWN0aW9uMSwgbWFpbkRpcmVjdGlvbjIpIHtcbiAgICByZXR1cm4gIWRpcmVjdGlvbi5pbmRleE9mKG1haW5EaXJlY3Rpb24xKSB8fCBtYWluRGlyZWN0aW9uMiAmJiAhZGlyZWN0aW9uLmluZGV4T2YobWFpbkRpcmVjdGlvbjIpO1xufVxuXG5mdW5jdGlvbiBjaGVja1NlY29uZGFyeURpcmVjdGlvbihkaXJlY3Rpb24sIHNlY29uZGFyeURpcmVjdGlvbikge1xuICAgIHJldHVybiB+ZGlyZWN0aW9uLmluZGV4T2YoJy0nICsgc2Vjb25kYXJ5RGlyZWN0aW9uKTtcbn1cblxuUG9wdXAucHJvcHNUeXBlcyA9IHtcbiAgICB0aGVtZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2l6ZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgdmlzaWJsZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgYW5jaG9yOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5lbGVtZW50LCBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnNoYXBlKHsgbGVmdDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5udW1iZXIsIHRvcDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5udW1iZXIgfSksIF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuZnVuY10pLFxuICAgIGRpcmVjdGlvbnM6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMub25lT2YoREVGQVVMVF9ESVJFQ1RJT05TKSxcbiAgICBtYWluT2Zmc2V0OiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLm51bWJlcixcbiAgICBzZWNvbmRhcnlPZmZzZXQ6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIG9uUmVxdWVzdEhpZGU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvbkxheW91dDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5mdW5jXG59O1xuXG5Qb3B1cC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgZGlyZWN0aW9uczogREVGQVVMVF9ESVJFQ1RJT05TLFxuICAgIHZpc2libGU6IGZhbHNlLFxuICAgIG1haW5PZmZzZXQ6IE1BSU5fT0ZGU0VULFxuICAgIHNlY29uZGFyeU9mZnNldDogMCxcbiAgICB2aWV3cG9ydE9mZnNldDogVklFV1BPUlRfT0ZGU0VULFxuICAgIG9uUmVxdWVzdEhpZGU6IGZ1bmN0aW9uIG9uUmVxdWVzdEhpZGUoKSB7fVxufTtcblxuUG9wdXAuY29udGV4dFR5cGVzID0ge1xuICAgIHRoZW1lOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUG9wdXA7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vcmVhY3QtaXNsYW5kcy9jb21wb25lbnRzL1BvcHVwL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTk4XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9Db21wb25lbnQyID0gcmVxdWlyZSgnLi4vQ29tcG9uZW50Jyk7XG5cbnZhciBfQ29tcG9uZW50MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbXBvbmVudDIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgUHJvZ3Jlc3NCYXIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKFByb2dyZXNzQmFyLCBfQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIFByb2dyZXNzQmFyKCkge1xuICAgICAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBQcm9ncmVzc0Jhcik7XG4gICAgICAgIHJldHVybiAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKFByb2dyZXNzQmFyKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShQcm9ncmVzc0JhciwgW3tcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvcHMudmFsdWUgKyAnJSc7XG5cbiAgICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogdGhpcy5jbGFzc05hbWUoKSwgcm9sZTogJ3Byb2dyZXNzYmFyJywgJ2FyaWEtdmFsdWVub3cnOiAnJyArIHZhbHVlIH0sXG4gICAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiAncHJvZ3Jlc3NiYXJfX2JhcicsIHN0eWxlOiB7IHdpZHRoOiAnJyArIHZhbHVlIH0gfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NsYXNzTmFtZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbGFzc05hbWUoKSB7XG4gICAgICAgICAgICB2YXIgY2xhc3NOYW1lID0gJ3Byb2dyZXNzYmFyJztcblxuICAgICAgICAgICAgdmFyIHRoZW1lID0gdGhpcy5wcm9wcy50aGVtZSB8fCB0aGlzLmNvbnRleHQudGhlbWU7XG4gICAgICAgICAgICBpZiAodGhlbWUpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gJyBwcm9ncmVzc2Jhcl90aGVtZV8nICsgdGhlbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zaXplKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgcHJvZ3Jlc3NiYXJfc2l6ZV8nICsgdGhpcy5wcm9wcy5zaXplO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gJyAnICsgdGhpcy5wcm9wcy5jbGFzc05hbWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIFByb2dyZXNzQmFyO1xufShfQ29tcG9uZW50My5kZWZhdWx0KTtcblxuUHJvZ3Jlc3NCYXIuY29udGV4dFR5cGVzID0ge1xuICAgIHRoZW1lOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuUHJvZ3Jlc3NCYXIuZGVmYXVsdFByb3BzID0ge1xuICAgIHZhbHVlOiAwXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBQcm9ncmVzc0Jhcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9yZWFjdC1pc2xhbmRzL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxOTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9Db250cm9sMiA9IHJlcXVpcmUoJy4uL0NvbnRyb2wnKTtcblxudmFyIF9Db250cm9sMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbnRyb2wyKTtcblxudmFyIF9CdXR0b24gPSByZXF1aXJlKCcuLi9CdXR0b24nKTtcblxudmFyIF9CdXR0b24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQnV0dG9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFJhZGlvID0gZnVuY3Rpb24gKF9Db250cm9sKSB7XG4gICAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoUmFkaW8sIF9Db250cm9sKTtcblxuICAgIGZ1bmN0aW9uIFJhZGlvKHByb3BzKSB7XG4gICAgICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIFJhZGlvKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKFJhZGlvKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgICAgX3RoaXMub25CdXR0b25DbGljayA9IF90aGlzLm9uQnV0dG9uQ2xpY2suYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLm9uQnV0dG9uRm9jdXNDaGFuZ2UgPSBfdGhpcy5vbkJ1dHRvbkZvY3VzQ2hhbmdlLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5vbkJ1dHRvbkhvdmVyQ2hhbmdlID0gX3RoaXMub25CdXR0b25Ib3ZlckNoYW5nZS5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMub25Db250cm9sQ2hhbmdlID0gX3RoaXMub25Db250cm9sQ2hhbmdlLmJpbmQoX3RoaXMpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoUmFkaW8sIFt7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgICAgIHZhciBuYW1lID0gX3Byb3BzLm5hbWU7XG4gICAgICAgICAgICB2YXIgdGhlbWUgPSBfcHJvcHMudGhlbWU7XG4gICAgICAgICAgICB2YXIgc2l6ZSA9IF9wcm9wcy5zaXplO1xuICAgICAgICAgICAgdmFyIHR5cGUgPSBfcHJvcHMudHlwZTtcbiAgICAgICAgICAgIHZhciBjaGVja2VkID0gX3Byb3BzLmNoZWNrZWQ7XG4gICAgICAgICAgICB2YXIgZGlzYWJsZWQgPSBfcHJvcHMuZGlzYWJsZWQ7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBfcHJvcHMudmFsdWU7XG4gICAgICAgICAgICB2YXIgZm9jdXNlZCA9IHRoaXMuc3RhdGUuZm9jdXNlZDtcblxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiB0aGlzLmNsYXNzTmFtZSgpIH0sXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQgJiYgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgeyB0eXBlOiAnaGlkZGVuJywgbmFtZTogbmFtZSwgdmFsdWU6IHZhbHVlLCBkaXNhYmxlZDogZGlzYWJsZWQgfSksXG4gICAgICAgICAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgX0J1dHRvbjIuZGVmYXVsdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdGhlbWU6IHRoZW1lLCBzaXplOiBzaXplLCB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBjaGVja2VkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzZWQ6IGZvY3VzZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Gb2N1c0NoYW5nZTogdGhpcy5vbkJ1dHRvbkZvY3VzQ2hhbmdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSG92ZXJDaGFuZ2U6IHRoaXMub25CdXR0b25Ib3ZlckNoYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiB0aGlzLm9uQnV0dG9uQ2xpY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoeyBjbGFzc05hbWU6IHRoaXMuY2xhc3NOYW1lKCkgfSwgdGhpcy5nZXRDb250cm9sSGFuZGxlcnMoKSksXG4gICAgICAgICAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdyYWRpb19fYm94JyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgeyByZWY6ICdjb250cm9sJywgY2xhc3NOYW1lOiAncmFkaW9fX2NvbnRyb2wnLCB0eXBlOiAncmFkaW8nLCBhdXRvQ29tcGxldGU6ICdvZmYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBjaGVja2VkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uQ29udHJvbENoYW5nZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3JhZGlvX190ZXh0Jywgcm9sZTogJ3ByZXNlbnRhdGlvbicgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NsYXNzTmFtZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbGFzc05hbWUoKSB7XG4gICAgICAgICAgICB2YXIgY2xhc3NOYW1lID0gJ3JhZGlvJztcblxuICAgICAgICAgICAgdmFyIHRoZW1lID0gdGhpcy5wcm9wcy50aGVtZSB8fCB0aGlzLmNvbnRleHQudGhlbWU7XG4gICAgICAgICAgICBpZiAodGhlbWUpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gJyByYWRpb190aGVtZV8nICsgdGhlbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zaXplKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgcmFkaW9fc2l6ZV8nICsgdGhpcy5wcm9wcy5zaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMudHlwZSkge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnIHJhZGlvX3R5cGVfJyArIHRoaXMucHJvcHMudHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgcmFkaW9fZGlzYWJsZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnIHJhZGlvX2NoZWNrZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuaG92ZXJlZCkge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnIHJhZGlvX2hvdmVyZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZm9jdXNlZCkge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnIHJhZGlvX2ZvY3VzZWQnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gJyAnICsgdGhpcy5wcm9wcy5jbGFzc05hbWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uQ29udHJvbENoYW5nZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNvbnRyb2xDaGFuZ2UoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCB8fCB0aGlzLnByb3BzLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hlY2sodHJ1ZSwgdGhpcy5wcm9wcyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uQnV0dG9uRm9jdXNDaGFuZ2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25CdXR0b25Gb2N1c0NoYW5nZShmb2N1c2VkKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZDogZm9jdXNlZCB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb25CdXR0b25Ib3ZlckNoYW5nZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbkJ1dHRvbkhvdmVyQ2hhbmdlKGhvdmVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBob3ZlcmVkOiBob3ZlcmVkIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvbkJ1dHRvbkNsaWNrJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uQnV0dG9uQ2xpY2soZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25DbGljaykge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25DbGljayhlLCB0aGlzLnByb3BzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMub25Db250cm9sQ2hhbmdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIFJhZGlvO1xufShfQ29udHJvbDMuZGVmYXVsdCk7XG5cblJhZGlvLnByb3BUeXBlcyA9IHtcbiAgICB0aGVtZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2l6ZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5vbmVPZihbJ3MnLCAnbScsICdsJywgJ3hsJ10pLFxuICAgIHR5cGU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRpc2FibGVkOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hlY2tlZDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICAgIHZhbHVlOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmFueSxcbiAgICBvbkNsaWNrOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DaGVjazogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5mdW5jXG59O1xuXG5SYWRpby5kZWZhdWx0UHJvcHMgPSB7XG4gICAgb25DaGVjazogZnVuY3Rpb24gb25DaGVjaygpIHt9XG59O1xuXG5SYWRpby5jb250ZXh0VHlwZXMgPSB7XG4gICAgdGhlbWU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBSYWRpbztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9yZWFjdC1pc2xhbmRzL2NvbXBvbmVudHMvUmFkaW8vaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyMDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfQ29tcG9uZW50MiA9IHJlcXVpcmUoJy4uL0NvbXBvbmVudCcpO1xuXG52YXIgX0NvbXBvbmVudDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db21wb25lbnQyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFJhZGlvR3JvdXAgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKFJhZGlvR3JvdXAsIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gUmFkaW9Hcm91cChwcm9wcykge1xuICAgICAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBSYWRpb0dyb3VwKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKFJhZGlvR3JvdXApLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgICBfdGhpcy5vbkNoaWxkQ2hlY2sgPSBfdGhpcy5vbkNoaWxkQ2hlY2suYmluZChfdGhpcyk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShSYWRpb0dyb3VwLCBbe1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgICAgICAgdmFyIHRoZW1lID0gX3Byb3BzLnRoZW1lO1xuICAgICAgICAgICAgdmFyIHNpemUgPSBfcHJvcHMuc2l6ZTtcbiAgICAgICAgICAgIHZhciB0eXBlID0gX3Byb3BzLnR5cGU7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IF9wcm9wcy5uYW1lO1xuICAgICAgICAgICAgdmFyIGRpc2FibGVkID0gX3Byb3BzLmRpc2FibGVkO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gX3Byb3BzLnZhbHVlO1xuXG5cbiAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoZWNrZWQgPSBjaGlsZC5wcm9wcy52YWx1ZSA9PT0gdmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe1xuICAgICAgICAgICAgICAgICAgICB0aGVtZTogdGhlbWUsXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IHNpemUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkXG4gICAgICAgICAgICAgICAgfSwgY2hpbGQucHJvcHMsIHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogY2hlY2tlZCxcbiAgICAgICAgICAgICAgICAgICAgb25DaGVjazogX3RoaXMyLm9uQ2hpbGRDaGVja1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiB0aGlzLmNsYXNzTmFtZSgpIH0sXG4gICAgICAgICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NsYXNzTmFtZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbGFzc05hbWUoKSB7XG4gICAgICAgICAgICB2YXIgY2xhc3NOYW1lID0gJ3JhZGlvLWdyb3VwIGNvbnRyb2wtZ3JvdXAnO1xuXG4gICAgICAgICAgICB2YXIgdGhlbWUgPSB0aGlzLnByb3BzLnRoZW1lIHx8IHRoaXMuY29udGV4dC50aGVtZTtcbiAgICAgICAgICAgIGlmICh0aGVtZSkge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnIHJhZGlvLWdyb3VwX3RoZW1lXycgKyB0aGVtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNpemUpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gJyByYWRpby1ncm91cF9zaXplXycgKyB0aGlzLnByb3BzLnNpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgcmFkaW8tZ3JvdXBfdHlwZV8nICsgdGhpcy5wcm9wcy50eXBlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gJyAnICsgdGhpcy5wcm9wcy5jbGFzc05hbWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uQ2hpbGRDaGVjaycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNoaWxkQ2hlY2soXywgcmFkaW9Qcm9wcykge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gcmFkaW9Qcm9wcy52YWx1ZTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5wcm9wcy52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUsIHRoaXMucHJvcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBSYWRpb0dyb3VwO1xufShfQ29tcG9uZW50My5kZWZhdWx0KTtcblxuUmFkaW9Hcm91cC5jb250ZXh0VHlwZXMgPSB7XG4gICAgdGhlbWU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5SYWRpb0dyb3VwLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoKSB7fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSYWRpb0dyb3VwO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9yZWFjdC1pc2xhbmRzL2NvbXBvbmVudHMvUmFkaW9Hcm91cC9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDIwMVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfQ29tcG9uZW50MiA9IHJlcXVpcmUoJy4uL0NvbXBvbmVudCcpO1xuXG52YXIgX0NvbXBvbmVudDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db21wb25lbnQyKTtcblxudmFyIF9CdXR0b24gPSByZXF1aXJlKCcuLi9CdXR0b24nKTtcblxudmFyIF9CdXR0b24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQnV0dG9uKTtcblxudmFyIF9Qb3B1cCA9IHJlcXVpcmUoJy4uL1BvcHVwJyk7XG5cbnZhciBfUG9wdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUG9wdXApO1xuXG52YXIgX01lbnUgPSByZXF1aXJlKCcuLi9NZW51Jyk7XG5cbnZhciBfTWVudTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9NZW51KTtcblxudmFyIF9JY29uID0gcmVxdWlyZSgnLi4vSWNvbicpO1xuXG52YXIgX0ljb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSWNvbik7XG5cbnZhciBfR3JvdXAgPSByZXF1aXJlKCcuLi9Hcm91cCcpO1xuXG52YXIgX0dyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0dyb3VwKTtcblxudmFyIF9JdGVtID0gcmVxdWlyZSgnLi4vSXRlbScpO1xuXG52YXIgX0l0ZW0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSXRlbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBfcmVmID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0ljb24yLmRlZmF1bHQsIHsgY2xhc3NOYW1lOiAnc2VsZWN0X190aWNrJyB9KTtcblxudmFyIFNlbGVjdCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoU2VsZWN0LCBfQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIFNlbGVjdChwcm9wcykge1xuICAgICAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBTZWxlY3QpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoU2VsZWN0KS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBtZW51SGVpZ2h0OiBudWxsLFxuICAgICAgICAgICAgbWVudUZvY3VzZWQ6IGZhbHNlLFxuICAgICAgICAgICAgcG9wdXBWaXNpYmxlOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIF90aGlzLl93YXNQb3B1cFZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuX3Nob3VsZFJlc3RvcmVCdXR0b25Gb2N1cyA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5fcHJldmVudFRyYXBNZW51Rm9jdXMgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuX2NhY2hlZENoaWxkcmVuID0gbnVsbDtcblxuICAgICAgICBfdGhpcy5vbkJ1dHRvbkNsaWNrID0gX3RoaXMub25CdXR0b25DbGljay5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMub25CdXR0b25LZXlEb3duID0gX3RoaXMub25CdXR0b25LZXlEb3duLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5vbk1lbnVDaGFuZ2UgPSBfdGhpcy5vbk1lbnVDaGFuZ2UuYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLm9uTWVudUZvY3VzQ2hhbmdlID0gX3RoaXMub25NZW51Rm9jdXNDaGFuZ2UuYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLm9uTWVudUl0ZW1DbGljayA9IF90aGlzLm9uTWVudUl0ZW1DbGljay5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMub25NZW51S2V5RG93biA9IF90aGlzLm9uTWVudUtleURvd24uYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLm9uUG9wdXBSZXF1ZXN0SGlkZSA9IF90aGlzLm9uUG9wdXBSZXF1ZXN0SGlkZS5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMub25Qb3B1cExheW91dCA9IF90aGlzLm9uUG9wdXBMYXlvdXQuYmluZChfdGhpcyk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShTZWxlY3QsIFt7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChuZXh0UHJvcHMuY2hpbGRyZW4gIT09IHRoaXMucHJvcHMuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZWRDaGlsZHJlbiA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxVcGRhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVwZGF0ZShfLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgICAgIGlmIChuZXh0U3RhdGUucG9wdXBWaXNpYmxlICE9PSB0aGlzLnN0YXRlLnBvcHVwVmlzaWJsZSAmJiAhbmV4dFN0YXRlLnBvcHVwVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3dhc1BvcHVwVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZW51Rm9jdXNlZDogZmFsc2UgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgdGhpcy5fc2hvdWxkUmVzdG9yZUJ1dHRvbkZvY3VzID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9wcmV2ZW50VHJhcE1lbnVGb2N1cyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAvLyBGSVhNRShuYXJxb0ApOiBhbiB1Z2x5IHRyaWNrIHRvIHByZXZlbnQgRE9NLWZvY3VzIGZyb20ganVtcGluZyB0byB0aGUgYm90dG9tIG9mIHRoZSBwYWdlIG9uIGZpcnN0IG9wZW5cbiAgICAgICAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL25hcnFvL3JlYWN0LWlzbGFuZHMvaXNzdWVzLzQxXG4gICAgICAgICAgICBpZiAoIXRoaXMuX3dhc1BvcHVwVmlzaWJsZSAmJiB0aGlzLnN0YXRlLnBvcHVwVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3dhc1BvcHVwVmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7IG1lbnVGb2N1c2VkOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICBfdGhpczIudHJhcE1lbnVGb2N1cygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwb3B1cFZpc2libGU6IGZhbHNlIH0pO1xuICAgICAgICAgICAgdGhpcy5fY2FjaGVkQ2hpbGRyZW4gPSBudWxsO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiB0aGlzLmNsYXNzTmFtZSgpIH0sXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJJbnB1dHMoKSxcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckJ1dHRvbigpLFxuICAgICAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBfUG9wdXAyLmRlZmF1bHQsXG4gICAgICAgICAgICAgICAgICAgIHsgdGhlbWU6IHRoaXMucHJvcHMudGhlbWUsIHNpemU6IHRoaXMucHJvcHMuc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvcjogdGhpcy5yZWZzLmJ1dHRvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbnM6IFsnYm90dG9tLWxlZnQnLCAnYm90dG9tLXJpZ2h0JywgJ3RvcC1sZWZ0JywgJ3RvcC1yaWdodCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZTogdGhpcy5zdGF0ZS5wb3B1cFZpc2libGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkxheW91dDogdGhpcy5vblBvcHVwTGF5b3V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgb25SZXF1ZXN0SGlkZTogdGhpcy5vblBvcHVwUmVxdWVzdEhpZGVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJNZW51KClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXJCdXR0b25UZXh0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckJ1dHRvblRleHQoKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRJdGVtcygpLnJlZHVjZShmdW5jdGlvbiAocmVzLCBpdGVtKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmluZGV4T2YoaXRlbS5wcm9wcy52YWx1ZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5wdXNoKF9Db21wb25lbnQzLmRlZmF1bHQudGV4dFZhbHVlKGl0ZW0pKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5wdXNoKGl0ZW0ucHJvcHMuY2hlY2tlZFRleHQgfHwgX0NvbXBvbmVudDMuZGVmYXVsdC50ZXh0VmFsdWUoaXRlbSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICB9LCBbXSkuam9pbignLCAnKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyQnV0dG9uJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckJ1dHRvbigpIHtcbiAgICAgICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgICAgICAgdmFyIHRoZW1lID0gX3Byb3BzLnRoZW1lO1xuICAgICAgICAgICAgdmFyIHNpemUgPSBfcHJvcHMuc2l6ZTtcbiAgICAgICAgICAgIHZhciBkaXNhYmxlZCA9IF9wcm9wcy5kaXNhYmxlZDtcbiAgICAgICAgICAgIHZhciBtb2RlID0gX3Byb3BzLm1vZGU7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBfcHJvcHMudmFsdWU7XG5cbiAgICAgICAgICAgIHZhciBmb2N1c2VkID0gIWRpc2FibGVkICYmIHRoaXMuX3Nob3VsZFJlc3RvcmVCdXR0b25Gb2N1cyA/IHRydWUgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgY2hlY2tlZCA9IChtb2RlID09PSAnY2hlY2snIHx8IG1vZGUgPT09ICdyYWRpby1jaGVjaycpICYmIEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA+IDA7XG5cbiAgICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBfQnV0dG9uMi5kZWZhdWx0LFxuICAgICAgICAgICAgICAgIHsgcmVmOiAnYnV0dG9uJywgdGhlbWU6IHRoZW1lLCBzaXplOiBzaXplLCBjbGFzc05hbWU6ICdzZWxlY3RfX2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogY2hlY2tlZCxcbiAgICAgICAgICAgICAgICAgICAgZm9jdXNlZDogZm9jdXNlZCxcbiAgICAgICAgICAgICAgICAgICAgb25DbGljazogdGhpcy5vbkJ1dHRvbkNsaWNrLFxuICAgICAgICAgICAgICAgICAgICBvbktleURvd246IHRoaXMub25CdXR0b25LZXlEb3duXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckJ1dHRvblRleHQoKSB8fCB0aGlzLnByb3BzLnBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgICAgIF9yZWZcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlck1lbnUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyTWVudSgpIHtcbiAgICAgICAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcztcbiAgICAgICAgICAgIHZhciB0aGVtZSA9IF9wcm9wczIudGhlbWU7XG4gICAgICAgICAgICB2YXIgc2l6ZSA9IF9wcm9wczIuc2l6ZTtcbiAgICAgICAgICAgIHZhciBkaXNhYmxlZCA9IF9wcm9wczIuZGlzYWJsZWQ7XG4gICAgICAgICAgICB2YXIgbW9kZSA9IF9wcm9wczIubW9kZTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IF9wcm9wczIudmFsdWU7XG4gICAgICAgICAgICB2YXIgX3N0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgICAgIHZhciBtZW51SGVpZ2h0ID0gX3N0YXRlLm1lbnVIZWlnaHQ7XG4gICAgICAgICAgICB2YXIgbWVudUZvY3VzZWQgPSBfc3RhdGUubWVudUZvY3VzZWQ7XG4gICAgICAgICAgICB2YXIgcG9wdXBWaXNpYmxlID0gX3N0YXRlLnBvcHVwVmlzaWJsZTtcblxuICAgICAgICAgICAgdmFyIGZvY3VzZWQgPSBwb3B1cFZpc2libGUgJiYgbWVudUZvY3VzZWQ7XG4gICAgICAgICAgICB2YXIgdGFiSW5kZXggPSAtMTtcblxuICAgICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIF9NZW51Mi5kZWZhdWx0LFxuICAgICAgICAgICAgICAgIHsgcmVmOiAnbWVudScsIHRoZW1lOiB0aGVtZSwgc2l6ZTogc2l6ZSwgY2xhc3NOYW1lOiAnc2VsZWN0X19tZW51JyxcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogbW9kZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleDogdGFiSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgICAgICAgICAgICAgZm9jdXNlZDogZm9jdXNlZCxcbiAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBtZW51SGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICBvbkl0ZW1DbGljazogdGhpcy5vbk1lbnVJdGVtQ2xpY2ssXG4gICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bjogdGhpcy5vbk1lbnVLZXlEb3duLFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vbk1lbnVDaGFuZ2UsXG4gICAgICAgICAgICAgICAgICAgIG9uRm9jdXNDaGFuZ2U6IHRoaXMub25NZW51Rm9jdXNDaGFuZ2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcklucHV0cycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJJbnB1dHMoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgbmFtZSA9IHRoaXMucHJvcHMubmFtZTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMudmFsdWUubWFwKGZ1bmN0aW9uICh2YWx1ZSwgaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7IHR5cGU6ICdoaWRkZW4nLCBrZXk6ICdpbnB1dCcgKyBpLCBuYW1lOiBuYW1lLCB2YWx1ZTogdmFsdWUgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY2xhc3NOYW1lJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsYXNzTmFtZSgpIHtcbiAgICAgICAgICAgIHZhciBjbGFzc05hbWUgPSAnc2VsZWN0JztcblxuICAgICAgICAgICAgdmFyIHRoZW1lID0gdGhpcy5wcm9wcy50aGVtZSB8fCB0aGlzLmNvbnRleHQudGhlbWU7XG4gICAgICAgICAgICBpZiAodGhlbWUpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gJyBzZWxlY3RfdGhlbWVfJyArIHRoZW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc2l6ZSkge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnIHNlbGVjdF9zaXplXycgKyB0aGlzLnByb3BzLnNpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5tb2RlKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgc2VsZWN0X21vZGVfJyArIHRoaXMucHJvcHMubW9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgc2VsZWN0X2Rpc2FibGVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnBvcHVwVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnIHNlbGVjdF9vcGVuZWQnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gJyAnICsgdGhpcy5wcm9wcy5jbGFzc05hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRJdGVtcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJdGVtcygpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2NhY2hlZENoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW1zID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLmZvckVhY2goX3RoaXMzLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfQ29tcG9uZW50My5kZWZhdWx0LmlzKGNoaWxkLCBfSXRlbTIuZGVmYXVsdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoX0NvbXBvbmVudDMuZGVmYXVsdC5pcyhjaGlsZCwgX0dyb3VwMi5kZWZhdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICDQn9GA0LXQtNC/0L7Qu9Cw0LPQsNC10LwsINGH0YLQviDQvdC40YfQtdCz0L4sINC60YDQvtC80LUgSXRlbSDQstC90YPRgtGA0LggR3JvdXAg0YPQttC1INC90LXRgi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcyA9IGl0ZW1zLmNvbmNhdChfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4udG9BcnJheShjaGlsZC5wcm9wcy5jaGlsZHJlbikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBfdGhpczMuX2NhY2hlZENoaWxkcmVuID0gaXRlbXM7XG4gICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlZENoaWxkcmVuO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRNZW51JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldE1lbnUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWZzLm1lbnU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3RyYXBNZW51Rm9jdXMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdHJhcE1lbnVGb2N1cygpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fcHJldmVudFRyYXBNZW51Rm9jdXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldE1lbnUoKS5jb21wb25lbnRXaWxsR2FpbkZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uQnV0dG9uQ2xpY2snLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25CdXR0b25DbGljaygpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwb3B1cFZpc2libGU6ICF0aGlzLnN0YXRlLnBvcHVwVmlzaWJsZSB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb25CdXR0b25LZXlEb3duJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uQnV0dG9uS2V5RG93bihlKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUucG9wdXBWaXNpYmxlICYmIChlLmtleSA9PT0gJ0Fycm93RG93bicgfHwgZS5rZXkgPT09ICdBcnJvd1VwJykgJiYgIWUuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcG9wdXBWaXNpYmxlOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvbk1lbnVJdGVtQ2xpY2snLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25NZW51SXRlbUNsaWNrKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMubW9kZSA9PT0gJ3JhZGlvJyB8fCB0aGlzLnByb3BzLm1vZGUgPT09ICdyYWRpby1jaGVjaycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zaG91bGRSZXN0b3JlQnV0dG9uRm9jdXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vIE5PVEUobmFycW9AKTogc2VsZWN0IHdpdGggbW9kZSByYWRpbyogbXVzdCBiZSBjbG9zZWQgb24gY2xpY2sgd2l0aGluIDxNZW51PlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwb3B1cFZpc2libGU6IGZhbHNlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvbk1lbnVLZXlEb3duJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uTWVudUtleURvd24oZSkge1xuICAgICAgICAgICAgLy8gTk9URShuYXJxb0ApOiBhbGxvdyB0byBtb3ZlIGZvY3VzIHRvIGFub3RoZXIgZm9jdXNhYmxlIHVzaW5nIDxUYWI+XG4gICAgICAgICAgICAvLyBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS1wcmFjdGljZXMtMS4xLyNtZW51XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5wb3B1cFZpc2libGUgJiYgZS5rZXkgPT09ICdUYWInKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJldmVudFRyYXBNZW51Rm9jdXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3VsZFJlc3RvcmVCdXR0b25Gb2N1cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBvcHVwVmlzaWJsZTogZmFsc2UgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uTWVudUNoYW5nZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1lbnVDaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUsIHRoaXMucHJvcHMpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvbk1lbnVGb2N1c0NoYW5nZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1lbnVGb2N1c0NoYW5nZShmb2N1c2VkKSB7XG4gICAgICAgICAgICBpZiAoIWZvY3VzZWQgJiYgdGhpcy5zdGF0ZS5wb3B1cFZpc2libGUpIHtcbiAgICAgICAgICAgICAgICAvLyBOT1RFKG5hcnFvQCk6IHJlc3RvcmUgRE9NIGZvY3VzIHRvIHRoZSBNZW51IGlmIHN0aWxsIG9wZW5lZFxuICAgICAgICAgICAgICAgIHRoaXMudHJhcE1lbnVGb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvblBvcHVwTGF5b3V0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uUG9wdXBMYXlvdXQoX3JlZjIsIHBvcHVwUHJvcHMpIHtcbiAgICAgICAgICAgIHZhciBsYXlvdXQgPSBfcmVmMi5sYXlvdXQ7XG4gICAgICAgICAgICB2YXIgbWF4SGVpZ2h0ID0gdGhpcy5wcm9wcy5tYXhIZWlnaHQ7XG4gICAgICAgICAgICB2YXIgdmlld3BvcnRPZmZzZXQgPSBwb3B1cFByb3BzLnZpZXdwb3J0T2Zmc2V0O1xuICAgICAgICAgICAgdmFyIF93aW5kb3cgPSB3aW5kb3c7XG4gICAgICAgICAgICB2YXIgcGFnZVlPZmZzZXQgPSBfd2luZG93LnBhZ2VZT2Zmc2V0O1xuXG5cbiAgICAgICAgICAgIGlmIChsYXlvdXQuZGlyZWN0aW9uLmluZGV4T2YoJ3RvcC0nKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld1RvcCA9IG1heEhlaWdodCA/IGxheW91dC5ib3R0b20gLSBtYXhIZWlnaHQgOiBsYXlvdXQudG9wO1xuICAgICAgICAgICAgICAgIGxheW91dC50b3AgPSBNYXRoLm1heChuZXdUb3AsIHBhZ2VZT2Zmc2V0ICsgdmlld3BvcnRPZmZzZXQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV3Qm90dG9tID0gbWF4SGVpZ2h0ID8gbGF5b3V0LnRvcCArIG1heEhlaWdodCA6IGxheW91dC5ib3R0b207XG4gICAgICAgICAgICAgICAgbGF5b3V0LmJvdHRvbSA9IE1hdGgubWluKG5ld0JvdHRvbSwgcGFnZVlPZmZzZXQgKyB3aW5kb3cuaW5uZXJIZWlnaHQgLSB2aWV3cG9ydE9mZnNldCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBtZW51SGVpZ2h0ID0gbGF5b3V0LmJvdHRvbSAtIGxheW91dC50b3A7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZW51SGVpZ2h0OiBtZW51SGVpZ2h0IH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvblBvcHVwUmVxdWVzdEhpZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25Qb3B1cFJlcXVlc3RIaWRlKF8sIHJlYXNvbikge1xuICAgICAgICAgICAgdGhpcy5fc2hvdWxkUmVzdG9yZUJ1dHRvbkZvY3VzID0gcmVhc29uID09PSAnZXNjYXBlS2V5UHJlc3MnO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBvcHVwVmlzaWJsZTogZmFsc2UgfSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIFNlbGVjdDtcbn0oX0NvbXBvbmVudDMuZGVmYXVsdCk7XG5cblNlbGVjdC5jb250ZXh0VHlwZXMgPSB7XG4gICAgdGhlbWU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5TZWxlY3QuZGVmYXVsdFByb3BzID0ge1xuICAgIHBsYWNlaG9sZGVyOiAn4oCUJyxcbiAgICBtYXhIZWlnaHQ6IDAsXG4gICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKCkge31cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFNlbGVjdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9yZWFjdC1pc2xhbmRzL2NvbXBvbmVudHMvU2VsZWN0L2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9Db21wb25lbnQyID0gcmVxdWlyZSgnLi4vQ29tcG9uZW50Jyk7XG5cbnZhciBfQ29tcG9uZW50MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbXBvbmVudDIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgU3Bpbm5lciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoU3Bpbm5lciwgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBTcGlubmVyKCkge1xuICAgICAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBTcGlubmVyKTtcbiAgICAgICAgcmV0dXJuICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoU3Bpbm5lcikuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoU3Bpbm5lciwgW3tcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiB0aGlzLmNsYXNzTmFtZSgpIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjbGFzc05hbWUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY2xhc3NOYW1lKCkge1xuICAgICAgICAgICAgdmFyIGNsYXNzTmFtZSA9ICdzcGluIHNwaW5fdmlzaWJsZSc7XG5cbiAgICAgICAgICAgIHZhciB0aGVtZSA9IHRoaXMucHJvcHMudGhlbWUgfHwgdGhpcy5jb250ZXh0LnRoZW1lO1xuICAgICAgICAgICAgaWYgKHRoZW1lKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgc3Bpbl90aGVtZV8nICsgdGhlbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zaXplKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgc3Bpbl9zaXplXycgKyB0aGlzLnByb3BzLnNpemU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnICcgKyB0aGlzLnByb3BzLmNsYXNzTmFtZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gU3Bpbm5lcjtcbn0oX0NvbXBvbmVudDMuZGVmYXVsdCk7XG5cblNwaW5uZXIuY29udGV4dFR5cGVzID0ge1xuICAgIHRoZW1lOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gU3Bpbm5lcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9yZWFjdC1pc2xhbmRzL2NvbXBvbmVudHMvU3Bpbm5lci9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDIwM1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX0NvbnRyb2wyID0gcmVxdWlyZSgnLi4vQ29udHJvbCcpO1xuXG52YXIgX0NvbnRyb2wzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29udHJvbDIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgVGV4dEFyZWEgPSBmdW5jdGlvbiAoX0NvbnRyb2wpIHtcbiAgICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShUZXh0QXJlYSwgX0NvbnRyb2wpO1xuXG4gICAgZnVuY3Rpb24gVGV4dEFyZWEocHJvcHMpIHtcbiAgICAgICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgVGV4dEFyZWEpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoVGV4dEFyZWEpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgICBfdGhpcy5vbklucHV0Q2hhbmdlID0gX3RoaXMub25JbnB1dENoYW5nZS5iaW5kKF90aGlzKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKFRleHRBcmVhLCBbe1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScsICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIHRoaXMuZ2V0Q29udHJvbEhhbmRsZXJzKCksIHsgcmVmOiAnY29udHJvbCcsIGNsYXNzTmFtZTogdGhpcy5jbGFzc05hbWUoKSxcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnByb3BzLm5hbWUsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRoaXMucHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHRoaXMucHJvcHMucGxhY2Vob2xkZXIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMucHJvcHMudmFsdWUsXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMub25JbnB1dENoYW5nZVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjbGFzc05hbWUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY2xhc3NOYW1lKCkge1xuICAgICAgICAgICAgdmFyIGNsYXNzTmFtZSA9ICd0ZXh0YXJlYSc7XG5cbiAgICAgICAgICAgIHZhciB0aGVtZSA9IHRoaXMucHJvcHMudGhlbWUgfHwgdGhpcy5jb250ZXh0LnRoZW1lO1xuICAgICAgICAgICAgaWYgKHRoZW1lKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgdGV4dGFyZWFfdGhlbWVfJyArIHRoZW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc2l6ZSkge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnIHRleHRhcmVhX3NpemVfJyArIHRoaXMucHJvcHMuc2l6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgdGV4dGFyZWFfZGlzYWJsZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuaG92ZXJlZCkge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnIHRleHRhcmVhX2hvdmVyZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZm9jdXNlZCkge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnIHRleHRhcmVhX2ZvY3VzZWQnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gJyAnICsgdGhpcy5wcm9wcy5jbGFzc05hbWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uSW5wdXRDaGFuZ2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25JbnB1dENoYW5nZShlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZS50YXJnZXQudmFsdWUsIHRoaXMucHJvcHMpO1xuICAgICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBUZXh0QXJlYTtcbn0oX0NvbnRyb2wzLmRlZmF1bHQpO1xuXG5UZXh0QXJlYS5jb250ZXh0VHlwZXMgPSB7XG4gICAgdGhlbWU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5UZXh0QXJlYS5wcm9wVHlwZXMgPSB7XG4gICAgdGhlbWU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNpemU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMub25lT2YoWydzJywgJ20nLCAnbCcsICd4bCddKSxcbiAgICBuYW1lOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2YWx1ZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgcGxhY2Vob2xkZXI6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRpc2FibGVkOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gICAgb25DaGFuZ2U6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuZnVuY1xufTtcblxuVGV4dEFyZWEuZGVmYXVsdFByb3BzID0ge1xuICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSgpIHt9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUZXh0QXJlYTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9yZWFjdC1pc2xhbmRzL2NvbXBvbmVudHMvVGV4dEFyZWEvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyMDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9Db250cm9sMiA9IHJlcXVpcmUoJy4uL0NvbnRyb2wnKTtcblxudmFyIF9Db250cm9sMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbnRyb2wyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFRleHRJbnB1dCA9IGZ1bmN0aW9uIChfQ29udHJvbCkge1xuICAgICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKFRleHRJbnB1dCwgX0NvbnRyb2wpO1xuXG4gICAgZnVuY3Rpb24gVGV4dElucHV0KHByb3BzKSB7XG4gICAgICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIFRleHRJbnB1dCk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShUZXh0SW5wdXQpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgICBfdGhpcy5vbkNsZWFyQ2xpY2sgPSBfdGhpcy5vbkNsZWFyQ2xpY2suYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLm9uSW5wdXRDaGFuZ2UgPSBfdGhpcy5vbklucHV0Q2hhbmdlLmJpbmQoX3RoaXMpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoVGV4dElucHV0LCBbe1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZTtcblxuXG4gICAgICAgICAgICB2YXIgaGFzQ2xlYXIgPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5oYXNDbGVhcikge1xuICAgICAgICAgICAgICAgIHZhciBjbGVhckNsYXNzTmFtZSA9ICdpbnB1dF9fY2xlYXInO1xuXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyQ2xhc3NOYW1lICs9ICcgaW5wdXRfX2NsZWFyX3Zpc2libGUnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGhhc0NsZWFyID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2knLCB7IGNsYXNzTmFtZTogY2xlYXJDbGFzc05hbWUsIG9uQ2xpY2s6IHRoaXMub25DbGVhckNsaWNrIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiB0aGlzLmNsYXNzTmFtZSgpIH0sXG4gICAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdpbnB1dF9fYm94JyB9LFxuICAgICAgICAgICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCB0aGlzLmdldENvbnRyb2xIYW5kbGVycygpLCB7IHJlZjogJ2NvbnRyb2wnLCBjbGFzc05hbWU6ICdpbnB1dF9fY29udHJvbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnByb3BzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLnByb3BzLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogdGhpcy5wcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLnByb3BzLnBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMub25JbnB1dENoYW5nZVxuICAgICAgICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICAgICAgICAgIGhhc0NsZWFyXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY2xhc3NOYW1lJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsYXNzTmFtZSgpIHtcbiAgICAgICAgICAgIHZhciBjbGFzc05hbWUgPSAnaW5wdXQnO1xuXG4gICAgICAgICAgICB2YXIgdGhlbWUgPSB0aGlzLnByb3BzLnRoZW1lIHx8IHRoaXMuY29udGV4dC50aGVtZTtcbiAgICAgICAgICAgIGlmICh0aGVtZSkge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnIGlucHV0X3RoZW1lXycgKyB0aGVtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNpemUpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gJyBpbnB1dF9zaXplXycgKyB0aGlzLnByb3BzLnNpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnIGlucHV0X2Rpc2FibGVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmhvdmVyZWQpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gJyBpbnB1dF9ob3ZlcmVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmZvY3VzZWQpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gJyBpbnB1dF9mb2N1c2VkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmhhc0NsZWFyKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgaW5wdXRfaGFzLWNsZWFyJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgJyArIHRoaXMucHJvcHMuY2xhc3NOYW1lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvbklucHV0Q2hhbmdlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uSW5wdXRDaGFuZ2UoZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlLCB0aGlzLnByb3BzKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb25DbGVhckNsaWNrJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2xlYXJDbGljayhlKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZDogdHJ1ZSB9KTtcblxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25DbGVhckNsaWNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNsZWFyQ2xpY2soZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoJycsIHRoaXMucHJvcHMsIHsgc291cmNlOiAnY2xlYXInIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBUZXh0SW5wdXQ7XG59KF9Db250cm9sMy5kZWZhdWx0KTtcblxuVGV4dElucHV0LmNvbnRleHRUeXBlcyA9IHtcbiAgICB0aGVtZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmdcbn07XG5cblRleHRJbnB1dC5wcm9wVHlwZXMgPSB7XG4gICAgdGhlbWU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNpemU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMub25lT2YoWydzJywgJ20nLCAnbCcsICd4bCddKSxcbiAgICB0eXBlOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBuYW1lOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2YWx1ZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgcGxhY2Vob2xkZXI6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRpc2FibGVkOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gICAgaGFzQ2xlYXI6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBvbkNoYW5nZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5mdW5jXG59O1xuXG5UZXh0SW5wdXQuZGVmYXVsdFByb3BzID0ge1xuICAgIHR5cGU6ICd0ZXh0JyxcbiAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoKSB7fVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGV4dElucHV0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L3JlYWN0LWlzbGFuZHMvY29tcG9uZW50cy9UZXh0SW5wdXQvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyMDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB3YXJuaW5nID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGFyZ3MpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiA+IDIgPyBsZW4gLSAyIDogMCk7XG4gICAgZm9yICh2YXIga2V5ID0gMjsga2V5IDwgbGVuOyBrZXkrKykge1xuICAgICAgYXJnc1trZXkgLSAyXSA9IGFyZ3VtZW50c1trZXldO1xuICAgIH1cbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgK1xuICAgICAgICAnbWVzc2FnZSBhcmd1bWVudCdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdC5sZW5ndGggPCAxMCB8fCAoL15bc1xcV10qJC8pLnRlc3QoZm9ybWF0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnVGhlIHdhcm5pbmcgZm9ybWF0IHNob3VsZCBiZSBhYmxlIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgJyArXG4gICAgICAgICd3YXJuaW5nLiBQbGVhc2UsIHVzZSBhIG1vcmUgZGVzY3JpcHRpdmUgZm9ybWF0IHRoYW46ICcgKyBmb3JtYXRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICtcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgICB9KTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgfSBjYXRjaCh4KSB7fVxuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L3JlYWN0LWlzbGFuZHMvfi93YXJuaW5nL2Jyb3dzZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAyMDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=