import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

/* COMPONENTS */
import Navbar from './components/Navbar/Navbar';

/* PAGES */
import Home from './Pages/Home/Home';
import Servs from './pages/Servs/Servs';


const App = () => {

  return (
    <Router>
      <Navbar />
      <div className='main'>
        <Routes>
          <Route path='*' element={<Home/>}/>
          <Route path='palvelut' element={<Servs/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App