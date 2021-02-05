/* beautiful-react-diagrams version: 0.6.0 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var IconPlus = require('./IconPlus.js');
var IconMinus = require('./IconMinus.js');
var IconCenter = require('./IconCenter.js');
var Constants = require('../../shared/Constants.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);

var CanvasControls = function CanvasControls(props) {
  var placement = props.placement,
      alignment = props.alignment,
      onPanChange = props.onPanChange,
      onZoomChange = props.onZoomChange,
      className = props.className,
      ElementRender = props.ElementRender,
      ButtonRender = props.ButtonRender,
      ZoomInBtnRender = props.ZoomInBtnRender,
      ZoomOutBtnRender = props.ZoomOutBtnRender,
      CenterBtnRender = props.CenterBtnRender;
  var classList = React.useMemo(function () {
    return classNames__default['default']('bi bi-diagram-ctrls', "bi-diagram-ctrls-".concat(placement), "bi-diagram-ctrls-".concat(alignment), className);
  }, [placement, className, alignment]);
  var zoomInHandler = React.useCallback(function () {
    onZoomChange(function (currentZoom) {
      return currentZoom + 0.25;
    });
  }, [onZoomChange]);
  var zoomOutHandler = React.useCallback(function () {
    onZoomChange(function (currentZoom) {
      return currentZoom - 0.25;
    });
  }, [onZoomChange]);
  var resetHandler = React.useCallback(function () {
    onPanChange({
      x: 0,
      y: 0
    });
    onZoomChange(1);
  }, [onZoomChange, onPanChange]);
  return React__default['default'].createElement(ElementRender, {
    className: classList
  }, React__default['default'].createElement(ButtonRender, {
    onClick: zoomInHandler,
    className: "bid-ctrls-btn"
  }, React__default['default'].createElement(ZoomInBtnRender, null)), React__default['default'].createElement(ButtonRender, {
    onClick: resetHandler,
    className: "bid-ctrls-btn"
  }, React__default['default'].createElement(CenterBtnRender, null)), React__default['default'].createElement(ButtonRender, {
    onClick: zoomOutHandler,
    className: "bid-ctrls-btn"
  }, React__default['default'].createElement(ZoomOutBtnRender, null)));
};

CanvasControls.propTypes = {
  placement: PropTypes__default['default'].oneOf(['top-left', 'top-right', 'top-center', 'bottom-right', 'bottom-center', 'bottom-left', 'left', 'right']),
  alignment: PropTypes__default['default'].oneOf(['vertical', 'horizontal']),
  onPanChange: PropTypes__default['default'].func,
  onZoomChange: PropTypes__default['default'].func,
  ButtonRender: PropTypes__default['default'].elementType,
  ZoomInBtnRender: PropTypes__default['default'].elementType,
  CenterBtnRender: PropTypes__default['default'].elementType,
  ZoomOutBtnRender: PropTypes__default['default'].elementType,
  ElementRender: PropTypes__default['default'].elementType
};
CanvasControls.defaultProps = {
  placement: 'bottom-left',
  alignment: 'vertical',
  onPanChange: Constants.noop,
  onZoomChange: Constants.noop,
  ButtonRender: 'button',
  ZoomInBtnRender: IconPlus['default'],
  CenterBtnRender: IconCenter['default'],
  ZoomOutBtnRender: IconMinus['default'],
  ElementRender: 'nav'
};
var CanvasControls$1 = React__default['default'].memo(CanvasControls);

exports.default = CanvasControls$1;
