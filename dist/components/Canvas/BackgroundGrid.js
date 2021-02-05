/* beautiful-react-diagrams version: 0.6.0 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

var parallaxRatio = 1.25;

var calcCoordinates = function calcCoordinates(x, y) {
  return [x * parallaxRatio, y * parallaxRatio];
};

var calcTransformation = function calcTransformation(x, y, scale) {
  return "scale(".concat(scale, ") translate(").concat(x, ", ").concat(y, ")");
};

var BackgroundGrid = function BackgroundGrid(_ref) {
  var translateX = _ref.translateX,
      translateY = _ref.translateY,
      scale = _ref.scale,
      svgPatternColor = _ref.svgPatternColor,
      svgPatternOpacity = _ref.svgPatternOpacity;

  var _useMemo = React.useMemo(function () {
    return calcCoordinates(translateX, translateY);
  }, [translateX, translateY]),
      _useMemo2 = _rollupPluginBabelHelpers.slicedToArray(_useMemo, 2),
      x = _useMemo2[0],
      y = _useMemo2[1];

  var transformation = React.useMemo(function () {
    return calcTransformation(x, y, scale);
  }, [x, y, scale]);
  return React__default['default'].createElement("svg", {
    width: "100%",
    height: "100%",
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default['default'].createElement("defs", null, React__default['default'].createElement("pattern", {
    id: "bg-grid",
    width: "30",
    height: "30",
    patternUnits: "userSpaceOnUse",
    patternTransform: transformation
  }, React__default['default'].createElement("g", {
    opacity: svgPatternOpacity,
    fill: svgPatternColor
  }, React__default['default'].createElement("polygon", {
    points: "29.6,0 27,0 27,0.4 29.6,0.4 29.6,3 30,3 30,0.4 30,0 "
  }), React__default['default'].createElement("polygon", {
    points: "0,0 0,0.4 0,3 0.4,3 0.4,0.4 3,0.4 3,0 0.4,0 "
  }), React__default['default'].createElement("polygon", {
    points: "30,30 30,29.6 30,27 29.6,27 29.6,29.6 27,29.6 27,30 29.6,30 "
  }), React__default['default'].createElement("polygon", {
    points: "0.4,30 3,30 3,29.6 0.4,29.6 0.4,27 0,27 0,29.6 0,30 "
  })))), React__default['default'].createElement("rect", {
    width: "100%",
    height: "100%",
    fill: "url(#bg-grid)"
  }));
};

BackgroundGrid.propTypes = {
  svgPatternColor: PropTypes__default['default'].string,
  svgPatternOpacity: PropTypes__default['default'].number,
  translateX: PropTypes__default['default'].number,
  translateY: PropTypes__default['default'].number,
  scale: PropTypes__default['default'].number
};
BackgroundGrid.defaultProps = {
  svgPatternColor: 'black',
  svgPatternOpacity: 0.5,
  translateX: 0,
  translateY: 0,
  scale: 1
};
var BackgroundGrid$1 = React__default['default'].memo(BackgroundGrid);

exports.default = BackgroundGrid$1;
