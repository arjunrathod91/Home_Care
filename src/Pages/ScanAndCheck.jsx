import React from 'react'
import medicine from '../Components/Assets/drugs.png'
import skin from '../Components/Assets/irritation.png'

function ScanAndCheck() {
  return (
    <div className='check'>

      <div className="check-medicine">
      <h1>Scan and Check</h1>

        <div className="med-check-box">
        <img src={medicine} alt="" />
          <label htmlFor="">Choose file for Check Medicine</label>
        <input type="file" /> 

        </div>
        <div className="med-check-box">
        <img src={skin} alt="symptomimg" />
          <label htmlFor="">Choose file for Check Skin</label>
        <input type="file" /> 

        </div>

      </div>
      
    </div>
  )
}

export default ScanAndCheck
