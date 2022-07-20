import React from 'react'
import './about.css'
import ME from '../../Assests/Myself.jpg'

import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me__img'>
            {/* Change image */}
            <img src={ME} alt='myself'/>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1 year experience</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Education</h5>
              <small>School of Code Graduate</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>In Progress</small>
            </article>
          </div>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nunc eu risus in libero molestie ornare et vel massa. 
              Morbi non lacus et nibh vehicula iaculis. 
              Vestibulum non nisi volutpat, pretium.
            </p>

            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        
        </div>
      </div>
    </section>
  )
}

export default About