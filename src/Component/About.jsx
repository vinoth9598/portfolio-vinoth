import React from 'react';
import "../Style/about.css";

function About() {
  return (
    <div className='about'>
        <div className='about-content'>
          <div className='self'>
            <div className='para'>
                <h3>About Me</h3>
                <p>
                  Myself vinoth ,from kumbakonam.I completed Becholar of Engineering after that worked to trainee mechanical organisation.That 
                  work is good but i change my career to develop in technology oriented.so learn to coding skills with help of Guvi-IIT madras to 
                  learned [MERN - Mern Stack Developer ]. Now fresher seeking entry-level opportunities to lanch a successful career.
                </p>
            </div>
            <div className='education'>
                <h2>Education</h2>
                <p><b>Web Development</b> Guvi-IIT madras Chennai -[ MERN ]- Mern Stack Developer  </p>
                <p><b>B.E Mechanical</b> - Arasu Engineering College, Kumbakonam , 2019 (Percentage - 67%) </p>
                <p><b>HSC</b> - Little flower higher secondary school, Kumbakonam - 2015 (percentage - 67%) </p>
                <p><b>SSLC </b>- Little flower higher secondary school, Kumbakonam - 2013 (percentage - 87%) </p>
              </div>
              <div className='skill'>
                <h4>Skills</h4>
                <p>Adoptive Environment</p>
                <p>Good communication and learner</p>
              </div>
          </div>
        </div>
    </div>
  )
}

export default About;
