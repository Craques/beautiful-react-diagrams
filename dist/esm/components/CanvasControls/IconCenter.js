/* beautiful-react-diagrams version: 0.6.0 */
import React from 'react';

var IconCenter = function IconCenter() {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 384 384"
  }, React.createElement("g", {
    opacity: "0.8"
  }, React.createElement("path", {
    d: "M42.667,42.667H128V0H42.667C19.093,0,0,19.093,0,42.667V128h42.667V42.667z"
  }), React.createElement("path", {
    d: "M42.667,256H0v85.333C0,364.907,19.093,384,42.667,384H128v-42.667H42.667V256z"
  }), React.createElement("path", {
    d: "M341.333,0H256v42.667h85.333V128H384V42.667C384,19.093,364.907,0,341.333,0z"
  }), React.createElement("path", {
    d: "M192,128c-35.307,0-64,28.693-64,64s28.693,64,64,64s64-28.693,64-64S227.307,128,192,128z"
  }), React.createElement("path", {
    d: "M341.333,341.333H256V384h85.333C364.907,384,384,364.907,384,341.333V256h-42.667V341.333z"
  })));
};

var CenterIcon = React.memo(IconCenter);

export default CenterIcon;
