import React from 'react'
import '../styles/Nav.css'
import { Link } from 'react-router-dom'


const menuItems = [
  {
    title: 'Home',
    path: '/',
    cName: 'nav-links'
  },
  {
    title: 'About',
    path: '/about',
    cName: 'nav-links'
  },
  {
    title: 'Menu',
    path: '/menu',
    cName: 'nav-links'
  },
  {
    title: 'Reservations',
    path: '/reservations',
    cName: 'nav-links'
  },
  {
    title: 'Order Online',
    path: '/order-online',
    cName: 'nav-links'
  },
  {
    title: 'Login',
    path: '/login',
    cName: 'nav-links'
  }
]

const Nav = () => {
  return (
    <>
      <nav>
        {
          menuItems.map( ( item, index ) => {
            return <Link key={index} className={item.cName} to={item.path} >
              {item.title}
            </Link>
          } )
        }
      </nav>
    </>

  )
}

export default Nav