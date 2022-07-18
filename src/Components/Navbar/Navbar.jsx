import React from 'react'
import './navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {CgWorkAlt} from 'react-icons/cg'
import {BiMessageSquareDetail} from 'react-icons/bi'

const Navbar = () => {
  return (
    <nav>
      <a href="#"> <AiOutlineHome /> </a>
      <a href="#about"> <AiOutlineUser /> </a>
      <a href="#experience"> <BiBook /> </a>
      <a href="#services"><CgWorkAlt /></a>
      <a href="#contact"> <BiMessageSquareDetail /> </a>

    </nav>
  )
}

export default Navbar