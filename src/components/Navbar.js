import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/'>
          {/* <img src={logo} alt='cocktail db logo' className='logo' /> */}
           <img src="https://cdn.vectorstock.com/i/preview-1x/96/25/shaker-neon-logo-cocktail-party-neon-sign-vector-23449625.webp" alt='cocktail db logo' className='logo' />
        </Link>
        <ul className='nav-links'>
          <li>
            <Link to='/'>cocktails</Link>
          </li>
          <li>
            <Link to='/Home'>Home</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}