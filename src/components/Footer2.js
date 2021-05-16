import React from 'react'
import appstore from '../Images/appstore.png';
import playstore from '../Images/playstore.png';

const Footer2 = () => {
    return (
        <div  style={{background:"#EBEEEF", height:"23vh", borderBottom:"2px solid #ccc"}}>
            <div className="container">
                <div className="row">
                <div className="col-md-2 columnOne">
                    <h6 className="pcategories">POPULAR CATEGORIES</h6>
                    <p className="text-secondary p-0">Cars</p>
                    <p className="text-secondary p-0">Flats for rent</p>
                    <p className="text-secondary p-0">Jobs</p>
                    <p className="text-secondary p-0">Mobile Phones</p>
                </div>
                 <div className="col-md-2 columnTwo">
                    <h6 className="pcategories">TRENDING SEARCHES</h6>
                    <p className="text-secondary p-0">Bikes</p>
                    <p className="text-secondary p-0">Watches</p>
                    <p className="text-secondary p-0">Books</p>
                    <p className="text-secondary p-0">Dogs</p>
                </div>
                <div className="col-md-2 columnThree">
                    <h6 className="pcategories">ABOUT US</h6>
                    <p className="text-secondary p-0">About OLX Group</p>
                    <p className="text-secondary p-0">OLX Blog</p>
                    <p className="text-secondary p-0">Contact US</p>
                    <p className="text-secondary p-0">OLX for Buiness</p>
                </div>
                <div className="col-md-3 columnFour">
                    <h6 className="pcategories">OLX</h6>
                    <p className="text-secondary p-0">Help</p>
                    <p className="text-secondary p-0">Sitemap</p>
                    <p className="text-secondary p-0">Legal and Privacy Information</p>
                </div>
                <div className="col-md-3 columnFive">
                    <h6 className="pcategories">FOLLOW US</h6>
                    <div className="socialIcons">
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-youtube"></i>
                        <i class="fab fa-instagram"></i>
                    </div>
                    <div className="store2">
                        <img src={appstore} />
                        <img className="ml-1" src={playstore}/>
                      </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Footer2
