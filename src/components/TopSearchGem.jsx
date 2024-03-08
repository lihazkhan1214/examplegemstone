import React,{useState} from 'react';
import cardimg1 from "../assets/card1.png";
import cardimg2 from "../assets/card2.png";
import cardimg3 from "../assets/card3.png";
import cardimg4 from "../assets/card4.png";
import cardimg5 from "../assets/card5.png";
import fltimg1 from "../assets/Vector.png";
import fltimg2 from "../assets/filter.png"

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




  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCards, setFilteredCards] = useState(cards);
  const handleSearch=(e)=>{
  setSearchTerm(e.target.value);

  const flitered=cards.filter(item=>item.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))

  setFilteredCards(flitered)


  }


 










  return (
    <div className='topsearchgem'>
      <h1 className="title">Gemstone Encyclopedia</h1>

      <div className="filterContainer">
        <img className='leftsideimg' src={fltimg1} alt="" />

        <input type="text" placeholder='Search for gems...' onChange={handleSearch}  />

        <img className='rightsideimg' src={fltimg2} alt="" />

      </div>

      <h2 className="subheading">Top Searched gemstones </h2>

      <div className="cardContianer">


        {
          filteredCards.map((item, ind) => (


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