    import React, { useState } from 'react'
    import './navbar.css'
    import logo from '../assests/logo.png'
    import menu from '../assests/menu.png'
    import contactImg from '../assests/contact.png'
    import Intro from '../Intro/intro'
    import Skills from '../Skills/skills'
    import Works from '../Works/works'
    import Contact from '../Contact/contact'
    import Footer from '../Footer/footer'
    import { Link } from 'react-scroll'
    import Services from '../Services/services'
    import { useNavigate } from 'react-router-dom';

    const Navbar = () => {

      const navigate = useNavigate();
      const handleLogout = () => {
        navigate('/')
      }
      const [showMenu, setShowMenu] = useState(false);
      return (
        
         <div>
            <nav className='navbar'>
            <img src={logo} alt='Logo' className='Logo' />
            <div className='desktopMenu'>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-60} duration={500} className='desktopMenuListItem'>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-60} duration={500} className='desktopMenuListItem' >Portfolio</Link>
                <Link activeClass='active' to='service' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Services</Link>
                <button className='logOutBtn'onClick={handleLogout}>LogOut</button>
            </div>
            <button className='desktopMenuBtn' onClick={() => {
              document.getElementById('contact').scrollIntoView({behavior:'smooth'});
            }}>
                <img src={contactImg} alt='contact' className='desktopMenuImg'/>Contact Me</button>
            
            <img src={menu} alt='Menu' className='mobMenu' onClick={()=> setShowMenu(!showMenu)}/>
            <div className='navMenu' style={{display: showMenu? 'flex': 'none'}} >
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=> setShowMenu(false)} >Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-60} duration={500} className='listItem' onClick={()=> setShowMenu(false)} >About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-60} duration={500} className='listItem' onClick={()=> setShowMenu(false)} >Portfolio</Link>
                <Link activeClass='active' to='service' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=> setShowMenu(false)} >Services</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=> setShowMenu(false)} >Contact</Link>
                <button className='listItem'onClick={handleLogout}>Log Out</button>
            </div>

         </nav>
          <Intro/>
          <Skills/>
          <Works/>
          <Services/>
          <Contact/>
          <Footer/>
         </div>

        
      )
    }
    
    export default Navbar
    