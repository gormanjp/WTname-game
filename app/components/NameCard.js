import React from 'react';

export const NameCard = (props) => {
  return(
    <div className="card col-sm-2"
      style={{
        backgroundImage: `url(${props.image}?w=200&h=200)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '200px',
        width: '100px',
        margin: '10px'
      }}>
    </div>
  )
}
