import { useState } from 'react'
import {useNavigate, useLocation, Link} from "react-router-dom";
import { IoMdArrowDown, IoMdArrowUp, IoMdArrowRoundForward, IoMdArrowRoundBack  } from "react-icons/io";

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
      <div className="title">DevsNDesigns</div>
      <p className='btn' onClick={() => setNav(!nav)} >{ nav === false ? <IoMdArrowRoundForward/> : <IoMdArrowRoundBack /> }</p>
      <div className="links-desktop">
        <a onClick={() => navToPage("/")}>Etusivu</a>
        <a onClick={() => navToPage("/palvelut")}>Palvelut</a>
        <Link to="https://www.instagram.com/devsndesigns/" >Galleria</Link>
      </div>
      <div className={nav  === true ? "down" : "up"}>
        <a onClick={() => navToPage("/")}>Etusivu</a>
        <a onClick={() => navToPage("/palvelut")}>Palvelut</a>
        <Link to="https://www.instagram.com/devsndesigns/" >Galleria</Link>
      </div>
    </div>
  )
}

export default Navbar