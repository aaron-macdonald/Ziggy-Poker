import React from 'react'

import { Link } from 'react-router-dom'

function Header () {
  return (
    <div className='header'>
      <h1 className='brand-title'>Ziggy Poker</h1>
      <nav className='nav'>
        <ul className='nav-list'>
          <li className='nav-item'>
            <Link to='/' className='pure-button'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to='/players/new' className='pure-button'>Add Player</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
