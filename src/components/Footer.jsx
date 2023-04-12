import React from 'react'
import "../styles/Footer.css"
import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <footer>
      <img className='footer-logo-image' src='../../public/favicon.png' alt='logo' />
      <div className='footer-container-sections'>
        <section className='footer-sections-links-to-pages'>
          <h3 className='footer-title-of-subsection'>
            Sections
          </h3>
          <Link className='footer-link-to-page'>
            Home
          </Link>
          <Link className='footer-link-to-page'>
            Menu
          </Link>
          <Link className='footer-link-to-page' to="/reservations" >
            Reservations
          </Link>
        </section>
        <section>
          <h3 className='footer-title-of-subsection'>
            Contact
          </h3>
          <p className='footer-address-text'>Address: 1234 Main Street, New York, NY 10001</p>
          <p className='footer-phone'>Phone: 212-555-5555</p>
          <p className='footer-email-text'>Email:
            <a href="mailto:mail@mail.com" />
          </p>
        </section>
        <section>
          <h3 className='footer-title-of-subsection'>
            Stay up to date
          </h3>
          <p>Sign up for our newsletter to get the latest news and updates.</p>
          <form className='footer-form-newslletter-form'>
            <input type="email" placeholder="Email Address" />
            <button type="submit">Sign Up</button>
          </form>
        </section>
      </div>
    </footer>
  )
}

export default Footer