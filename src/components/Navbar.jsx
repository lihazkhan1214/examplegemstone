import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="">
 
    <Link to="/" >homepage</Link>
    <br />
    <Link to="/about" >aboutpage</Link>
    <br />

    <a href="/about">aboutpage</a>
    
    </div>
  )
}

export default Navbar