import React from 'react';
import "../Style/contact.css";
import { MdMessage } from "react-icons/md";

function Contact() {
  return (
    <div className='contact'>
        <div className='contact-content'>
        <h2>Get In Touch</h2>
          <div className='cont'>
            <form action="https://api.web3forms.com/submit" method="POST"  className='form' >
            <input type="hidden" name="access_key" value="fd3f8b08-6f17-414f-9330-896e96d051b7"/>
              <div >
                <input 
                    type='text'
                    name='name'
                    placeholder='Name..'
                    className='name'
                    required
                  />
              </div>
              <div>
                <input
                    type='email'
                    name="email"
                    placeholder='Email..'
                    className='email'
                    required
                  />
              </div>
              <div >
              <textarea 
                  name="message" 
                  placeholder='your message' 
                  className='textarea'
                  rows={'4'} 
                  cols={'20'} 
                  required>
                  
                </textarea>
              </div>
              <button type='submit' className='button'>Submit</button>
            </form>
            <div className='mes'>
              <MdMessage className='message' />
              <MdMessage className='mess' />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact;
