import React from 'react'
import { Link } from 'react-router-dom'


function LoginPage() {
  return (
    <div className='center'>
        <div className="loginbox">
          <form>
            <h3>Log In</h3>
            <input type="text" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            <Link to="/mainpage"><button className='defaultbtn'>Log In</button></Link>
            <Link to="/signuppage"><p>You not registrated,Sign Up</p></Link>

          </form>

        </div>
        <div className="rightbox">

        </div>
      
    </div>

  )
}

export default LoginPage
