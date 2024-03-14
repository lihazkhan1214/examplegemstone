import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero';
import TopSearchGem from '../../components/TopSearchGem';
import GemArticle from '../../components/GemArticle';
import GemRearest from '../../components/GemRearest';
import Rawgem from '../../components/Rawgem';
import Footer from '../../components/Footer';

function Homepage() {
  return (

    <>
<Hero/>
<TopSearchGem/>
<GemArticle/>
<GemRearest/>
   <Rawgem/>

   <Footer/>

    </>
  )
}

export default Homepage