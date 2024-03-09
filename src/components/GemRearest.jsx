import React from 'react';
import "./gemreare.css";
import reareimg from "../assets/reare.png"

function GemRearest() {
  return (
    <div className='gemReare'>

      <h1 className="title" style={{color:"#000",textAlign:"center"}}>Gemstones</h1>

      <div className="gemReareContainer">

        <div className="leftside">
          <h className="title">The Most Rarest Gemstones</h>
          <p className="desc">"Embark on a journey through the rarest treasures of the Earth with our collection of the most elusive gemstones. Each one is a marvel of nature, boasting exquisite colors, exceptional clarity, and a scarcity that adds to its allure. Discover the mystique of these precious stones, from the mesmerizing blue hues of benitoite to the enchanting pink of musgravite. Our curated selection showcases nature's masterpieces, captivating collectors and enthusiasts alike with the extraordinary beauty found only in the world's most elusive gemstones.</p>
          <button>sell all</button>


        </div>

        <div className="rightside">

        <img src={reareimg} alt="" />
        
        
        
        </div>



      </div>


    </div>
  )
}

export default GemRearest