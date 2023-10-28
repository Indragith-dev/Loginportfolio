import React, { useRef } from 'react'
import './contact.css'
import FacebookIcon from '../assests/facebook.png'
import InstagramIcon from '../assests/instagram.png'
import LinkedinIcon from '../assests/linkedin.png'
import GithubIcon from '../assests/github.png'
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();
     emailjs.sendForm('service_lhftb7b', 'template_607uald', form.current, 'cjmSHhSww2WGSdFtg')
        .then((result) => {
        console.log(result.text);
        e.target.reset();
        alert('Email Send!')
         }, 
        (error) => {
         console.log(error.text);
        });
      };

  return (
    <section id='contactPage'>
        <div id='contact'>
            <h1 className='contactTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
            <form className='contactForm' ref={form}  onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name="from_name"></input>
                <input type='email' className='email' placeholder='Your Email'name="from_email" ></input>
                <textarea className='msg' name="message" rows='5'placeholder='Your Message' ></textarea>
                <button type='submit' value='send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <a href="https://www.facebook.com/Indrajith.N.S97" target="_blank" rel="noopener noreferrer" className="link"><img src={FacebookIcon} alt='facebook' className='link' /></a>
                    <a href="https://www.instagram.com/n0_guidance" target="_blank" rel="noopener noreferrer" className="link"><img src={InstagramIcon} alt='instagaram' className='link' /></a>
                    <a href="https://www.linkedin.com/in/nsindragith" target="_blank" rel="noopener noreferrer" className="link"><img src={LinkedinIcon} alt='linkedin' className='link' /></a>
                    <a href="https://github.com/Indragith-dev" target="_blank" rel="noopener noreferrer" className="link"><img src={GithubIcon} alt='github' className='link' /></a>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact
