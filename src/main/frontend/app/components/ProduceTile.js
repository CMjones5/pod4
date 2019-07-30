 import React from 'react';

 const ProduceTile = (props) => {
   return(
     <div className="produce-tile">
         <p>{props.name}</p>
         <a href={"produce/" + props.id}><img src={props.imageUrl} height="100" width="100" /></a>
         <p>{props.description}</p>
         <p>{props.foodType}</p>
         <button id={props.id} onClick={props.onDeleteItem} className="button">Delete</button>
     </div>
   )
 }

 export default ProduceTile;
