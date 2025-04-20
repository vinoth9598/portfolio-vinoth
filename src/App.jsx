
import React, { useState } from 'react';
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Skills from './Component/Skills';
import Project from './Component/Project';
import Contact from './Component/Contact';
import { IoMdMenu } from "react-icons/io";

import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoNetlify } from "react-icons/bi";
import { SiRender } from "react-icons/si";
import { RxCross1 } from "react-icons/rx";


import "./Style/app.css";

function App() {

  const [toggle,setToggle] = useState(false);

  return (
    <BrowserRouter >
        <div  className='container'>
          <div className='nav'>
            <div className='nav-item'>
                <div onClick={()=>setToggle(!toggle)} className='menu'>
                 {toggle ? <RxCross1 />: <IoMdMenu /> } 
                </div>
                <div className='dep'>
                  <a href='https://github.com/vinoth9598?tab=repositories' target='_blank'><BsGithub className='nav-icon'/></a>
                  <a href='https://www.linkedin.com/in/vinoth-p-3ba023258' target='_blank'><FaLinkedin className='nav-icon'/></a>
                  <a href='https://app.netlify.com/teams/vinodeveloper6/sites' target='_blank'><BiLogoNetlify className='nav-icon'/></a>
                  <a href='https://dashboard.render.com' target='_blank'><SiRender className='nav-icon'/></a>
                </div>
                <div className='vin'>
                    <p>vinoth</p>
                </div>
            </div>
            <div>
                  {
                    toggle ? (
                    <div className='line'>
                      <Link to='/' className='links' onClick={()=>setToggle(!toggle)}>Home</Link>
                      <Link to='/about' className='links' onClick={()=>setToggle(!toggle)}>About</Link>
                      <Link to='/skills' className='links'onClick={()=>setToggle(!toggle)} >Skills</Link>
                      <Link to='/project' className='links'onClick={()=>setToggle(!toggle)} >Project</Link>
                      <Link to='/contact' className='links' onClick={()=>setToggle(!toggle)} >Contact</Link>
                    </div>
                    ):(
                      null
                    )
                  }
                
                </div>
          </div>
          <div className='navbar'>
              <Link to='/' className='link'>Home</Link>
              <Link to='/about' className='link'>About</Link>
              <Link to='/skills' className='link'>Skills</Link>
              <Link to='/project' className='link'>Project</Link>
              <Link to='/contact' className='link'>Contact</Link>
          </div>
            
            
        </div>
          
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/project' element={<Project/>}/>
          <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
