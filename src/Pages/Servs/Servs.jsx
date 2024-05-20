import React from 'react'
import './Servs.css'
import boxes from '../../imgs/boxes.png'

const Servs = () => {
  return (
    <div className='servs'>
      <div className="img"><img src={boxes} alt="" /></div>
      <div className="slider-bg">
        <div className="slider-box">
          {/*  */}
{/*           <div className="box">moi</div>
          <div className="box">moi</div>
          <div className="box">moi</div>
          <div className="box">moi</div>
          <div className="box">moi</div>
          <div className="box">moi</div>
          <div className="box">moi</div>
          <div className="box">moi</div>
          <div className="box">moi</div>
          <div className="box">moi</div>
          <div className="box">moi</div> */}
          {/*  */}
        </div>
      </div>

      <div className="services">
        <div className="service a">
          <div className="main-title">NEWEST</div>
          <div className="title">Nettisivujen päivitys</div>
          <p>Suunnittelen ja toteutan nykyisille nettisivuilleis uuden ulkoasun</p>
        </div>
        <div className="service b">
          <div className="main-title">WhyNOT</div>
          <div className="title">Virtuaalikäyntikortit</div>
          <p>Suunnittelen ja toteutan sinulle Virtuaalikäyntikortin.</p>
          <p>Esimerkiksi puhelimen taustakuvaksi.</p>
        </div>
        <div className="service c">
          <div className="main-title">YourStyle</div>
          <div className="title">Custom nettisivut</div>
          <p>Suunnittelen ja toteutan unelmiesi nettisivut.</p>
        </div>
        <div className="service d">
          <div className="main-title">BASIC</div>
          <div className="title">Template nettisivut</div>
          <p>Suunnittelen ja toteutan unelmiesi nettisivut WordPress alustalle niiden rajojen mukaan.</p>
        </div>
      </div>
    </div>
  )
}

export default Servs