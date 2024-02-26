import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import HeaderSection from './components/HeaderSection'
import BodySection from './components/BodySection'

const App = () => {

  return (
    <Router>
      <div className="main-page">
        <HeaderSection />
        <BodySection />
      </div>
    </Router>
  )
}

export default App