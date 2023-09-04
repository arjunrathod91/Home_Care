import React from 'react'
import ambu from '../Components/Assets/ambulance.png'

function Ambulance() {
  const callAmbulance = () => {
    window.location.href = 'tel:911';
  };
  return (
    <div>
      <div className="ambu">
        <h1 style={{marginTop:'30px'}}>Emergency</h1>
        <div>
        <img src={ambu} alt="" />
        </div>
        <div className="callbtn">
          <button className='defaultbtn' onClick={callAmbulance}>Call</button>
        </div>
      </div>
      
    </div>
  )
}

export default Ambulance
