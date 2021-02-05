/* beautiful-react-diagrams version: 0.6.0 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var beautifulReactHooks = require('beautiful-react-hooks');
var isEqual = require('lodash.isequal');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var DiagramContext = require('../../../Context/DiagramContext.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var isEqual__default = /*#__PURE__*/_interopDefaultLegacy(isEqual);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);

var DiagramCanvas = function DiagramCanvas(props) {
  var children = props.children,
      portRefs = props.portRefs,
      nodeRefs = props.nodeRefs,
      pan = props.pan,
      scale = props.scale,
      className = props.className,
      rest = _rollupPluginBabelHelpers.objectWithoutProperties(props, ["children", "portRefs", "nodeRefs", "pan", "scale", "className"]);

  var _useState = React.useState(),
      _useState2 = _rollupPluginBabelHelpers.slicedToArray(_useState, 2),
      bbox = _useState2[0],
      setBoundingBox = _useState2[1];

  var canvasRef = React.useRef();
  var classList = classNames__default['default']('bi bi-diagram', className);

  var calculateBBox = function calculateBBox() {
    if (canvasRef.current) {
      var nextBBox = canvasRef.current.getBoundingClientRect();

      if (!isEqual__default['default'](nextBBox, bbox)) {
        setBoundingBox(nextBBox);
      }
    }
  };

  React.useEffect(calculateBBox, [canvasRef.current]);
  beautifulReactHooks.useWindowScroll(calculateBBox);
  beautifulReactHooks.useWindowResize(calculateBBox);
  return React__default['default'].createElement("div", _rollupPluginBabelHelpers['extends']({
    className: classList,
    ref: canvasRef
  }, rest), React__default['default'].createElement("div", {
    className: "bi-diagram-inners"
  }, React__default['default'].createElement(DiagramContext['default'].Provider, {
    value: {
      canvas: bbox,
      ports: portRefs,
      nodes: nodeRefs,
      panVal: pan,
      scaleVal: scale
    }
  }, children)));
};

DiagramCanvas.propTypes = {
  portRefs: PropTypes__default['default'].shape({}),
  nodeRefs: PropTypes__default['default'].shape({}),
  className: PropTypes__default['default'].string,
  pan: PropTypes__default['default'].shape({
    x: PropTypes__default['default'].number,
    y: PropTypes__default['default'].number
  }),
  scale: PropTypes__default['default'].number
};
DiagramCanvas.defaultProps = {
  portRefs: {},
  nodeRefs: {},
  className: '',
  pan: {
    x: 0,
    y: 0
  },
  scale: 1
};
var DiagramCanvas$1 = React__default['default'].memo(DiagramCanvas);

exports.default = DiagramCanvas$1;
