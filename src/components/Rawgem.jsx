import React from 'react';
import "./raggem.css";
import rawimg from "../assets/rawimg.png";
import raw1 from "../assets/raw1.png"


function Rawgem() {
    return (
        <div className='rawgem'>
            <img src={rawimg} alt="" />
            <div className="rawContent">


                <h1 className="heading">Raw Gemstones</h1>
                <p className="desc">Embark on a global gemstone odyssey, from Sri Lanka's dazzling sapphires to Colombia's lush emeralds, exploring the countries with the richest variety of precious stones.</p>

                <div className="cardContainer">


                    <div className="card">

                        <div>
                            <h3 className="cardtitle">
                                Madagascar
                            </h3>
                            <p className="carddesc">
                                From the mesmerizing blues of sapphires to the fiery allure of rubies, the spectrum extends to vibrant tourmalines and the iridescent beauty of labradorites. Madagascar's unique geological landscape blesses it with an extraordinary variety of gemstones.
                            </p>



                        </div>

                        <div>
                            <img src={raw1} alt="" className="cardimg" />

                        </div>

                    </div>
                    <button>Veiw All</button>

                </div>

          
            </div>





        </div>
    )
}

export default Rawgem