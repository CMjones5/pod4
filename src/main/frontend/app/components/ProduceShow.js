import React from 'react';
import "../../../resources/stylesheets/index.scss";


const ProduceShow = (props) => {
  return(
    <div className="produce-show">
      <h2>{props.name}</h2>
      <img src={props.imageUrl} height="400" width="400" />
      <p>{props.description}</p>
      <p>{props.foodType}</p>
    </div>
  )
}

export default ProduceShow;