import React from 'react'
import './works.css'
import Portfolio1 from '../assests/portfolio-1.png'
import Portfolio2 from '../assests/portfolio-2.png'
import Portfolio3 from '../assests/portfolio-3.png'
import Portfolio4 from '../assests/portfolio-4.png'
import Porfolio5 from '../assests/portfolio-5.png'
import Porfolio6 from '../assests/portfolio-6.png'
import { Link } from 'react-scroll'

const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='worksDesc'>I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
        <div className='worksImgs'>
            <img src={Portfolio1} alt='' className='worksImg'></img>
            <img src={Portfolio2} alt='' className='worksImg'></img>
            <img src={Portfolio3} alt='' className='worksImg'></img>
            <img src={Portfolio4} alt='' className='worksImg'></img>
            <img src={Porfolio5} alt='' className='worksImg'></img>
            <img src={Porfolio6} alt='' className='worksImg'></img>
        </div>
        <Link activeClass='active' to='service' spy={true} smooth={true} offset={-50} duration={500} className='worksBtn'>See More</Link>
    </section>
  )
}

export default Works;
