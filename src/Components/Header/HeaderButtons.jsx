import React from 'react'
import CV from '../../Assests/Lewis-Murray-CV.pdf'

const HeaderButtons = () => {
  return (
    <div className='HeaderButtons'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Contact Me!</a>
    </div>
  )
}

export default HeaderButtons