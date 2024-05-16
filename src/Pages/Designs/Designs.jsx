import React from 'react'
import './Designs.css'
import { color } from 'framer-motion'

/* 
#9BE3C1
#87CE8E
#2e2e2e
#D5CEFF
#fff
#FFDD86
#F68D8D
#6298CA
#3A5F82
*/

const Designs = () => {
  return (
     <div className='designs'>
      <div className="title">
        <h1>Designs</h1>
        <p>Taidetta makuusi,</p>
        <p>tarvitsit sitten julisteen, logon, käyntikortin tai muuta.</p>
      </div>
      <div className="services">
        <div className="service white-box" style={{backgroundColor:"#9BE3C1"}}>
          <h1>somistus</h1>
          <p>tuotteiden, paikkojen esillepano.</p>
        </div>
        <div className="service white-box" style={{backgroundColor:"#87CE8E"}}>
          <h1>kuvitus</h1>
          <p>taide.</p>
        </div>
        <div className="service white-box" style={{backgroundColor:"lightGrey"}}>
          <h1>UI/UX</h1>
          <p>visuaalinen ilme.</p>
        </div>
        <div className="service white-box" style={{backgroundColor:"#D5CEFF"}}>
          <h1>GR-koodit</h1>
        </div>
        <div className="service white-box" style={{backgroundColor:"#fff"}}>
          <h1>julisteet</h1>
        </div>
        <div className="service white-box" style={{backgroundColor:"#FFDD86"}}>
          <h1>käyntikortit /</h1>
          <h1>virtuaalikäyntikortit</h1>
        </div>
        <div className="service white-box" style={{backgroundColor:"#F68D8D"}}>
          <h1>3D-mallinnus</h1>
          <p>lowpoly / highpoly</p>
        </div>
        <div className="service white-box" style={{backgroundColor:"#6298CA"}}>
          <h1>videot</h1>
          <p>videot ja drone videot</p>
          <p>HD - 4k</p>
        </div>
        <div className="service white-box" style={{backgroundColor:"#E49AD0"}}>
          <h1>logo</h1>
        </div>
      </div>
      <span>lisää tulossa myöhemmin, lisäkysymykset info@devsndesigns.fi</span>
    </div>
  )
}

export default Designs