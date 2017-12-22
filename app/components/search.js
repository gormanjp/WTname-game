import React from 'react';

export const Search = (props) => {

  return(
    <div className="container search-container">
      <input
        className="search raleway-small"
        type="text"
        align="middle"
        placeholder="Search by Name or Job Title"
        onChange={ (e) => props.search(e.target.value) }
      />
    </div>
  )
}
