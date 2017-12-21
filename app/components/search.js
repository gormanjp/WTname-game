import React from 'react';

export const Search = (props) => {
  return(
    <div className="container">
      <input
        className="input"
        type="text"
        onChange={(input) => props.search(input.target.value, props.nameInfo)}
      />
    </div>
  )
}
