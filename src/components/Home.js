import React from 'react';
import image1 from '../Images/image1.png';
import image2 from '../Images/image2.png';
import image3 from '../Images/image3.png';
import image4 from '../Images/image4.png';
import image5 from '../Images/image5.png';
import image6 from '../Images/image6.png';
import image7 from '../Images/image7.png';
import image8 from '../Images/image8.png';

const Home = () => {
    return (
        <div className = "home-page">         
            <div className="container">
            <h3 style={{ fontWeight:'normal'}} className="my-4">Fresh Recommdations</h3>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card" style={{width: '16rem'}}>
                        <img style={{padding:"15px"}} src= {image1} className="card-img-top" />
                        <div className="card-body">
                        <h5 className="card-title">RS 2,000</h5>
                        <p className="card-text text-secondary">Samsung Galaxy Note 3</p>
                        <p style={{fontSize:"10px", marginTop:"47px", marginBottom:"-9px"}}>KAHNPUR, PUNJAB</p>
                        <p style={{fontSize:"10px", marginBottom:"-9px"}} className="float-right">TODAY</p>
                        </div>
                        </div>
                    </div>

                    <div className="col-md-3 ">
                        <div className="card" style={{width: '16rem'}}>
                        <center><img style={{padding:"15px", height:"160px",width:"100px"}} src= {image2} className="card-img-top" /></center>
                        <div className="card-body">
                        <h5 className="card-title">RS 29,000</h5>
                        <p className="card-text text-secondary">Oppo A52 6 Month Warranty</p>
                        <p style={{fontSize:"10px", marginTop:"47px", marginBottom:"-9px"}}>QUETTA, BALOCHISTAN</p>
                        <p style={{fontSize:"10px", marginBottom:"-9px"}} className="float-right">TODAY</p>
                        </div>
                        </div>
                    </div>

                    <div className="col-md-3 ">
                        <div className="card" style={{width: '16rem',}}>
                        <center><img style={{padding:"15px", height:"160px",width:"150px"}} src= {image3} className="card-img-top" /></center>
                        <div className="card-body">
                        <h5 className="card-title">RS 25,000</h5>
                        <p className="card-text text-secondary">Tecno camon 15 pro 6/128gb</p>
                        <p style={{fontSize:"10px", marginTop:"47px", marginBottom:"-9px"}}>BANI GALA, ISLAMABAD</p>
                        <p style={{fontSize:"10px", marginBottom:"-9px"}} className="float-right">TODAY</p>
                        </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card" style={{width: '16rem'}}>
                           
                        <img style={{padding:"15px", height:'160px'}} src= {image4} className="card-img-top" />
                        <div className="card-body" >
                        <h5 className="card-title">RS 1,699</h5>
                        <p className="card-text text-secondary">Best Shoes / Loafers for men</p>
                        <p style={{fontSize:"10px", marginTop:"48px", marginBottom:"-9px"}}>DHA CITY, KARACHI</p>
                        <p style={{fontSize:"10px", marginBottom:"-9px"}} className="float-right">TODAY</p>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                <div className="col-md-3">
                        <div className="card" style={{width: '16rem'}}>
                            <p className="featuredProducts" >FEATURED</p>
                            <center><img style={{padding:"15px", height:"160px",width:"150px"}} src= {image5} className="card-img-top" /></center>
                        <div className="card-body" style={{borderLeft:"5px solid #FFCE32"}}>
                        <h5 className="card-title">RS 7,500</h5>
                        <p className="card-text text-secondary">Computer chair - office chair</p>
                        <p style={{fontSize:"10px", marginTop:"5px", marginBottom:"-9px"}}>COLLEGE ROAD, LAHORE</p>
                        <p style={{fontSize:"10px", marginBottom:"-9px"}} className="float-right">APR 15</p>
                        </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card mt-1" style={{width: '16rem'}}>
                            <p className="featuredProducts" >FEATURED</p>
                            <center><img style={{padding:"15px", height:"160px",width:"240px"}} src= {image6} className="card-img-top" /></center>
                        <div className="card-body" style={{borderLeft:"5px solid #FFCE32"}}>
                        <h5 className="card-title">RS 960,000</h5>
                        <p className="card-text text-secondary">Honda Civic 2000 VTI Manual</p>
                        <p style={{fontSize:"10px", marginTop:"5px", marginBottom:"-9px"}}>G-9, ISLAMABAD</p>
                        <p style={{fontSize:"10px", marginBottom:"-9px"}} className="float-right">MAR 15</p>
                        </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card mt-1" style={{width: '16rem'}}>
                            <p className="featuredProducts" >FEATURED</p>
                            <center><img style={{padding:"15px", height:"160px",width:"140px"}} src= {image7} className="card-img-top" /></center>
                        <div className="card-body" style={{borderLeft:"5px solid #FFCE32"}}>
                        <h5 className="card-title">RS 133,000</h5>
                        <p className="card-text text-secondary">I phone 11 pro max 512GB</p>
                        <p style={{fontSize:"10px", marginTop:"5px", marginBottom:"-9px"}}>MODEL TOWN LINK ROAD, LAHORE</p>
                        <p style={{fontSize:"10px", marginBottom:"-9px"}} className="float-right">APR 05</p>
                        </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card mt-1" style={{width: '16rem'}}>
                            <p className="featuredProducts" >FEATURED</p>
                            <center><img style={{padding:"15px", height:"160px",width:"200px"}} src= {image8} className="card-img-top" /></center>
                        <div className="card-body" style={{borderLeft:"5px solid #FFCE32"}}>
                        <h5 className="card-title">RS 55,000</h5>
                        <p className="card-text text-secondary">Ipad 7th Generation 32 GB</p>
                        <p style={{fontSize:"10px", marginTop:"5px", marginBottom:"-9px"}}>EME SOCIETY , LAHORE</p>
                        <p style={{fontSize:"10px", marginBottom:"-9px"}} className="float-right">APR 09</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;

