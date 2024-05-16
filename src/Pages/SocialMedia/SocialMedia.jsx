import React from 'react'
import './SocialMedia.css'

const SocialMedia = () => {
  return (
    <div className='social-media'>
      <div className="title">
        <h1>Sosiaalinen media</h1>
        <p>Onko tarvetta sosiaalisen median julkaisulle tai ylläpidolle?</p>
      </div>
      <span>lisää tulossa myöhemmin, lisäkysymykset info@devsndesigns.fi</span>
      <div className="services">
        <div className="box">
          <h1>kuvat</h1>
          <p>otamme kuvat haluamastasi kohteesta / kohteista</p>
          <p>HD / 4K</p>
        </div>
        <div className="box">
          <h1>videot</h1>
          <p>videot tai drone videot</p>
          <p>HD / 4K</p>
        </div>
        <div className="box">
          <h1>kuvitus</h1>
          <p>haluamallasi tyylillä tehty taide</p>
          <p>adobe illustration</p>
        </div>
        <div className="box">
          <h1>somistus</h1>
          <p>kuvaa varten tehty somistus / esillepano tai sosiaalisen median siistiminen</p>
        </div>
        <div className="box">
          <h1>ylläpito</h1>
          <p>pidämme huolta sosiaalisen mediasi sisällöstä, mm. kuvista, videoista ja muista julkaisuista</p>
        </div>
      </div>
    </div>
  )
}

export default SocialMedia