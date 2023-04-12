import React from 'react'
import '../styles/Banner.css'

import MainPhoto from '../assets/mainfood.jpg'

const Banner = () => {
  return (
    <section className='main-section-banner'>
      <div className='section-text-banner'>
        <div className='main-title-banner'>Little Lemmon</div>
        <div className='subtitle-banner'>Chicago</div>
        <p className='text-banner'>
          We are a family owned
          Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
      </div>
      <div className='section-image-banner'>
        <img className='image-banner1' src={MainPhoto} alt='imgen restaurante' />
        <img className='image-banner2' src={MainPhoto} alt='imgen restaurante' />
      </div>
    </section>
  )
}

export default Banner