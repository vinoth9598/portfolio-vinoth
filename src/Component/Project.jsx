import React from 'react';
import "../Style/project.css";

function Project() {
  return (
    <div className='project'>
      <div className='project-content'>
        <div className='full'>
          <h3> GMAIL-CLONE</h3>
          <p>Design program to react used javascript, html, react-icons and design to tailwind and backend node js used login and mail stored in mongodb database.
         </p>
          <p>Source code - <a href='https://github.com/vinoth9598/gmailClone_front.git'><span>https://github.com/vinoth9598/gmailClone_front.git</span></a></p>
          <p>Deploy link - <a href='https://gmailclone-front.netlify.app/' target='_blank'>https://gmailclone-front.netlify.app</a></p>
        </div>
        <div className='full-stack'>
            <h3>Note-Application</h3>
            <p> This function to design react library to login user and write some blogs or notes. </p>
            <p>Deploy link - <a href='https://noteapp-new.netlify.app/' target='_blank'>https://noteapp-new.netlify.app/</a></p>
        </div>
        <div className='mini'>
          <h3>CRUD</h3>
          <p>create, read, update, delete functionality used react with json-server localhost only.</p>
          <p>Deploy link - <a href='https://noteapplicationsystem.netlify.app' target='_blank'>https://noteapplicationsystem.netlify.app</a></p>
        </div>
        <div className='mini-project'>
          <h3>MINI PROJECT</h3>
          <p>	Analog timer and tic-tae-toe game used to html ,css , and javascript </p>
          <p><b>Analog Timer</b></p>
          <p>Deploy link - <a href='https://analog-timer.netlify.app/' target='_blank'>https://analog-timer.netlify.app</a></p>
          <p><b>Tic Tac Toe game</b></p>
          <p>Deploy link - <a href='https://game-tictac-sm.netlify.app/' target='_blank'>https://game-tictac-sm.netlify.app</a></p>
        </div>
      </div>
    </div>
  )
}

export default Project
