import React from 'react'
import ServiceBox from './ServiceBox'
import './Services.css'

const Services = () => {
  return (
    <div className='services'>
     <div className="desktop">
          <div className="service-box a">
               <div className="title">Softwares</div>
               <p>Mobiili-, pc ja konsolisovellukset, datastuktuurit</p>
          </div>
          <div className="service-box b">
               <div className="title">Designs</div>
               <p>UI/UX, illustrations, somistus, kuvat, drone videot, julisteet</p>
          </div>
          <div className="service-box c">
               <div className="title">Websites</div>
               <p>Tekninen toteutus, julkaiseminen, SEO, blog, verkkokauppa</p>
          </div>
     </div>
    </div>
  )
}

export default Services