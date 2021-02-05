/* beautiful-react-diagrams version: 0.6.0 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var DiagramContext = React__default['default'].createContext({
  canvas: null,
  ports: null,
  nodes: null,
  panVal: {
    x: 0,
    y: 0
  },
  scaleVal: 1
});

exports.default = DiagramContext;
