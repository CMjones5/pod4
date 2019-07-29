import React from "react";
import ReactDom from "react-dom";
import ProduceContainer from "./containers/ProduceContainer";
import ProduceShowContainer from "./containers/ProduceShowContainer";
import 'foundation-sites/dist/css/foundation.min.css';

const pageMap = {
  "produce-index": ProduceContainer,
  "produce-show": ProduceShowContainer
}
for(const domId in pageMap) {
  if(document.getElementById(domId)) {
    const Component = pageMap[domId]
    ReactDom.render(<Component />,document.getElementById(domId))
  }
}
