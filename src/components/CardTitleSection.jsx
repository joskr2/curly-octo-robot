import React from 'react'
import "../styles/CardtTitleSection.css"
import Button from './Button'

const CardTitleSection = () => {
  return (
    <section className='card-title-section'>
      <p className='title-section'>This weeks specials!</p>
      <Button text="Online Menu" />
    </section>
  )
}

export default CardTitleSection