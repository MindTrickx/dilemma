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
    title: 'Handling Missing Values',
    content: "Twitter does not show the day when you joined Twitter. To handle this, we only took account the month and year of the tweet posted to stay consistent with the other date.",
    github: 'https://github.com',
    demo: 'https://dibble.com'
  },

  {
    id: 2,
    image: IMG2,
    title: 'Handling Outliers',
    content: "We removed outliers in the data especially with tweets that managed to sneak in that have dates outside 2016-2022. We used the Find method in Google Sheets if there are tweets outside in the allowed range.",
    github: 'https://github.com',
    demo: 'https://dibble.com'
  },

  {
    id: 3,
    image: IMG3,
    title: 'Ensuring Data Consistency',
    content: "We checked the dates if there are dates that have other date formats (MM/DD/YY instead of DD/MM/YY). If there are we simply switch the format to the intended date format.",
    github: 'https://github.com',
    demo: 'https://dibble.com'
  },

  {
    id: 4,
    image: IMG4,
    title: 'Normalization',
    content: "The tweet date has been normalized from 0 to 1, where 0 is the oldest and 1 is the highest. This allows us to easily see if there’s an outlier since we reduced our range to 0 and 1.",
    github: 'https://github.com',
    demo: 'https://dibble.com'
  },

  {
    id: 5,
    image: IMG5,
    title: 'Standardization',
    content: "The tweet date has been standardized to see if there are outliers in the dataset. If a data is 3 standard deviations away from the mean, we will remove the data from our dataset.",
    github: 'https://github.com',
    demo: 'https://dibble.com'
  },

  {
    id: 6,
    image: IMG6,
    title: 'Linear Interpolation',
    content: "Interpolation was used to take account for the missing values in the time series dataset. This allows us to see the time as a continuous value rather than scattered dots along the graph.",
    github: 'https://github.com',
    demo: 'https://dibble.com'
  },

  {
    id: 7,
    image: IMG1,
    title: 'Binning',
    content: "We used binning to group the time series data into months from 2016 to 2022. We divided the dataset into 12 months per year.",
    github: 'https://github.com',
    demo: 'https://dibble.com'
  },
]

const Preprocess = () => {
  return (
    <section id="exploration">
      <h5>Come on, Vámonos</h5>
      <h2>Data Exploration</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, content, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                
                <h3>{title}</h3>
                <p className='exploration__content'>{content}</p>
                
              </article>
            )
          })
        }

      </div>

    </section>
  )
}

export default Preprocess