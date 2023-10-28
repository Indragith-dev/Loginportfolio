import React from 'react'
import './intro.css'
import bg from '../assests/image.png'
import { Link } from 'react-router-dom'
import btnImg from '../assests/hireme.png'
const Intro = () => {
  const handleClick = () => {
    window.location.href = 'tel:9747770467';
  }
  return (
    <div>
      <section id='intro'>
        <div className='intoContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Indragith</span><br />Website Developer</span>
            <p className='introPara'>I am a skilled web developer with experience in creating <br />visually appealing and user friendly websites.</p>
            <Link><button className='btn' onClick={handleClick}><img src={btnImg} alt='Hireme'className='btnImg'></img>Hire Me</button></Link>
        </div>
        <img src={bg} alt='profile' className='bg'></img>
      </section>
    </div>
  )
}

export default Intro
