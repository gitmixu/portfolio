import React from 'react'
import logo from './imgs/logo.png'
import Services from './components/Services'
import { MdCopyAll } from "react-icons/md";

const App = () => {

  return (
    <div className='container'>
      <div className="ball"></div>
      <div className="main">
        <div className="logo"><img src={logo} alt="" /></div>
        <Services />
        <div className="contact">
          <div className="email">
          <button onClick={() => navigator.clipboard.writeText('info@devsndesigns.fi')}><MdCopyAll/></button>
          <p>info@devsndesigns.fi</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App