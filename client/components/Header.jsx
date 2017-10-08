import React from 'react'

import { Link } from 'react-router-dom'

function Header () {
  return (
    <div className="navbar-fixed">
      <nav className="teal">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">Ziggys Poker</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/">Home</a></li>
            <li><a href="/players/new">Add Player</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
