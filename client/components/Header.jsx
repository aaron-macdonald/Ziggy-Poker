import React from 'react'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <div className="navbar-fixed">
      <nav className="teal">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">Ziggys Poker</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/players">Players</Link></li>
            <li><Link to="/games">Games</Link></li>
            <li><Link to="/table">Table</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
