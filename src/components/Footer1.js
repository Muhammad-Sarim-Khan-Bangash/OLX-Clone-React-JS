import React from 'react'
import phoneImage from '../Images/phoneImage.png';
import appstore from '../Images/appstore.png';
import playstore from '../Images/playstore.png';


const Footer1 = () => {
    return (
        <div style={{background:"#F7F8F9", height:"32vh"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                       <img src={phoneImage} />
                    </div>
                    <div className="col-md-4 pl-5 pt-4">
                       <h1 style={{color:"#002f34"}}>TRY OLX APP</h1>
                       <p style={{color:"#002f34", fontSize:"17px"}}>Buy, sell and find just about anything using the app on your mobile.</p>
                    </div>

                    <div className="col-md-4 pl-4" style={{borderLeft:"2px solid #ccc", height:'25vh', marginTop:'20px'}}>
                      <h5 style={{paddingTop:"50px", fontSize:"15px",fontWeight:"bold"}}>GET YOUR APP TODAY</h5>
                      <div className="store">
                        <img src={appstore} />
                        <img className="ml-1" src={playstore}/>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer1
