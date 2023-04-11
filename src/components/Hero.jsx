import React from 'react'
import '../styles/Hero.css'
import Button from "../components/Button"
import MainPhoto from '../assets/mainfood.jpg'
const Hero = () => {
  return (
    <section className='main-section'>
      <div className='section-text'>
        <div className='title'>Little Lemmon</div>
        <div className='subtitle'>Chicago</div>
        <p className='text'>
          We are a family owned
          Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
        <Button text="Reserve a Table" />
      </div>
      <div className='section-image'>
        <img className='main-image' src={MainPhoto} alt='imgen restaurante' />
      </div>
    </section>

  )
}

export default Hero