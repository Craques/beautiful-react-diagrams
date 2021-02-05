/* beautiful-react-diagrams version: 0.6.0 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var useCanvasPanHandlers = require('./useCanvasPanHandlers.js');
var useCanvasZoomHandlers = require('./useCanvasZoomHandlers.js');
var BackgroundGrid = require('./BackgroundGrid.js');
var Constants = require('../../shared/Constants.js');
var childrenUtils = require('./childrenUtils.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);

var calcTransformation = function calcTransformation() {
  var scale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      _ref$x = _ref.x,
      x = _ref$x === void 0 ? 0 : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === void 0 ? 0 : _ref$y;

  return {
    transform: "translate(".concat(x, "px, ").concat(y, "px) translateZ(0) scale(").concat(scale, ")")
  };
};

var Canvas = function Canvas(props) {
  var pan = props.pan,
      onPanChange = props.onPanChange,
      zoom = props.zoom,
      onZoomChange = props.onZoomChange,
      maxZoom = props.maxZoom,
      minZoom = props.minZoom,
      zoomOnWheel = props.zoomOnWheel,
      inertia = props.inertia,
      zoomResetOnDblClick = props.zoomResetOnDblClick,
      ElementRenderer = props.ElementRenderer,
      GridRenderer = props.GridRenderer,
      debug = props.debug,
      className = props.className,
      children = props.children,
      rest = _rollupPluginBabelHelpers.objectWithoutProperties(props, ["pan", "onPanChange", "zoom", "onZoomChange", "maxZoom", "minZoom", "zoomOnWheel", "inertia", "zoomResetOnDblClick", "ElementRenderer", "GridRenderer", "debug", "className", "children"]);

  var elRef = React.useRef();
  var classList = React.useMemo(function () {
    return classNames__default['default']('bi bi-diagram bi-diagram-canvas', className);
  }, [className]);
  var style = React.useMemo(function () {
    return calcTransformation(zoom, pan);
  }, [zoom, pan.x, pan.y]);
  var startPan = useCanvasPanHandlers['default']({
    pan: pan,
    onPanChange: onPanChange,
    inertia: inertia
  });
  useCanvasZoomHandlers['default'](elRef, {
    onZoomChange: onZoomChange,
    maxZoom: maxZoom,
    minZoom: minZoom,
    zoomOnWheel: zoomOnWheel,
    zoomResetOnDblClick: zoomResetOnDblClick
  });
  return React__default['default'].createElement(ElementRenderer, _rollupPluginBabelHelpers['extends']({
    className: classList,
    onMouseDown: startPan,
    onTouchStart: startPan,
    ref: elRef
  }, rest), React__default['default'].createElement(GridRenderer, {
    translateX: pan.x,
    translateY: pan.y,
    scale: zoom
  }), React__default['default'].createElement("div", {
    className: "bi-canvas-content",
    style: style
  }, childrenUtils.filterControlsOut(children, pan, zoom)), debug && React__default['default'].createElement("div", {
    className: "bi-canvas-debugger"
  }, React__default['default'].createElement("p", null, "Pan: ".concat(pan.x, ", ").concat(pan.y)), React__default['default'].createElement("p", null, "Scale: ".concat(zoom))), childrenUtils.enrichControls(children, {
    onPanChange: onPanChange,
    onZoomChange: onZoomChange,
    minZoom: minZoom,
    maxZoom: maxZoom
  }));
};

Canvas.propTypes = {
  pan: PropTypes__default['default'].exact({
    x: PropTypes__default['default'].number,
    y: PropTypes__default['default'].number
  }),
  onPanChange: PropTypes__default['default'].func,
  zoom: PropTypes__default['default'].number,
  onZoomChange: PropTypes__default['default'].func,
  zoomOnWheel: PropTypes__default['default'].bool,
  maxZoom: PropTypes__default['default'].number,
  minZoom: PropTypes__default['default'].number,
  zoomResetOnDblClick: PropTypes__default['default'].bool,
  inertia: PropTypes__default['default'].bool,
  debug: PropTypes__default['default'].bool,
  GridRenderer: PropTypes__default['default'].elementType,
  ElementRenderer: PropTypes__default['default'].elementType
};
Canvas.defaultProps = {
  pan: {
    x: 0,
    y: 0
  },
  onPanChange: Constants.noop,
  zoom: 1,
  onZoomChange: Constants.noop,
  zoomOnWheel: true,
  maxZoom: 2,
  minZoom: 0.5,
  zoomResetOnDblClick: true,
  inertia: true,
  debug: false,
  GridRenderer: BackgroundGrid['default'],
  ElementRenderer: 'div'
};
var Canvas$1 = React__default['default'].memo(Canvas);

exports.default = Canvas$1;
