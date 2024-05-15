import React from 'react'
import img from '../../imgs/graphic.png'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className="info">
        <div className="title"><p>Developer &</p><span>Designer</span></div>
        2 nopeimmalle asiakkaalle alennusta
      </div>
     <div className="img"><img src={img} alt="" /></div>
    </div>
  )
}

export default Home