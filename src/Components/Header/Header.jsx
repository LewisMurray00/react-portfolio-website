import React from 'react'
import './header.css'
import HeaderButtons from './HeaderButtons'
import Myself from '../../Assests/Myself.jpeg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Lewis Murray</h1>
        <h5 className='text-light'>Front End Developer</h5>
        <HeaderButtons />
        <HeaderSocials />

        <div className='header__image__container'>
          <img src={Myself} alt='Myself'/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header