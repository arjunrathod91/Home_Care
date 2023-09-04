import React from 'react'
import theme from '../Components/Assets/them.jpg'
import { Link } from 'react-router-dom'

function Home() {

  return (
    <div>
        <div className="homepage">
          <div className="section">
          <div className="left">
            <div className="h2tag">
            <h2>Homecare</h2>
            </div>
            <div className="ptag">
              <p>"HomeCare" is a  healthcare services and support that are provided to individuals in the comfort of their own homes.</p>
            </div>
            <div className="startbtn">
              <Link to="/Loginpage"><button>Get Started</button></Link>
            </div>
          </div>
          <div className="right">
            <img src={theme} alt="theme" />
          </div>
          </div>

        </div>
      
    </div>
  )
}

export default Home
