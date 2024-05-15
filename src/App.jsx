import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

/* COMPONENTS */
import Navbar from './components/Navbar/Navbar';

/* PAGES */
import Home from './Pages/Home/Home';
import Websites from './Pages/Websites/Websites';
import Designs from './Pages/Designs/Designs';
import SocialMedia from './Pages/SocialMedia/SocialMedia';
import Applications from './Pages/Applications/Applications';


const App = () => {

  return (
    <Router>
      <Navbar />
      <div className='main'>
        <Routes>
          <Route path='*' element={<Home/>}/>
          <Route path='nettisivut' element={<Websites/>}/>
          <Route path='designs' element={<Designs/>}/>
          <Route path='sosiaalinen-media' element={<SocialMedia/>}/>
          <Route path='sovellukset' element={<Applications/>}/>

        </Routes>
      </div>
    </Router>
  )
}

export default App