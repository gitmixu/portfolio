import React from 'react'
import data from '../../data.json'
import './Info.css'

const Info = ( { showInfo } ) => {
     console.log(showInfo, data.services[showInfo])
  return (
    <div className='info'>
     <div className="services">
          {
               data.services[showInfo].map((item, index) => 
                    <p className='white-box'>{item}</p>
               )
          }
     </div>

    </div>
  )
}

export default Info