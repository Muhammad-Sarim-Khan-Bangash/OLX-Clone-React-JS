import React from 'react';
import logo from '../Images/olx-logo.png';
import bgImage from '../Images/bg.jpg';

const Header = () => {
    return (
        <>
        <div className="header fixed flex alc">
            <div className="logo">
                <img src = {logo} />
            </div>
            <div className="location rel flex alc ">
                <div><i style={{fontSize:"24px", padding:"10px" }} class="fas fa-search"></i></div>
                <input className="input1" type="text"  placeholder="Your location" value ="Pakistan" />
                <button className="btn-down"><i class="fas fa-chevron-down"></i></button>
            </div>
            <div className="search flex alc ">
                <input type="text" placeholder="Find Cars, Mobile Phones and more..." className="query" />
                <button className="btn-search"><i class="fas fa-search"></i></button>
            </div>
            <a className="login">Login</a>
            <div className="actions flex alc"> 
                <button className="sell flex alc">
                    <div><i class="fas fa-plus"></i></div>       
                    <h6 style={{paddingTop:'5px',paddingLeft:"2px"}}>SELL</h6>
                </button>
            </div>
        </div>


        <div className="hnav fixed flex alc">
          <button className="view-cates flex alc">
            <h6 style={{paddingTop:'5px'}}>ALL CATEGORIES</h6>
            <button className="btn-down"><i style={{paddingTop:'5px'}} class="fas fa-chevron-down"></i></button>
          </button>
          <div className="categories">
              <a href="#">Mobile Phones</a>
              <a href="#">Cars</a>
              <a href="#">Motor Cycles</a>
              <a href="#">Houses</a>
              <a href="#">TV-Video-Audio</a>
              <a href="#">Tablets</a>
              <a href="#">Lands & Plots</a>
          </div>
        </div>


        <div className="bgImage" >
            <img src = {bgImage} />
        </div>
        </>
    )
}

export default Header;
