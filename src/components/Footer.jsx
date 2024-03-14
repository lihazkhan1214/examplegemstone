import "./footer.css";
import googlimg from "../assets/google.png";
import faceimg from "../assets/facebook.png";
import instimg from "../assets/instagram.png";
import logo from "../assets/logo.png";

function Footer() {
  return (
  <div className="Footer">
  <div className="leftside">

  <img src={logo} alt="" className="logo" />

  <p className="para">Unveiling Earth's Treasures: Explore the Radiance of Gemstones - Your Ultimate Guide to the World of Precious and Semi-Precious Gems</p>


  <div className="iconContainer">

  <img src={googlimg} alt="" />
  <img src={faceimg} alt="" />
  <img src={instimg} alt="" />
  
  
  
  </div>
  
  
  
  </div>
  <div className="rightside">

  <div className="rightLinks">

  <ul>

  <li>Home</li>
  <li>Encyclopedia</li>
  <li>About us</li>
  <li>Articles</li>
  <li>Raw gemstones</li>
  <li>GemStones</li>
  <li>BirthStones</li>

  
  
  </ul>
  
  
  
  </div>

  <div className="subscribe">
  <input type="text" placeholder="submit your email" />
  <button>Subscribe</button>
  
  </div>
  
  
  </div>
  
  
  
  </div>
  )
}

export default Footer