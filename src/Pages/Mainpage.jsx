import React from 'react'
import ambulance from '../Components/Assets/ambulance (1).png'
import doctor from '../Components/Assets/doctor (1).png'
import health from '../Components/Assets/healthcare (2).png'
import scan from '../Components/Assets/barcode-scan.png'
import { Link } from 'react-router-dom'


function Mainpage() {



    /*  git init git add . git status git copy some commands like push origin */
    return (
        <div>
            {/* <Navbar2/> */}
            <div className="mainpage">
                <div className="flexbox">
                <Link to="/yourdetail"><div className="box">
                            <div className="icon">
                                <img src={health} alt="" />
                            </div>
                            <div className="desc">
                                <p>Diesese</p>
                            </div>
                        </div></Link>
                        <Link to="/scanandcheck"><div className="box">
                            <div className="icon">
                                <img src={scan} alt="" />
                            </div>
                            <div className="desc">
                                <p>Scan and Check</p>
                            </div>
                        </div></Link>
                        <Link to="/meetexperts"><div className="box">
                            <div className="icon">
                                <img src={doctor} alt="" />
                            </div>
                            <div className="desc">
                                <p>Meet Experts</p>
                            </div>
                        </div></Link>
                        <Link to="/ambulance"><div className="box">
                            <div className="icon">
                                <img src={ambulance} alt="" />
                            </div>
                            <div className="desc">
                                <p>Ambulance</p>
                            </div>
                        </div>  </Link>
                    </div>
                </div>
                </div>
                )
}

                export default Mainpage
