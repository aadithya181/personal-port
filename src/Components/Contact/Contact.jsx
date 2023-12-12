import React, { useRef } from 'react'
import './Contact.css'
// import  walmart from '../Assets/walmart.png'
// import adobe from '../Assets/adobe.png'
// import microsoft from '../Assets/microsoft.png'
// import facebook from '../Assets/facebook.png'
import facebookIcon from '../Assets/facebook-icon.png'
import twitterIcon from '../Assets/twitter.png'
import youtubeIcon from '../Assets/youtube.png'
import instagramIcon from '../Assets/instagram.png'
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_z3a0h1g', 'template_zptvfhs', form.current, '1uUh2zRDKVNMCHySE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
   };
  return (
   
   <div id="contactPage">
     <div id="clients">
        <h1 className="contactPageTitle">Contact me</h1>
        <p className="clientsDesc">

        </p>
       
        
     </div>
    
     <div id="contact">
        <span className="contactDesc">please fill out the form to contact me</span>
        <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
            <input type="text"  id=""  className='name' placeholder='your name' name='from_name'/>
            <input type="email" name="from_email" id=""  className='email' placeholder='email' />
            <textarea name="message" id=""  rows="5" placeholder='your message' className='msg'></textarea>
            <button type='submit' value="send" className='submitBtn'>Submit</button>
       
        <div className="links">
            <img src={facebookIcon} alt="" className='link' />
            <img src={twitterIcon} alt="" className='link' />
            <img src={youtubeIcon} alt="" className='link' />
            <img src={instagramIcon} alt="" className='link' />
        </div>
        </form>
     </div>
   </div>
  )
}
