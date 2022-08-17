import React from 'react'
import './portfolio.css'
import Img1 from '../../Assests/Project-stock-image.jpg'

const data = [
  {
    id: 1,
    image: Img1,
    title: 'Project 1',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 2,
    image: Img1,
    title: 'Project 2',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 3,
    image: Img1,
    title: 'Project 3',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 4,
    image: Img1,
    title: 'Project 4',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 5,
    image: Img1,
    title: 'Project 5',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 6,
    image: Img1,
    title: 'Project 6',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

    <div className="container portfolio__container">
      
      { 
        data.map(({id, image, title, github, demo}) =>{
          return(
            <article key={id} className='portfolio__item'>
            <div className='portfolio__item__image'>
              {/* Add Images of the project */}
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className='portfolio__item__cta'>
              <a href={github} className='btn' target='_blank' rel="noopener noreferrer">View On Github</a>
              <a href={demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Deployed App</a>
            </div>
            </article>
          )
        })
      }

    </div>

    </section>
  )
}

export default Portfolio