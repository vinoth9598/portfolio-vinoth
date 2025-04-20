import React from 'react';
import { SiJavascript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";

import "../Style/skills.css";

function Skills() {
  return (
    <div className='tech'>
      <div className='sub'>
         <div className='t-skill'>
            <h3>Javascript</h3>
            <SiJavascript className='len' />
         </div>
         <div className='t-skill'>
            <h3>HTML</h3>
            <FaHtml5 className='len' />
         </div>
         <div className='t-skill'>
            <h3>CSS</h3>
            <FaCss3Alt className='len' />
         </div>
         <div className='t-skill'>
            <h3>REACT</h3>
            <FaReact className='len' />
         </div>
         <div className='t-skill'>
            <h3>NODEJS</h3>
            <FaNodeJs className='len' />
         </div>
         <div className='t-skill'>
            <h3>BOOTSTRAP</h3>
            <FaBootstrap className='len'/>
         </div>
         <div className='t-skill'>
            <h3>MONGODB</h3>
            <SiMongodb className='len'/>
         </div>
         <div className='t-skill'>
            <h3>MYSQL</h3>
            <SiMysql className='len' />
         </div>
       </div>
    </div>
  )
}

export default Skills
