
import React from 'react';
import "../Style/app.css";
import image from '../Image/profile.jpg';
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoNetlify } from "react-icons/bi";
import { SiRender } from "react-icons/si";
import "../Style/home.css";
import img from "../Image/resume.jpg";
function Home() {
  return (
    <div className='home'>
      <div className='home-content'>
        <div className='sidebar'>
          <div className='image'>
            <img src={image} className='img' alt='profile' />
          </div>
          <div className='icons'>
            <a href='https://github.com/vinoth9598?tab=repositories' target='_blank'><BsGithub className='icon'/></a>
            <a href='https://www.linkedin.com/in/vinoth-p-3ba023258' target='_blank'><FaLinkedin className='icon'/></a>
            <a href='https://app.netlify.com/teams/vinodeveloper6/sites'  target='_blank'><BiLogoNetlify className='icon'/></a>
            <a href='https://dashboard.render.com' target='_blank'><SiRender className='icon'/></a>
          </div>
        </div>
        <div className='intro'>
          <div className='int-content'>
            <h3>Welcome</h3>
            <h1>I'm Vinoth Web Developer </h1>
            <h4>Based in Tamilnadu , Chennai</h4>
            <button className='btn'>Hire me</button>
            <a href={img} download={img}><button>Download Resume</button></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
