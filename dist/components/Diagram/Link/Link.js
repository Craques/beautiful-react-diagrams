/* beautiful-react-diagrams version: 0.6.0 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var Types = require('../../../shared/Types.js');
var usePortRefs = require('../../../shared/internal_hooks/usePortRefs.js');
var useCanvas = require('../../../shared/internal_hooks/useCanvas.js');
var getEntityCoordinates = require('./getEntityCoordinates.js');
var makeSvgPath = require('../../../shared/functions/makeSvgPath.js');
var getPathMidpoint = require('../../../shared/functions/getPathMidpoint.js');
var useNodeRefs = require('../../../shared/internal_hooks/useNodeRefs.js');
var LinkLabel = require('./LinkLabel.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);

var useContextRefs = function useContextRefs() {
  var _useCanvas = useCanvas['default'](),
      canvas = _useCanvas.canvas,
      panVal = _useCanvas.panVal,
      scaleVal = _useCanvas.scaleVal;

  var portRefs = usePortRefs['default']();
  var nodeRefs = useNodeRefs['default']();
  return {
    canvas: canvas,
    panVal: panVal,
    scaleVal: scaleVal,
    nodeRefs: nodeRefs,
    portRefs: portRefs
  };
};

var Link = function Link(props) {
  var input = props.input,
      output = props.output,
      link = props.link,
      onDelete = props.onDelete;
  var pathRef = React.useRef();

  var _useState = React.useState(),
      _useState2 = _rollupPluginBabelHelpers.slicedToArray(_useState, 2),
      labelPosition = _useState2[0],
      setLabelPosition = _useState2[1];

  var _useContextRefs = useContextRefs(),
      canvas = _useContextRefs.canvas,
      panVal = _useContextRefs.panVal,
      scaleVal = _useContextRefs.scaleVal,
      portRefs = _useContextRefs.portRefs,
      nodeRefs = _useContextRefs.nodeRefs;

  var inputPoint = React.useMemo(function () {
    return getEntityCoordinates['default'](input, portRefs, nodeRefs, canvas, panVal);
  }, [input, portRefs, nodeRefs, canvas, panVal]);
  var classList = React.useMemo(function () {
    return classNames__default['default']('bi-diagram-link', {
      'readonly-link': link.readonly
    }, link.className);
  }, [link.readonly, link.className]);
  var outputPoint = React.useMemo(function () {
    return getEntityCoordinates['default'](output, portRefs, nodeRefs, canvas, panVal);
  }, [output, portRefs, nodeRefs, canvas, panVal]);
  var pathOptions = {
    type: input.type === 'port' || output.type === 'port' ? 'bezier' : 'curve',
    inputAlignment: input.entity.alignment || null,
    outputAlignment: output.entity.alignment || null
  };
  var path = React.useMemo(function () {
    return makeSvgPath['default'](inputPoint, outputPoint, pathOptions);
  }, [inputPoint, outputPoint]);
  React.useEffect(function () {
    if (link.label && inputPoint && outputPoint && pathRef.current) {
      var pos = getPathMidpoint['default'](pathRef.current);
      setLabelPosition(pos);
    }
  }, [pathRef.current, link.label, inputPoint, outputPoint]);
  var onDoubleClick = React.useCallback(function () {
    if (onDelete && !link.readonly) {
      onDelete(link);
    }
  }, [link.readonly, onDelete]);
  var nextScale = Object.keys(portRefs).length > 0 ? 1 / scaleVal : 1;
  return React__default['default'].createElement("g", {
    className: classList,
    style: {
      transform: "scale(".concat(nextScale, ")")
    }
  }, !link.readonly && React__default['default'].createElement("path", {
    d: path,
    className: "bi-link-ghost",
    onDoubleClick: onDoubleClick
  }), React__default['default'].createElement("path", {
    d: path,
    ref: pathRef,
    className: "bi-link-path",
    onDoubleClick: onDoubleClick
  }), link.label && labelPosition && React__default['default'].createElement(LinkLabel['default'], {
    position: labelPosition,
    label: link.label
  }));
};

var InvolvedEntity = PropTypes__default['default'].exact({
  type: PropTypes__default['default'].oneOf(['node', 'port']),
  entity: PropTypes__default['default'].oneOfType([Types.PortType, Types.NodeType])
});
Link.propTypes = {
  link: Types.LinkType.isRequired,
  input: InvolvedEntity.isRequired,
  output: InvolvedEntity.isRequired,
  onDelete: PropTypes__default['default'].func
};
Link.defaultProps = {
  onDelete: undefined
};
var DiagramLink = React__default['default'].memo(Link);

exports.default = DiagramLink;
