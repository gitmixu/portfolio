import React from 'react'
import redF from './imgs/3D-red.png'
import yellowF from './imgs/3D-yellow.png'

const App = () => {

  return (
    <div className='main'>
      <div className="flowers">
        <img className='red' src={redF} alt="" />
        <img className='yellow' src={yellowF} alt="" />
      </div>
      <div className="title">
        <h1>Devs<span>N</span></h1>
        <h1 className='d'>Designs</h1>
      </div>
      <div className="notification">
        <p>sivut tulossa !</p>
      </div>
    </div>
  )
}

export default App