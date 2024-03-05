import React from 'react';
import heroimg from "../assets/gem.png";


function Hero() {
  return (
    <div className='hero'>

    <img src={heroimg} alt="" />
    <div className="content">      
    
    <h1 className="title">Discover the World of  Gemstones</h1>
    <p className="heropara">Discover the World of  Gemstones
    Unveiling Earth's Treasures: Explore the Radiance of Gemstones - Your Ultimate Guide to the World of Precious and Semi-Precious Gems</p>

    <button>Get Started</button>

    </div>
    
    
    </div>
  )
}

export default Hero