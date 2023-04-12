import React from 'react'
import Nav from './Nav'
import '../styles/Header.css'
import logo from '../assets/Logo.svg'
import { useNavigate } from 'react-router-dom'
const Header = () => {

  const navigate = useNavigate();

  return (
    <header>
      <img src={logo} alt='logo' onClick={() => navigate( "/" )} />
      <Nav />
    </header>
  )
}

export default Header