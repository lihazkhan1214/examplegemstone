import React from 'react';
import cardimg1 from "../assets/card1.png";
import cardimg2 from "../assets/card2.png";
import cardimg3 from "../assets/card3.png";
import cardimg4 from "../assets/card4.png";
import cardimg5 from "../assets/card5.png";

import "./topsearch.css";

const cards = [
  {
    title: "Ruby",
    img: `${cardimg1}`

  },
  {
    title: "Emerald",
    img: `${cardimg2}`

  },
  {
    title: "Sapphire",
    img: `${cardimg3}`

  },
  {
    title: "Pearl",
    img: `${cardimg4}`

  },

  {
    title: "Alexandrite",
    img: `${cardimg5}`

  },

];


function TopSearchGem() {
  return (
    <div className='topsearchgem'>
      <h1 className="title">Gemstone Encyclopedia</h1>

      <h2 className="subheading">Top Searched gemstones </h2>

      <div className="cardContianer">


      {
        cards.map((item,ind)=>(


          <div className="card">
          <img src={item.img} alt="" />

          <h3 className="cardtitel">{item.title}</h3>


        </div>

        ))
      }


       



        
        





      </div>


    </div>
  )
}

export default TopSearchGem;