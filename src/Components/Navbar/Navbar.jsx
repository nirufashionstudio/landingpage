import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">Niru Fashion Studio</div>
        <ul className='nav-menu'>
          <li>Home</li>
          <li>About</li>
          <li className='nav-contact'>Contact</li>
        </ul>
      </div>
  )
}

export default Navbar