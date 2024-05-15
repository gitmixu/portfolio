import React from 'react'
import './Websites.css'
import img from '../../imgs/cake.png'

const Websites = () => {
  return (
    <div className='websites'>
      <div className="title">
        <h1>Nettisivut</h1>
        <p>Mistä tiedät maksatko nettisivuistasi liikaa?</p>
      </div>
      <div className="data">
        <div className="box white-box">
          <div className="title custom">Custom-sivut</div>
          <div className="description">
            <p>Custom-sivuilla tarkoitan sivuja, jonka visuaalisuus suunnitellaan ilman valmiita pohjia ja ohjelmoidaan sen mukaan.</p>
            <p>Tämä tarkoittaa ettei mielikuvituksella ole rajaa ja sivuista tulee juuri sen näköiset kun asiakas haluaa.</p>
            <p>Tästä syystä custom-sivut maksavat yleensä enemmän.</p>
          </div>
        </div>
        <div className="box white-box">
          <div className="title">Template-sivut</div>
          <div className="description">
            <p>Template-sivuilla tarkoitetaan sivuja, jotka toteutetaan valmiille-pohjille, nämä eivät siis vaadi ohjelmoinnin osaamista</p>
            <p>Moni “ohjelmoija” myy nettisivuja tällä tavalla ylihintaisina.</p>
            <p>Ylihintaisena tarkoitan sitä että template-sivut vaativat vain visuaalisen ilmeen tuottamisen osaamista.</p>
          </div>
        </div>
      </div>
      <div className="services">
        <img src={img} alt="" />
        <div className="data">
          <div className="title">Nettisivujen täytteet</div>
          <div className="description">
            <p>Valitsit sitten custom- tai template-sivut, vielä pitäisi päättää sisällöstä</p>
            <div className="data">
              <p className='white-box'>Blog</p>
              <p className='white-box'>ChatBot</p>
              <p className='white-box'>Galleria</p>
              <p className='white-box'>SEO (hakukoneoptimointi)</p>
              <p className='white-box'>Sosiaalisen median linktys</p>
              <p className='white-box'>Monikielisyys</p>
              <p className='white-box'>HTTPS-suojattu yhteys</p>
              <p className='white-box'>Google analytics</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Websites