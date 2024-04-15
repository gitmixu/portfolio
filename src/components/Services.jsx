import React from 'react'

const Services = () => {
  return (
    <div className='services'>
      <h1>services</h1>
      <div className="titles">
        <div className="title">
          <p style={{"fontWeight":"bold"}}>softwares</p>
          <div className="line"></div>
        </div>
        <div className="title">
          <p>websites</p>
{/*           <div className="line"></div> */}
        </div>
        <div className="title">
          <p>designs</p>
{/*           <div className="line"></div> */}
        </div>
      </div>
      <div className="description">
          <p>PC-sovellukset, mobiilisovellukset, ylläpito, jne.</p>
        </div>
    </div>
  )
}

export default Services