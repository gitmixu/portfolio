import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Logo from './components/Logo'
import Services from './components/Services'
import Skills from './components/Skills'

const App = () => {

  return (
    <Router>
      <div className='main'>
        <Logo />
        <div className="about">
{/*           <Services />
          <Skills  /> */}
        </div>
      </div>
    </Router>
  )
}

export default App