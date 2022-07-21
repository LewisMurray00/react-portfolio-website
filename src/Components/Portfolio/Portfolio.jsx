import React from 'react'
import './portfolio.css'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

    <div className="container portfolio__container">
      
      <article className='portfolio__item'>
          <div className='portfolio__item__image'>
            {/* Add Images of the project */}
          </div>
          <h3>Portfolio Item Title</h3>
          <a href='https://github.com' className='btn' target='_blank'>View On Github</a>
          <a href='https://github.com' className='btn btn-primary' target='_blank'>Deployed App</a>
      </article>

    </div>

    </section>
  )
}

export default Portfolio