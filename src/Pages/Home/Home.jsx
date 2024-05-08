import React from 'react'
import './Home.css'
import { MdKeyboardArrowRight } from "react-icons/md";


const Home = ( {selectionControl} ) => {
  return (
    <div className='home'>
     <div className="selection white-box">
          <h1>Sivut</h1>
          <button style={{"backgroundColor": "#92ED83"}} onClick={() => selectionControl(0)} ><MdKeyboardArrowRight /></button>
     </div>
     <div className="selection white-box">
          <h1>Designin</h1>
          <button style={{"backgroundColor": "#9A9EFF"}} onClick={() => selectionControl(1)} ><MdKeyboardArrowRight /></button>
     </div>
     <div className="selection white-box">
          <h1>Sovelluksen</h1>
          <button style={{"backgroundColor": "#2e2e2e"}} onClick={() => selectionControl(2)} ><MdKeyboardArrowRight /></button>
     </div>
    </div>
  )
}

export default Home