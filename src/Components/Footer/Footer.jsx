import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'>Lewis</a>

      <ul className='footer__permalinks'>
        <li>
          <a href='#home'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className='footer__socials'>
        <a href='https://instagram.com'>
          <FiInstagram />
        </a>
      </div>

      <div className='footer__copyright'>
        <small>
          &copy; Lewis Murray. All rights reserved
        </small>
      </div>
    </footer>
  )
}

export default Footer