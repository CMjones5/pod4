import React from "react";
import ReactDom from "react-dom";
import ProduceContainer from "./containers/ProduceContainer";
import ProduceShowContainer from "./containers/ProduceShowContainer";
import ProduceFormContainer from "./containers/ProduceFormContainer";
import EditFormContainer from "./containers/EditFormContainer";

const pageMap = {
  "produce-index": ProduceContainer,
  "produce-show": ProduceShowContainer,
  "produce-form": ProduceFormContainer,
  "produce-edit": EditFormContainer
}
for(const domId in pageMap) {
  if(document.getElementById(domId)) {
    const Component = pageMap[domId]
    ReactDom.render(<Component />,document.getElementById(domId))
  }
}
