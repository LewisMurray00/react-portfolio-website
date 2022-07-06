import React from 'react'
import './header.css'
import HeaderButtons from './HeaderButtons'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Lewis Murray</h1>
        <h5 className='text-light'>Front End Developer</h5>
        <HeaderButtons />

        <div className='header__image__container'>
          <img src='' alt='Myself'/>
        </div>
      </div>
    </header>
  )
}

export default Header