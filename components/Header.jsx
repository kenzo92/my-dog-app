import React from 'react'
import {Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
            <Link className="site-logo" to="/">#DogLife</Link>
        <nav>
            <Link to="/about">About</Link>
            <Link to="/dogs">Dogs</Link>
        </nav>
  </header>
  )
}

export default Header
