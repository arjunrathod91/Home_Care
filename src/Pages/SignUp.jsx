import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className='center'>
        <div className="signuppage">
        <div className="Signupbox">
          <form>
            <h3>Sign Page</h3>
            <input type="text" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            <input type="date" />
            <Link to="/mainpage"><button className='defaultbtn'>Sign Up</button></Link>
            <Link to="/loginpage"><p>Already have account,Log in</p></Link>
          </form>

        </div>
        </div>
      
    </div>
  )
}

export default SignUp
