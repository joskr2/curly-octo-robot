import React from 'react'
import "./../styles/Card.css"


const Card = ( { title, description, price, url } ) => {
  return (
    <>
      <div className="card">
        <img className="card__image" src={url} alt={title} />
        <div className="card__content">
          <div className='card-content-subsection'>
            <p className='title'>{title}</p>
            <p className='price'>{price}</p>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </>
  )
}

export default Card