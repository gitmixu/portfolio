import { useState } from 'react'
import './Head.css'
import { GoArrowUp, GoArrowDown, GoArrowLeft, GoArrowRight } from "react-icons/go";


const Head = () => {
     const [ data, setData ] = useState("gallery")
     const [ mobileNav, setMobileNav] = useState("up")
  return (
    <div className='head'>
          <div className="title">
               <div className="logo">
                    <h1>DevsNDesigns</h1>
               </div>
               <div className="contact">
                    <p>info@devsndesigns.fi</p>
               </div>
          </div>
          <div className="about">
               <p>Suunnittelen, ohjelmoin, kuvaan ja videoin kaiken ilman valmiita pohjia tai tekoälyä</p>
          </div>
    </div>
  )
}

export default Head