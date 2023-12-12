import React, { useState } from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'
import contactImg from '../Assets/contact.png'
import menu from '../Assets/menu.png'
import navImg from '../Assets/navImg.jpeg'
 const Navbar = () => {
  const [showMenu,setShowMenu] = useState(false);
  return (
    
    <nav className="navbar">
      <img src={navImg} alt="" className='profile'  />
      <div className="desktopMenu">
        <Link activeClass='active' to="intro"  spy={true}  smooth = {true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
        <Link activeClass='active' to="skills"  spy={true}  smooth = {true} offset={-100} duration={500} className='desktopMenuListItem'>About</Link>
        <Link activeClass='active' to="works"  spy={true}  smooth = {true} offset={-50} duration={500}className='desktopMenuListItem'>projects</Link>
        <Link activeClass='active' to="clients"  spy={true}  smooth = {true} offset={-50} duration={500} className='desktopMenuListItem'>contact</Link>


      </div>
      <button className="desktopMenuBtn" onClick={() =>{
        document.getElementById('contact').scrollIntoView();
      }}>
        <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me
      </button>
      <img src={menu} alt="menu" className='mobMenu'onClick={() => setShowMenu(!showMenu)} />
      <div className="navMenu"  style={{display: showMenu? 'flex': 'none'}}>
        <Link activeClass='active' to="intro"  spy={true}  smooth = {true} offset={-100} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to="skills"  spy={true}  smooth = {true} offset={-100} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>About</Link>
        {/* <Link activeClass='active' to="clients"  spy={true}  smooth = {true} offset={-50} duration={500} className='ListItem'onClick={() => setShowMenu(false)}>projects</Link> */}
        <Link activeClass='active' to="works"  spy={true}  smooth = {true} offset={-50} duration={500}className='ListItem'onClick={() => setShowMenu(false)}>projects</Link>
        <Link activeClass='active' to="contact"  spy={true}  smooth = {true} offset={-50} duration={500} className='ListItem'onClick={() => setShowMenu(false)}>contact</Link>
      </div>
    </nav>
    
  )
}
export default Navbar