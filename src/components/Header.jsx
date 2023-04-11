import React from 'react'
import Nav from './Nav'
import '../styles/Header.css'
import logo from '../assets/Logo.svg'
const Header = () => {
  return (
    <header>
    <img src={logo} alt='logo' />
      <Nav/>
    </header>
  )
}

export default Header