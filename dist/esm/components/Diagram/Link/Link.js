/* beautiful-react-diagrams version: 0.6.0 */
import { slicedToArray as _slicedToArray } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import React, { useRef, useState, useMemo, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { PortType, NodeType, LinkType } from '../../../shared/Types.js';
import usePortRefs from '../../../shared/internal_hooks/usePortRefs.js';
import useCanvas from '../../../shared/internal_hooks/useCanvas.js';
import getEntityCoordinates from './getEntityCoordinates.js';
import makeSvgPath from '../../../shared/functions/makeSvgPath.js';
import getPathMidpoint from '../../../shared/functions/getPathMidpoint.js';
import useNodeRefs from '../../../shared/internal_hooks/useNodeRefs.js';
import LinkLabel from './LinkLabel.js';

var useContextRefs = function useContextRefs() {
  var _useCanvas = useCanvas(),
      canvas = _useCanvas.canvas,
      panVal = _useCanvas.panVal,
      scaleVal = _useCanvas.scaleVal;

  var portRefs = usePortRefs();
  var nodeRefs = useNodeRefs();
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
  var pathRef = useRef();

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      labelPosition = _useState2[0],
      setLabelPosition = _useState2[1];

  var _useContextRefs = useContextRefs(),
      canvas = _useContextRefs.canvas,
      panVal = _useContextRefs.panVal,
      scaleVal = _useContextRefs.scaleVal,
      portRefs = _useContextRefs.portRefs,
      nodeRefs = _useContextRefs.nodeRefs;

  var inputPoint = useMemo(function () {
    return getEntityCoordinates(input, portRefs, nodeRefs, canvas, panVal);
  }, [input, portRefs, nodeRefs, canvas, panVal]);
  var classList = useMemo(function () {
    return classNames('bi-diagram-link', {
      'readonly-link': link.readonly
    }, link.className);
  }, [link.readonly, link.className]);
  var outputPoint = useMemo(function () {
    return getEntityCoordinates(output, portRefs, nodeRefs, canvas, panVal);
  }, [output, portRefs, nodeRefs, canvas, panVal]);
  var pathOptions = {
    type: input.type === 'port' || output.type === 'port' ? 'bezier' : 'curve',
    inputAlignment: input.entity.alignment || null,
    outputAlignment: output.entity.alignment || null
  };
  var path = useMemo(function () {
    return makeSvgPath(inputPoint, outputPoint, pathOptions);
  }, [inputPoint, outputPoint]);
  useEffect(function () {
    if (link.label && inputPoint && outputPoint && pathRef.current) {
      var pos = getPathMidpoint(pathRef.current);
      setLabelPosition(pos);
    }
  }, [pathRef.current, link.label, inputPoint, outputPoint]);
  var onDoubleClick = useCallback(function () {
    if (onDelete && !link.readonly) {
      onDelete(link);
    }
  }, [link.readonly, onDelete]);
  var nextScale = Object.keys(portRefs).length > 0 ? 1 / scaleVal : 1;
  return React.createElement("g", {
    className: classList,
    style: {
      transform: "scale(".concat(nextScale, ")")
    }
  }, !link.readonly && React.createElement("path", {
    d: path,
    className: "bi-link-ghost",
    onDoubleClick: onDoubleClick
  }), React.createElement("path", {
    d: path,
    ref: pathRef,
    className: "bi-link-path",
    onDoubleClick: onDoubleClick
  }), link.label && labelPosition && React.createElement(LinkLabel, {
    position: labelPosition,
    label: link.label
  }));
};

var InvolvedEntity = PropTypes.exact({
  type: PropTypes.oneOf(['node', 'port']),
  entity: PropTypes.oneOfType([PortType, NodeType])
});
Link.propTypes = {
  link: LinkType.isRequired,
  input: InvolvedEntity.isRequired,
  output: InvolvedEntity.isRequired,
  onDelete: PropTypes.func
};
Link.defaultProps = {
  onDelete: undefined
};
var DiagramLink = React.memo(Link);

export default DiagramLink;
