import React from 'react';

export const NameCard = (props) => {
  const { id, firstName, lastName, jobTitle } = props.person;
  const imageUrl = props.person.headshot.url;
  
  return(
    <div className="card card-container col-sm-2 col-4" onClick={ () => $(`#${id}`).toggleClass("flipped") }>
      <div className="card-flip" id={id}>
        <div className="card face card-front" style={{ backgroundImage: `url(${imageUrl}?w=200&h=200)` }} />
        <div className="card face card-back">
          <h4 className="raleway-small center-text">{firstName} {lastName}</h4>
          <p className="raleway-small center-text">{jobTitle}</p>
        </div>
      </div>
    </div>
  )
}
