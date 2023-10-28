import React from 'react'
import './skills.css'
import UIDesign from '../assests/ui-design.png'
import WebDesign from '../assests/website-design.png'
import AppDesign from '../assests/app-design.png'

const Skills = () => {
  return (
    <section id='skills'>
       <span className='skillTitle'>What I Do</span>
       <span className='skillDesc'>I am a skilled and passionate web developer with experience in creating visually appealing and user friendly website. I have strong understanding of design and a keen eye for detail. I am proficient in JAVA, HTML, CSS, and Javascript, as well as ReactJS</span>
       <div className='skillBars'>

        <div className='skillBar'>
            <img src={WebDesign} alt='WebDesign' className='skillBarImg'></img>
            <div className='skillBarText'>
                <h2>Web Development</h2>
                <p>Balanced and cohesive web development.</p>
            </div>
        </div>

        <div className='skillBar'>
            <img src={AppDesign} alt='AppDesign' className='skillBarImg'></img>
            <div className='skillBarText'>
                <h2>App Development</h2>
                <p>Sleek and intuitive app development.</p>
            </div>
        </div>

        <div className='skillBar'>
            <img src={UIDesign} alt='UIDesign' className='skillBarImg'></img>
            <div className='skillBarText'>
                <h2>UI/UX Design</h2>
                <p>Clean, organized, and professional web design.</p>
            </div>
        </div>

       </div>
    </section>
  )
}

export default Skills
