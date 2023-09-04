import React from 'react'
import doctor from '../Components/Assets/doctor (1).png'

function Meetexperts() {
  return (
    <div className='center'>
      <div className="doctors">
        <div className="meet">
          <h2>Meet Our Experts</h2>
        </div>
        <div className="flexbox">
          <div className="box">
            <div className="icon">
            <img src={doctor} alt="doctor1" />
            </div>
            <p>Subhash Roy</p>
            <div className="ratings">
            </div>
            <div className="contactno">
              <p>+917350XXXXXX</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
            <img src={doctor} alt="doctor2" />
            </div>
            <p>Amit Jain</p>
            <div className="ratings">
            </div>
            <div className="contactno">
              <p>+917350XXXXXX</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
            <img src={doctor} alt="doctor3" />
            </div>
            <p>Itiana Jons</p>
            <div className="ratings">
            </div>
            <div className="contactno">
              <p>+917350XXXXXX</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
            <img src={doctor} alt="doctor4" />
            </div>
            <p>Carl Jen</p>
            <div className="ratings">
            </div>
            <div className="contactno">
              <p>+917350XXXXXX</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Meetexperts
