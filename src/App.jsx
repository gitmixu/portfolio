import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import HeaderSection from './components/HeaderSection'
import BodySection from './components/BodySection'

const App = () => {

  return (
    <Router>
      <div className="main-page">
        <div className='section'>
          <HeaderSection />
          <BodySection />
        </div>
      </div>
    </Router>
  )
}

export default App