import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";
import './Navbar.css'

const Navbar = () => {
     const [nav, setNav]  = useState(false)
  return (
    <div className='navbar'>
     <div className="data">
          <div className="logo">{'>>'}</div>
          <div className="contact">Galleria</div>
          <div className="services-btn" onClick={() => setNav(!nav)}>
               <p>palvelut</p>
               <span>{ nav === false ? <IoMdArrowDown/> : <IoMdArrowUp/> }</span>
          </div>
     </div>
     <div className={nav  === true ? "down" : "up"}>
          <div className="">
               <Link to="/">Etusivu</Link>
               <p style={{"marginTop":"20px"}}>Lisäkysymykset ja tarjouskyselyt</p>
               <p>info@devsndesigns.fi</p>
          </div>
          <div className="navs">
               <div className="box">
                    <h1>Nettisisivut</h1>
                    <p>custom, template</p>
                    <Link to="/nettisivut">lue lisää!</Link>
               </div>
               <div className="box">
                    <h1>Designs</h1>
                    <p>käyntikortit, julisteet</p>
                    <Link to="/designs">lue lisää!</Link>
               </div>
               <div className="box">
                    <h1>Sosiaalinen media</h1>
                    <p>kuvat, videot</p>
                    <Link to="/sosiaalinen-media">lue lisää!</Link>
               </div>
               <div className="box">
                    <h1>Sovellukset</h1>
                    <p>UI/UX, tekninen toteutus</p>
                    <Link to="/sovellukset">lue lisää!</Link>
               </div>
          </div>

     </div>
    </div>
  )
}

export default Navbar