import React from 'react'
import './services.css'
import cv from '../assests/CV.pdf'
import Htmllogo from '../assests/html.png'
import Javaslogo from '../assests/javas.png'
import Csslogo from '../assests/css.png'
import Reactlogo from '../assests/react.png'
import Javalogo from '../assests/java.png'

const Services = () => {
  return (
    <section id='service'>
        <h2 className='serviceTitle'>Services</h2>
        <div className='serviceImgs'>
            <img src={Htmllogo} alt='html' className='serviceImg'></img>
            <img src={Javaslogo} alt='html' className='serviceImg'></img>
            <img src={Csslogo} alt='html' className='serviceImg'></img>
            <img src={Javalogo} alt='html' className='serviceImg'></img>
            <img src={Reactlogo} alt='react' className='serviceImg'></img>
           
        </div>
        <span className='serviceDesc'>Download CV from here.</span>
        <a href={cv} download="myfile.pdf" class="downloadBtn">Download</a>
    </section>
    
  )
}

export default Services
