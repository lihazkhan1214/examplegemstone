import React from 'react';
import "./raggem.css";
import rawimg from "../assets/rawimg.png";
import raw1 from "../assets/raw1.png";
import raw2 from "../assets/raw2.png";
import raw3 from "../assets/raw3.png";

const cards=[
    {
        title:"Ruby",
        desc:"Immerse yourself in the allure of Sri Lanka's gemstone treasure trove, where the island's fertile soil reveals a spectrum of vibrant sapphires, including the famed Ceylon blue. Renowned for centuries, these ethereal gems reflect the rich history and geological splendor that make Sri Lanka a gemstone paradise.",
        img:`${raw1}`
    },
    {
        title:"Meral",
        desc:"From the lush green brilliance of Brazilian emeralds to the captivating hues of amethysts, aquamarines, tourmalines, and topazes, Brazil stands as a vibrant mosaic of gemstone diversity. The country's rich geological landscape reveals an extraordinary array of precious stones.",
        img:`${raw2}`
    },
    {
        title:"Madagascar",
        desc:" From the mesmerizing blues of sapphires to the fiery allure of rubies, the spectrum extends to vibrant tourmalines and the iridescent beauty of labradorites. Madagascar's unique geological landscape blesses it with an extraordinary variety of gemstones.",
        img:`${raw3}`
    }
]


function Rawgem() {
    return (
        <div className='rawgem'>
            <img src={rawimg} alt="" />
            <div className="rawContent">


                <h1 className="heading">Raw Gemstones</h1>
                <p className="desc">Embark on a global gemstone odyssey, from Sri Lanka's dazzling sapphires to Colombia's lush emeralds, exploring the countries with the richest variety of precious stones.</p>

                <div className="cardContainer">


                {
                    cards.map((item,ind)=>(

                        <div className="card">

                        <div>
                            <h3 className="cardtitle">
                                {item.title}
                            </h3>
                            <p className="carddesc">
                               {item.desc}
                            </p>



                        </div>

                        <div>
                            <img src={item.img} alt="" className="cardimg" />

                        </div>

                    </div>

                    ))
                }


                    
                    <button>Veiw All</button>

                </div>

          
            </div>





        </div>
    )
}

export default Rawgem