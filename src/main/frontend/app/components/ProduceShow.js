import React from 'react';
import { browserHistory, Link } from 'react-router';

const ProduceShow = (props) => {
  return(
    <div className="produce-show">
    <h2>Produce Show Page</h2>
      <h2>{props.name}</h2>
      <img src={props.imageUrl} height="100" width="100" />
      <p>{props.description}</p>
      <p>{props.foodType}</p>
    </div>
  )
}

export default ProduceShow;