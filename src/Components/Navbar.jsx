import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <div className="navbar">
          <div className="logo">

          </div>
          <div className="links">
          <ul>
          <li><Link to="/mainpage">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/feedback">Feedback</Link></li>
          </ul>
          </div>
            
        </div>

      
    </div>
  )
}

export default Navbar
