import React from 'react'
import { FaGithubAlt } from "react-icons/fa";
import { PiLinkedinLogo } from "react-icons/pi";
import { FaDiscord } from "react-icons/fa";
import { SiMicrosoftteams } from "react-icons/si";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='head-box'>
        <div className="header">
          <h1>Mixu</h1>
          <div className='socials'>
            <RouterLink to="https://github.com/gitmixu" className="social-link">
              <FaGithubAlt className='icon git'/>
            </RouterLink>
            <RouterLink to="https://www.linkedin.com/in/mixu-s-759b5b291/" className="social-link">
              <PiLinkedinLogo className='icon Lin'/>
            </RouterLink>
            <RouterLink to="https://discord.com/" className="social-link">
              <FaDiscord className='icon DC'/>
            </RouterLink>
            <RouterLink to="https://teams.microsoft.com/" className="social-link">
              <SiMicrosoftteams className='icon DC' />
            </RouterLink>
          </div>
        </div>
    </div>
  )
}

export default Navbar