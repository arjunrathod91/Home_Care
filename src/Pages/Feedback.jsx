import React, { useState } from 'react'
// import '../App.css'

function Feedback({isPress}) {

    const [subButton,setSubButton] = useState(false)
    // let a = 0

    function letOut(e){
        e.preventDefault()
        subBtn()
        setTimeout(()=>{
            setSubButton(false)
        },6000)
    }
    const subBtn=()=>{
        setTimeout(()=>{
            setSubButton(true)
        },1000)

    }

    const dynamicStyle = {
        display: subButton? 'flex':'none'
    }





    return (
        <div>
            <div className="feedback">
                <form>
                    <input type="text" placeholder='E-mail' />
                    <p>Feedback</p>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button className='defaultbtn' onClick={letOut}>Submit</button>
                    <div className="popup" style={dynamicStyle}>Your feedback is succesfully send</div>
                </form>
            </div>

        </div>
    )
}

export default Feedback
