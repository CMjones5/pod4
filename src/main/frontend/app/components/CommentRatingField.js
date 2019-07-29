import React from 'react';

const CommentRatingField = (props) => {
  return(
    <label>{props.label}
    <select value={props.value} onChange={props.handleRatingChange}>
          <option value="1">Abysmal</option>
          <option value="2">Modest</option>
          <option value="3">Respectable</option>
          <option value="4">Superior</option>
          <option value="5">Extraordinary</option>
        </select>
    </label>
  )
}

export default CommentRatingField;