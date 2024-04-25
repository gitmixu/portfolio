import React from 'react'
import { Services } from './components/Services'
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import img from './imgs/random.png'

const App = () => {

  return (
    <div className='main'>
      <div className="img">
        <img src={img} alt="" />
      </div>
      <div className="logo"><h1>DevsNDesigns</h1></div>
      <Services />
      <div className="footer">
        <div className="socials">
          <div className="box"><FaPinterestP/></div>
          <div className="box"><FaInstagram/></div>
          <div className="box"><FaTiktok/></div>
        </div>
        <p>info@devsndesigns.fi</p>
      </div>
    </div>
  )
}

export default App