import React from 'react';
import { browserHistory, Link } from 'react-router';

const ProduceShow = (props) => {
  return(
    <div className="produce-show">
      <h2>{props.name}</h2>
      <p>{props.imageUrl}</p>
      <p>{props.description}</p>
      <p>{props.foodtype}</p>
      <div className="button">
        Back
      </div>
    </div>
  )
}

export default ProduceShow;