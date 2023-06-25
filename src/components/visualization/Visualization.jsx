import React from 'react'
import './visualization.css'
import GRAPH1 from '../../assets/graph1.png'
import GRAPH2 from '../../assets/graph2.png'
import GRAPH3 from '../../assets/graph3.png'
import GRAPH4 from '../../assets/graph4.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: GRAPH1,
    title: 'Number of Tweets Containing False Information about De Lima',
    content: "We created a graph to visualize the frequency of misinforming tweets per year, though we further divide the bars by months and indicate what month it is based on the color listed on the legends.",
    github: 'https://github.com',
    demo: 'https://dibble.com'
  },

  {
    id: 2,
    image: GRAPH2,
    title: 'Number of Accounts that Tweeted False Information about De Lima',
    content: "Upon visual inspection, there is an insignificant difference in amount between the accounts created that spread information between 2009-2015 and 2016-2022. However, the mode of the frequency of accounts created is March 2017 which is also the mode of the frequency of the misinforming tweets.",
    github: 'https://github.com',
    demo: 'https://dibble.com'
  },

  {
    id: 3,
    image: GRAPH3,
    title: 'The Correlation between the Date of Tweets and the Date of Account Created',
    content: "Due to modes lining up in the frequency of tweets to the frequency of accounts created, we have plotted the creation date of the misinforming tweet against the creation date of the account spreading misinformation to see if there is a surge of new Twitter accounts to increase the volume of misinformation that have been spread. However, upon visual inspection on the graph, old accounts, or accounts made before 2016, have also spread misinformation.",
    github: 'https://github.com',
    demo: 'https://dibble.com'
  },

  {
    id: 4,
    image: GRAPH4,
    title: 'Linear interpolation',
    content: "We have used matplotlib.pyplot to plot the result of linear interpolation from numpy.",
    github: 'https://github.com',
    demo: 'https://dibble.com'
  },

]

const Visualization = () => {
  return (
    <section id="visualization">
      <h5>Seeing is Believing</h5>
      <h2>Visualization</h2>

      <div className="container portfolio__container_v">
        {
          data.map(({id, image, title, content, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <p>{content}</p>
                <div className="portfolio__item-cta">
                  <a href={image} className="btn" target="_blank">Full Screen</a>
                  <a href={image} download className="btn btn-primary">Download</a>
                </div>
              </article>
            )
          })
        }

      </div>

    </section>
  )
}

export default Visualization