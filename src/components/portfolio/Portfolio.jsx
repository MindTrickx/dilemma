import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Research Question',
    content: "What event lead to the increase of misinformation about Leila De Lima's connection on drug lords?",
    github: 'https://github.com',
    demo: 'https://dibble.com'
  },

  {
    id: 2,
    image: IMG2,
    title: 'Hypothesis',
    content: "There is a significant increase in misinformation/disinformation tweet regarding the illegal drugs accusations on Leila De Lima during the war on drugs season.",
    github: 'https://github.com',
    demo: 'https://dibble.com'
  },

  {
    id: 3,
    image: IMG3,
    title: 'Null Hypothesis',
    content: "There is no correlation between the increased misinformation about Leila De Lima's connection on drug lords and the war on drugs.",
    github: 'https://github.com',
    demo: 'https://dibble.com'
  },

  {
    id: 4,
    image: IMG4,
    title: 'Action Plan',
    content: "Analyze the frequency and posting time of mis/disinformation tweets regarding De Lima being a protector of drugs.",
    github: 'https://github.com',
    demo: 'https://dibble.com'
  },
]

const Portfolio = () => {
  return (
    <section id="formulation">
      <h5>First Things First</h5>
      <h2>Problem Formulation</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, content, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <p className='formulation__content'>{content}</p>

              </article>
            )
          })
        }

      </div>

    </section>
  )
}

export default Portfolio