import React from 'react'
import '../styles/Button.css'
import { useNavigate } from 'react-router-dom'
const Button = ( { text, redirectTo } ) => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate( redirectTo )}>{text}</button>
  )
}

export default Button