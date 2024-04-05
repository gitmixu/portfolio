import React from 'react'
import { FaTiktok, FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='footer'>
     <p>info@devsndesigns.fi</p>
     <div className="socials">
          <FaTiktok />
          <FaInstagram />
     </div>
    </div>
  )
}

export default Footer