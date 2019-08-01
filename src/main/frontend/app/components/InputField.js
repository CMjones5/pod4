import React from 'react';

const InputField = (props) => {
  return(
    <label className="labels">{props.label}
    <input
    className="new-produce"
      name={props.name}
      type='text'
      value={props.value}
      onChange={props.onChange}
     />
    </label>
  )
}

export default InputField;