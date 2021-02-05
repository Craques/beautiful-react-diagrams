/* beautiful-react-diagrams version: 0.6.0 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var CanvasControls = require('../CanvasControls/CanvasControls.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var filterControlsOut = function filterControlsOut(children, pan, scale) {
  return React.Children.map(children, function (C) {
    return C.type !== CanvasControls['default'] ? React__default['default'].cloneElement(C, {
      pan: pan,
      scale: scale
    }) : null;
  });
};
var enrichControls = function enrichControls(children, props) {
  return React.Children.map(children, function (C) {
    if (C.type === CanvasControls['default']) {
      return React.cloneElement(C, {
        onPanChange: C.props.onPanChange || props.onPanChange,
        onZoomChange: C.props.onZoomChange || props.onZoomChange,
        minZoom: C.props.minZoom || props.minZoom,
        maxZoom: C.props.maxZoom || props.maxZoom
      });
    }

    return null;
  });
};

exports.enrichControls = enrichControls;
exports.filterControlsOut = filterControlsOut;
