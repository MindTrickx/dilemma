import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/question.png'
import IMG2 from '../../assets/hypothesis.png'
import IMG3 from '../../assets/null.png'
import IMG4 from '../../assets/action.png'
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
    content: "The PH drug war fatalities is significantly associated with the frequency of misinformation tweets regarding the accusation of illegal drugs to Leila De Lima.",
    github: 'https://github.com',
    demo: 'https://dibble.com'
  },

  {
    id: 3,
    image: IMG3,
    title: 'Null Hypothesis',
    content: "There is no correlation between the amound of PH drug war fatalities and the frequency of misinformation tweets regarding the accusation of illegal drugs to Leila De Lima.",
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