import React from 'react'
import { useState } from 'react'
import './navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {CgWorkAlt} from 'react-icons/cg'
import {BiMessageSquareDetail} from 'react-icons/bi'

const Navbar = () => {

  // Setting a state to change the active class on the navbar
  const [activeNav,setActiveNav] = useState('#')


  return (
    <nav>
      <a href="#"
      onClick={()=> setActiveNav('#')}
      className={activeNav === '#' ? 'active' : ''}>
       <AiOutlineHome /> 
      </a>
      
      <a href="#about"
      onClick={()=> setActiveNav('#about')} 
      className={activeNav === '#about' ? 'active' : ''}>
       <AiOutlineUser /> 
      </a>
      
      <a href="#experience"
      onClick={()=> setActiveNav('#experience')}
      className={activeNav === '#experience' ? 'active' : ''}> 
        <BiBook /> 
      </a>
      
      <a href="#services"
      onClick={()=> setActiveNav('#services')}
      className={activeNav === '#services' ? 'active' : ''}>
        <CgWorkAlt />
      </a>
      
      <a href="#contact"
      onClick={()=> setActiveNav('#contact')}
      className={activeNav === '#contact' ? 'active' : ''}> 
        <BiMessageSquareDetail /> 
      </a>
    
    </nav>
  )
}

export default Navbar