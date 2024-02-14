import React from 'react'
import Skills from '../Pages/Skills'
import Blog from '../Pages/Blog'
import Services from '../Pages/Services'

const BodySection = () => {
  return (
    <div className='body-section'>
      <div className="me-side">
        <Skills />
        <Blog />
      </div>
      <div className="services-side">
        <Services />
      </div>
    </div>
  )
}

export default BodySection