import React from 'react'
import './Questions.css'

const Questions = ( {number, infoColor, setpage} ) => {
  console.log(number)
     const questions = ["Hei, mitä tarvitset ?", "Löytyykö alta etsimäsi ?", "Hienoa !"]
     const colors = ["#92ED83", "#9A9EFF", "#2e2e2e"]
     return (
    <div className='questions'>
      { number === 0 && <h1  key="0">Hei, mitä tarvitset ?</h1>}
      { number === 1 && <h1 key="1">Löytyykö alta etsimäsi ?</h1>}
      { number === 2 && <h1 key="2">Hienoa !</h1>}
     
     {
      number === 1 && 
      <div className='btns'>
        <button className='white-box' style={{"backgroundColor":colors[infoColor]}}  onClick={() => setpage(2)}>Kyllä</button>
        <button className='white-box' style={{"backgroundColor":"#2e2e2e"}} onClick={() => setpage(0)}>Ei</button>
      </div>
     }
    </div>
  )
}

export default Questions