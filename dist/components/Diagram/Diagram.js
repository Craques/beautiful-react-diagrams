/* beautiful-react-diagrams version: 0.6.0 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var PropTypes = require('prop-types');
var DiagramCanvas = require('./DiagramCanvas/DiagramCanvas.js');
var NodesCanvas = require('./NodesCanvas/NodesCanvas.js');
var LinksCanvas = require('./LinksCanvas/LinksCanvas.js');
var Types = require('../../shared/Types.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

var Diagram = function Diagram(props) {
  var schema = props.schema,
      onChange = props.onChange,
      pan = props.pan,
      scale = props.scale,
      rest = _rollupPluginBabelHelpers.objectWithoutProperties(props, ["schema", "onChange", "pan", "scale"]);

  var _useState = React.useState(),
      _useState2 = _rollupPluginBabelHelpers.slicedToArray(_useState, 2),
      segment = _useState2[0],
      setSegment = _useState2[1];

  var _useRef = React.useRef({}),
      portRefs = _useRef.current;

  var _useRef2 = React.useRef({}),
      nodeRefs = _useRef2.current;

  var onNodesChange = function onNodesChange(nextNodes) {
    if (onChange) {
      onChange({
        nodes: nextNodes
      });
    }
  };

  var onPortRegister = function onPortRegister(portId, portEl) {
    portRefs[portId] = portEl;
  };

  var onNodeRegister = function onNodeRegister(nodeId, nodeEl) {
    nodeRefs[nodeId] = nodeEl;
  };

  var onNodeRemove = React.useCallback(function (nodeId, inputsPorts, outputsPorts) {
    delete nodeRefs[nodeId];
    inputsPorts.forEach(function (input) {
      return delete portRefs[input];
    });
    outputsPorts.forEach(function (output) {
      return delete portRefs[output];
    });
  }, []);
  var onDragNewSegment = React.useCallback(function (portId, from, to, alignment) {
    setSegment({
      id: "segment-".concat(portId),
      from: from,
      to: to,
      alignment: alignment
    });
  }, []);
  var onSegmentFail = React.useCallback(function () {
    setSegment(undefined);
  }, []);

  var onSegmentConnect = function onSegmentConnect(input, output) {
    var nextLinks = [].concat(_rollupPluginBabelHelpers.toConsumableArray(schema.links || []), [{
      input: input,
      output: output
    }]);

    if (onChange) {
      onChange({
        links: nextLinks
      });
    }

    setSegment(undefined);
  };

  var onLinkDelete = function onLinkDelete(nextLinks) {
    if (onChange) {
      onChange({
        links: nextLinks
      });
    }
  };

  return React__default['default'].createElement(DiagramCanvas['default'], _rollupPluginBabelHelpers['extends']({
    portRefs: portRefs,
    nodeRefs: nodeRefs,
    pan: pan,
    scale: scale
  }, rest), React__default['default'].createElement(NodesCanvas['default'], {
    nodes: schema.nodes,
    onChange: onNodesChange,
    onNodeRegister: onNodeRegister,
    onPortRegister: onPortRegister,
    onNodeRemove: onNodeRemove,
    onDragNewSegment: onDragNewSegment,
    onSegmentFail: onSegmentFail,
    onSegmentConnect: onSegmentConnect
  }), React__default['default'].createElement(LinksCanvas['default'], {
    nodes: schema.nodes,
    links: schema.links,
    segment: segment,
    onChange: onLinkDelete
  }));
};

Diagram.propTypes = {
  schema: Types.SchemaType,
  onChange: PropTypes__default['default'].func,
  pan: PropTypes__default['default'].shape({
    x: PropTypes__default['default'].number,
    y: PropTypes__default['default'].number
  }),
  scale: PropTypes__default['default'].number
};
Diagram.defaultProps = {
  schema: {
    nodes: [],
    links: []
  },
  pan: {
    x: 0,
    y: 0
  },
  scale: 1,
  onChange: undefined
};
var Diagram$1 = React__default['default'].memo(Diagram);

exports.default = Diagram$1;
