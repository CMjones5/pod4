import React from 'react';

const CommentDescriptionField = (props) => {
  return(
    <label>{props.label}
    <input
      name={props.name}
      type='text'
      value={props.value}
      onChange={props.handleDescriptionChange}
     />
    </label>
  )
}

export default CommentDescriptionField;