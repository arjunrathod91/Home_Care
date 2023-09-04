import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function YourDetail() {
  // const [checked,setChecked] = (false)
  const [age,setAge] = useState("")
  const [height,setHeight] = useState("")
  const [weight,setWeight] = useState("")
  

  return (
    <div>
      <form>
        <input type="text" placeholder='Enter your Age' value={age} onChange={(e)=>setAge(e.target.value)}/>
        <input type="text" placeholder='Enter Your Height' value={weight} onChange={(e)=>setWeight(e.target.value)}/>
        <input type="text" placeholder='Enter Your Weight' value={height} onChange={(e)=>setHeight(e.target.value)} />
        <p className='symptoms'>Symptoms</p>
        <div className="checkboxes">
        <label for="headeck"><input type="checkbox" id="headeck"/> Headech </label>
        <label><input type="checkbox"/> Stomoch Pain </label>
        <label><input type="checkbox" /> iching </label>
        <label><input type="checkbox" /> Cough </label>
        <label><input type="checkbox" /> fever </label>
        </div>
        <p>Custom</p>
        <textarea name="" id="" cols="30" rows="10" placeholder='Elaborate Your Problem'>

        </textarea>
        <Link to="/symptoms"><button className='defaultbtn'>Submit</button></Link>
      </form>
      
    </div>
  )
}

export default YourDetail
