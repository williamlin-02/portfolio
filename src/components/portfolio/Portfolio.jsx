import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpeg'
import IMG2 from '../../assets/portfolio2.jpeg'
import IMG3 from '../../assets/portfolio3.jpeg'
import IMG4 from '../../assets/portfolio4.png'

const data = [
  {
    id: 1, 
    image: IMG1,
    title: 'React Portfolio Site',
    github: 'https://github.com/williamlin-02/react-portfolio-website',

  },
  {
    id: 2, 
    image: IMG2,
    title: 'Battleship',
    github: 'https://github.com/williamlin-02/battleship',
  },
  {
    id: 3, 
    image: IMG3,
    title: 'COVID-19 Stats Tracker',
    github: 'https://github.com/williamlin-02/covid-tracker',
  },
  {
    id: 4, 
    image: IMG4,
    title: 'Terminal Shell',
    github: 'https://github.com/williamlin-02/shell-project',

  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github}) => {
            return(
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='portfolio__btn' target='_blank'>Github</a>
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