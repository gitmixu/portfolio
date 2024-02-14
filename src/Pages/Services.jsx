import React from 'react'
import Lottie from "lottie-react";
import loadAnimation from "../data/load.json";

const Services = () => {
  return (
    <div className="services-box">
      <div className="load">
        <h1>Palvelut ja projektit tulossa maaliskuussa</h1>
        <Lottie animationData={loadAnimation} className='loadingAnimationData'/>
      </div>
    </div>
  )
}

export default Services