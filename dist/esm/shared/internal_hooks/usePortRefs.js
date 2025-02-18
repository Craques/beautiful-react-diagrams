/* beautiful-react-diagrams version: 0.6.0 */
import { useContext } from 'react';
import DiagramContext from '../../Context/DiagramContext.js';

var usePortRefs = function usePortRefs() {
  var _useContext = useContext(DiagramContext),
      ports = _useContext.ports;

  return ports;
};

export default usePortRefs;
