import { useState } from 'react'
import {useNavigate, useLocation, Link} from "react-router-dom";
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";
import './Navbar.css'

const Navbar = () => {
     const [nav, setNav]  = useState(false)
     const navigate = useNavigate();
     const location = useLocation();
     const navToPage = async (target) => {
          await setNav(false);
          await navigate(target)
     }
  return (
    <div className='navbar'>
     <div className="data">
          <div className="logo">{'>>'}</div>
          <div className="contact"><Link to="https://www.facebook.com/profile.php?id=61559157491988&locale=fi_FI">Galleria</Link></div>
          <div className="services-btn" onClick={() => setNav(!nav)}>
               <p>palvelut</p>
               <span>{ nav === false ? <IoMdArrowDown/> : <IoMdArrowUp/> }</span>
          </div>
     </div>
     <div className={nav  === true ? "down" : "up"}>
          <div className="">
               <a onClick={() => navToPage("/")}>Etusivu</a>
               <p style={{"marginTop":"20px"}}>Lisäkysymykset ja tarjouskyselyt</p>
               <p>info@devsndesigns.fi</p>
          </div>
          <div className="navs">
               <div className="box">
                    <h1>Nettisisivut</h1>
                    <p>custom, template</p>
                    <a onClick={() => navToPage("/nettisivut")}>lue lisää!</a>
               </div>
               <div className="box">
                    <h1>Designs</h1>
                    <p>käyntikortit, julisteet</p>
                    <a onClick={() => navToPage("/designs")}>lue lisää!</a>
               </div>
               <div className="box">
                    <h1>Sosiaalinen media</h1>
                    <p>kuvat, videot</p>
                    <a onClick={() => navToPage("/sosiaalinen-media")}>lue lisää!</a>
               </div>
               <div className="box">
                    <h1>Sovellukset</h1>
                    <p>UI/UX, tekninen toteutus</p>
                    <a onClick={() => navToPage("/sovellukset")}>lue lisää!</a>
               </div>
          </div>

     </div>
    </div>
  )
}

export default Navbar