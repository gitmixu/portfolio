import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import bgVideo from './imgs/plantVideo.mp4'

import Skills from './Pages/Skills'
import Blog from './Pages/Blog'
import Services from './Pages/Services'
import Navbar from './components/Navbar'


const App = () => {

  return (
    <Router>
      <div className="main-page">
        <video className="bgVideo" autoPlay muted loop>
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className='section'>
          <div className="data">
            <Skills />
            <Blog />
            <Services />
          </div>
          <Navbar />
        </div>
      </div>
    </Router>
  )
}

export default App