 import React from 'react';

 const CommentTile = (props) => {
   return(
     <div className="comment-tile">
         <p>{props.description}</p>
         <p>{props.rating}</p>
     </div>
   )
 }

 export default CommentTile;
