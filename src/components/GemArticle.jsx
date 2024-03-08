import React from 'react';
import "./gem.css"
import gembg from "../assets/gembg.png";
import card1img from "../assets/gem1.png";
import card2img from "../assets/gem2.png";
import card3img from "../assets/gem3.png";

const cards=[{
    title:"What Is Ruby - Gemstone Facts and Information",
    img:`${card1img}`,
    desc:"Ruby is probably the most iconic coloured gemstone in the world, and its name will forever be linked with its striking, definitive colour..."
},
{
    title:"What Is Ruby - Gemstone Facts and Information",
    img:`${card2img}`,
    desc:"Ruby is probably the most iconic coloured gemstone in the world, and its name will forever be linked with its striking, definitive colour..."
},
{
    title:"What Is Ruby - Gemstone Facts and Information",
    img:`${card3img}`,
    desc:"Ruby is probably the most iconic coloured gemstone in the world, and its name will forever be linked with its striking, definitive colour..."
}


]

function GemArticle() {
    return (

        <>

            <div className="gemcontainer">
                <img src={gembg} alt="" />

                <div className="gemContent">


                    <h1 className="title">Gemstones Articles</h1>
                    <p className="desc">Unveiling the World of Gemstones: In-depth Articles and Insights on the Beauty, History, and Mystique of Earth's Precious Treasures</p>

                    <div className="cardContainer">

                    {
                        cards.map((item,ind)=>(
                            <div className="card" key={ind}>
                            <div>
                                <img className='cardimg' src={item.img} alt="" />

                            </div>


                            <h2 className="cardtitle">{item.title}</h2>
                            <p className="carddesc">{item.desc}</p>
                            <button>read more</button>

                        </div>
                            
                            
                            ))
                    }

                       


                    </div>

                </div>
            </div>



        </>

    )
}

export default GemArticle