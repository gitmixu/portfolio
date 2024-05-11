import React from 'react'
import './MyServices.css'

const MyServices = ( {data} ) => {
  return (
    <div className='my-services'>
     <div className="service white-box">
          <h1>Custom sivut</h1>
          <p>UI / UX <span>(visuaalinen  ilme)</span></p>
          <p>tekninen toteutus <span>(ohjelmointi)</span></p>
          <p>SEO <span>(hakukoneoptimointi)</span></p>
          <p>sivujen julkaiseminen <span>(valitulla tai ehdotetulla webhotellilla)</span></p>
          <p>kuvat <span>(halutusta kohteesta/kohteista)</span></p>
          <p>kuvitus <span>(taide)</span></p>
          <p>Blog <span>(sivu johon voit itse julkaista sisältöä)</span></p>
          <p>ChatBot <span>(hoitaa asiakaspalvelun sivuillasi)</span></p>
          <p>ylläpito <span></span></p>
          <p>drone video <span></span></p>
     </div>
     <div className="service white-box">
          <h1>Design</h1>
          <p>somistus</p>
          <p>kuvitus <span>(taide)</span></p>
          <p>UI / UX <span>(visuaalinen  ilme)</span></p>
          <p>julisteet</p>
          <p>logo</p>
          <p>3D-mallinnus</p>
          <p>käyntikortit / virtuaalikäyntikortit</p>
          <p>drone video</p>
          <p>QR-koodit</p>
     </div>
     <div className="service white-box">
          <h1>Sosiaalinen media</h1>
          <p>videot</p>
          <p>kuvat</p>
          <p>ylläpito</p>
          <p>kuvitus</p>
          <p>somistus</p>
          <p>drone video</p>
     </div>
     <div className="service white-box">
          <h1>Sovellus</h1>
          <p>UI / UX <span>visuaalinen ilme</span></p>
          <p>tekninen toteutus</p>
          <p>datastruktuuri</p>
     </div>
    </div>
  )
}

export default MyServices