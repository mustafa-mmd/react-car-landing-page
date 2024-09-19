import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div>
      <nav>
        <h1>Mj.Car</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Explore</li>
          <li className='cont'>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar