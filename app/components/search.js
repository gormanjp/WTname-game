import React from 'react';

export const Search = (props) => {
  return(
    <div className="container">
      <input
        className="search raleway-small"
        type="text"
        align="middle"
        placeholder="'Sam' OR 'job: CEO'"
        onChange={(input) => props.search(input.target.value, props.nameInfo)}
      />
    </div>
  )
}
