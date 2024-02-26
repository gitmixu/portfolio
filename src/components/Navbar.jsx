import React from 'react'
import { FaGithubAlt } from "react-icons/fa";
import { PiLinkedinLogo } from "react-icons/pi";
import { Link as RouterLink } from "react-router-dom";
import { CgMail } from "react-icons/cg";

const Navbar = () => {
  return (
      <div className="header">
        <h1>DevsNDesigns</h1>
        <div className='socials'>
          <RouterLink to="https://github.com/gitmixu" className="social-link">
            <FaGithubAlt className='icon'/>
          </RouterLink>
{/*           <RouterLink to="https://www.linkedin.com/in/mixu-s-759b5b291/" className="social-link">
            <PiLinkedinLogo className='icon'/>
          </RouterLink> */}
          <RouterLink to="mailto:info@devsndesigns.fi" className="social-link">
            <CgMail className='icon'/>
          </RouterLink>
        </div>
      </div>
  )
}

export default Navbar