import React from 'react';

export const NameCard = (props) => {
  return(
    <div className="card col-sm-2 col-4"
      style={{
        backgroundImage: `url(${props.image}?w=200&h=200)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '200px',
        minWidth: '200px',
        margin: '10px auto'
        // !! need to account for XS devices
      }}>
    </div>
  )
}
