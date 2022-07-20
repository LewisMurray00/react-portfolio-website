import React from 'react'
import './experience.css'

import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon'/>
              <div className='experience__details__text'>
                <h4>HTML</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon'/>
              <div className='experience__details__text'>
                <h4>CSS</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon'/>
              <div className='experience__details__text'>
                <h4>Javascript</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon'/>
              <div className='experience__details__text'>
                <h4>React</h4>
              </div>
            </article>
          </div>
        </div>

        <div className='experience__otherskills'>
          <h3>Other Skills</h3>
            <div className='experience__content'>
            
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon'/>
              <div className='experience__details__text'>
                <h4>Github/Git</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon'/>
              <div className='experience__details__text'>
                <h4>VsCode</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon'/>
              <div className='experience__details__text'>
                <h4>Figma/Figjam</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon'/>
              <div className='experience__details__text'>
                <h4>Trello</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon'/>
              <div className='experience__details__text'>
                <h4>Agile Methodology</h4>
              </div>
            </article>
          </div>
        </div>  
      </div>
    </section>
  )
}

export default Experience