import React from 'react'
import './Home.css'
import kirsikka from '../../imgs/kirsikka.png'

const Home = () => {
  return (
    <div className='home'>
        <div className="title">Luovat ratkaisut yrityksesi tueksi</div>
          <div className="contact">
            <p>Tarjouskyselyt</p>
            <p>info@devsndesigns.fi</p>
        </div>
        
        <div className="img"><img src={kirsikka} alt="" /></div>
    </div>
  )
}

export default Home