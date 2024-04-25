import { useState } from 'react'
import { FaCaretLeft } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa6";

const data = [
     {
          "title": "Websites",
          "description": "nettisivut, nettisovellukset, ylläpito, UI/UX, SEO, ohjelmointi, toteutus, julkaisu"
     },
     {
          "title": "Softwares",
          "description": "ohjelmisto/sovellukset, datastruktuuri, UI/UX, ylläpito"
     },
     {
          "title": "Designs",
          "description": "somistus, UI/UX, kuvitukset/Ai (adobe illustration), art/taide, 3d",
     }
]

export const Services = () => {
     const [ dataIndex, setDataIndex ] = useState(0)
  return (
    <div className='services'>
     <div className="data">
          <h1>{data[dataIndex].title}</h1>
          <p>{data[dataIndex].description}</p>
     </div>
     <div className="btns">
          <button onClick={() => dataIndex === 0 ? setDataIndex(2) : setDataIndex(dataIndex-1)} ><FaCaretLeft/></button>
          <button onClick={() => dataIndex === 2 ? setDataIndex(0) : setDataIndex(dataIndex+1)} ><FaCaretRight/></button>
     </div>
    </div>
  )
}
