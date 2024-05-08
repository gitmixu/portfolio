import React from 'react'

const ServiceBox = ( {title, description} ) => {
  return (
    <div className='service-box'>
     <h1>{title}</h1>
     <p>{description}</p>
    </div>
  )
}

export default ServiceBox