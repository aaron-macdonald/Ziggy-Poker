import React from 'react'

import { Link } from 'react-router-dom'

function Header () {
  return (
    <div className='header'>
      <h1 className=''>Ziggy Poker</h1>
      <nav className=''>
        <ul className=''>
          <li className=''>
            <Link to='/' className=''>Home</Link>
          </li>
          <li className=''>
            <Link to='/players/new' className=''>Add Player</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
